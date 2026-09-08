# AWS deployment setup

The deployment workflow builds the site, uploads `dist/` to a private S3
bucket, and has CloudFront serve the bucket contents. It authenticates to AWS
with GitHub OpenID Connect (OIDC), so no long-lived AWS access keys are stored
in GitHub.

Replace every `YOUR_*` placeholder below with the real value.

## Values to collect

- `YOUR_AWS_ACCOUNT_ID`: the 12-digit AWS account ID.
- `YOUR_AWS_REGION`: the S3 bucket's AWS Region, such as `us-west-2`.
- `YOUR_BUCKET_NAME`: the S3 bucket name only, without `s3://`.
- `YOUR_DISTRIBUTION_ID`: the CloudFront distribution ID, not its domain name.
- `YOUR_GITHUB_OWNER`: the GitHub user or organization that owns the repository.
- `YOUR_REPOSITORY`: the repository name.

## 1. Verify the private CloudFront origin

Keep **Block all public access** enabled on the S3 bucket. CloudFront should use
an Origin Access Control (OAC) to read from the private bucket.

1. Open **CloudFront → Distributions → your distribution → Origins**.
2. Select the S3 origin and choose **Edit**.
3. Confirm the origin is the regular S3 bucket origin, not the S3 website
   endpoint.
4. Under **Origin access**, choose **Origin access control settings
   (recommended)**. Select an existing OAC or create one with **Sign requests**
   enabled.
5. Save the origin.
6. Open **S3 → your bucket → Permissions → Bucket policy**.
7. Merge the statement below into any existing bucket policy. Do not overwrite
   unrelated statements.

```json
{
  "Sid": "AllowCloudFrontToReadPortfolio",
  "Effect": "Allow",
  "Principal": {
    "Service": "cloudfront.amazonaws.com"
  },
  "Action": "s3:GetObject",
  "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*",
  "Condition": {
    "StringEquals": {
      "AWS:SourceArn": "arn:aws:cloudfront::YOUR_AWS_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
    }
  }
}
```

The bucket policy above is for CloudFront's read access. The GitHub deployment
role uses a separate identity policy created below.

## 2. Add GitHub as an AWS OIDC identity provider

This is an account-level setup and only needs to be done once. If the provider
already exists, reuse it.

1. Open **IAM → Identity providers → Add provider**.
2. Select **OpenID Connect**.
3. Enter `https://token.actions.githubusercontent.com` as the provider URL.
4. Enter `sts.amazonaws.com` as the audience.
5. Add the provider.

## 3. Create the deployment permission policy

1. Open **IAM → Policies → Create policy → JSON**.
2. Paste the policy below and replace the placeholders.
3. Name it `PortfolioSiteDeploymentPolicy` and create it.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "ListPortfolioBucket",
      "Effect": "Allow",
      "Action": [
        "s3:GetBucketLocation",
        "s3:ListBucket"
      ],
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME"
    },
    {
      "Sid": "DeployPortfolioObjects",
      "Effect": "Allow",
      "Action": [
        "s3:DeleteObject",
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    },
    {
      "Sid": "RefreshPortfolioDistribution",
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation",
        "cloudfront:GetInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::YOUR_AWS_ACCOUNT_ID:distribution/YOUR_DISTRIBUTION_ID"
    }
  ]
}
```

No S3 ACL permission is needed. The workflow deliberately does not pass
`--acl public-read`, so Block Public Access remains compatible with deployment.

If the bucket uses default encryption with a customer-managed KMS key, the role
also needs `kms:Encrypt` and `kms:GenerateDataKey` for that key. The KMS key
policy must allow the role. SSE-S3 and AWS-managed S3 encryption do not require
these additional permissions.

## 4. Create the GitHub deployment role

1. Open **IAM → Roles → Create role**.
2. Select **Web identity**.
3. Select `token.actions.githubusercontent.com` as the identity provider and
   `sts.amazonaws.com` as the audience.
4. Attach `PortfolioSiteDeploymentPolicy`.
5. Name the role `PortfolioSiteGitHubDeploymentRole` and create it.
6. Open the role, choose **Trust relationships → Edit trust policy**, and use
   the policy below after replacing the placeholders.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::YOUR_AWS_ACCOUNT_ID:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com",
          "token.actions.githubusercontent.com:sub": "repo:YOUR_GITHUB_OWNER/YOUR_REPOSITORY:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

The `sub` condition is important: it prevents workflows in other repositories
or branches from assuming this role.

GitHub repositories created on or after July 15, 2026, and older repositories
that opted into immutable OIDC subjects, include the numeric owner and
repository IDs in `sub`. For those repositories, replace the `sub` value with:

```text
repo:YOUR_GITHUB_OWNER@YOUR_OWNER_ID/YOUR_REPOSITORY@YOUR_REPOSITORY_ID:ref:refs/heads/main
```

The owner ID is returned as `id` by `GET https://api.github.com/users/YOUR_GITHUB_OWNER`.
The repository and owner IDs are returned by
`GET https://api.github.com/repos/YOUR_GITHUB_OWNER/YOUR_REPOSITORY`.

Copy the completed role ARN. It will look like:

```text
arn:aws:iam::YOUR_AWS_ACCOUNT_ID:role/PortfolioSiteGitHubDeploymentRole
```

## 5. Add GitHub repository variables

Open **GitHub repository → Settings → Secrets and variables → Actions →
Variables → New repository variable** and add all four variables:

| Variable | Value |
| --- | --- |
| `AWS_REGION` | `YOUR_AWS_REGION` |
| `AWS_ROLE_ARN` | The role ARN from step 4 |
| `S3_BUCKET_NAME` | `YOUR_BUCKET_NAME` |
| `CLOUDFRONT_DISTRIBUTION_ID` | `YOUR_DISTRIBUTION_ID` |

These values are identifiers rather than credentials, so repository variables
are appropriate. Do not add AWS access-key secrets; OIDC supplies short-lived
credentials for each workflow run.

## 6. Verify CloudFront behavior

1. Confirm the distribution's **Default root object** is `index.html`.
2. Confirm the default behavior redirects HTTP to HTTPS.
3. Push the completed configuration to `main`, or open **Actions → Deploy
   portfolio → Run workflow** and select the `main` branch.
4. Wait for the build, S3 synchronization, and CloudFront invalidation steps to
   complete.
5. Open the CloudFront domain or configured custom domain and verify the site.

Manual runs deliberately deploy only `main`. Selecting another branch starts a
workflow whose deployment job is skipped, matching the IAM trust restriction.

## How the workflow handles caching

- Vite-generated files under `dist/assets/` contain content hashes and receive
  `Cache-Control: public,max-age=31536000,immutable`.
- HTML, the résumé, profile image, and other stable filenames receive
  `Cache-Control: public,max-age=0,must-revalidate`.
- The workflow creates a `/*` CloudFront invalidation and waits for it to finish.
  The invalidation is useful because CloudFront can otherwise continue serving
  cached versions after S3 has been updated. The wildcard counts as one
  invalidation path per deployment; AWS charges only after the account's monthly
  free invalidation-path allowance is exhausted.
- `aws s3 sync --delete` removes files no longer present in the current build,
  so the bucket mirrors `dist/` rather than accumulating obsolete files.

## Official references

- [GitHub: Configuring OpenID Connect in AWS](https://docs.github.com/en/actions/how-tos/secure-your-work/security-harden-deployments/oidc-in-aws)
- [AWS IAM: Configure a role for GitHub's OIDC provider](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-idp_oidc.html#idp-oidc-trust)
- [AWS CloudFront: Restrict access to an S3 origin with OAC](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html)
- [AWS CloudFront: Invalidate files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation_Requests.html)
- [AWS CLI: `s3 sync`](https://docs.aws.amazon.com/cli/latest/reference/s3/sync.html)
- [GitHub: Store information in variables](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables)
