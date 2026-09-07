# Portfolio Page V1

A responsive student software engineering portfolio built with React, Vite,
TypeScript, and CSS.

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

All personal and portfolio information lives in `src/data/portfolio.ts`. Replace
the clearly labeled placeholder values there without changing component logic or
styles.

Replace these placeholder assets before publishing:

- `public/profile-placeholder.svg` with a profile image, updating `profileImage`
  in the content file if the filename changes.
- `public/resume-placeholder.pdf` with the verified résumé, updating `resumeUrl`
  if the filename changes.

Optional project screenshots can be placed in `public/` and connected through a
project's `image` and `imageAlt` properties.

Deployment infrastructure is intentionally not included in this version, per the
project specification.
