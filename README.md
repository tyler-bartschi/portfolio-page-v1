# Portfolio Page V1

A responsive software engineering portfolio built with React, Vite,
TypeScript, and CSS. 

[Found here](https://portfolio.tylerbartschi.com/)

## Local development

```bash
npm install
npm run dev
```

Quality checks:

```bash
npm run lint
npm run build
```

## Updating portfolio content

All personal and portfolio information lives in `src/data/portfolio.ts`. They
can be updated at will without having to update the site's code.

Replace these placeholder assets before publishing:

Optional project screenshots can be placed in `public/` and connected through a
project's `image` and `imageAlt` properties.

## AWS deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` deploys pushes to
`main` to a private S3 bucket and refreshes the CloudFront cache. Follow the
step-by-step IAM, OIDC, S3, CloudFront, and GitHub configuration guide in
[`docs/deployment.md`](docs/deployment.md) before running it.
