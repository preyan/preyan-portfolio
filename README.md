<div align="center">

# preyan-portfolio

**Personal portfolio site by Preyan Bhowmick.**

Brutalist aesthetic. Statically generated. Built to last.

[![Astro](https://img.shields.io/badge/Astro-6-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-deploy-222222?style=flat-square&logo=github&logoColor=white)](https://pages.github.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-000000?style=flat-square)](LICENSE)

[Live site](https://preyan.github.io) &nbsp;·&nbsp; _pending GitHub Pages connection_

</div>

---

## Overview

A single-page hub showcasing experience, expertise, and a downloadable resume — built like a printed publication: hard borders, no rounded corners, no shadows, plenty of negative space.

## Stack

| Layer            | Tech                                          |
| ---------------- | --------------------------------------------- |
| Framework        | [Astro 6](https://astro.build)                |
| Styling          | [Tailwind CSS 4](https://tailwindcss.com)     |
| Language         | TypeScript (strict)                           |
| Fonts            | Self-hosted Inter + JetBrains Mono Variable   |
| Output           | Static                                        |
| Package manager  | pnpm                                          |
| Hosting          | GitHub Pages                                  |

## Roadmap

- [x] **v1** — Hub: experience + expertise + resume download
- [ ] **v2** — `/projects` showcase
- [ ] **v3** — `/blog` from markdown posts

## Getting started

```sh
pnpm install
pnpm dev
```

Then visit [`http://localhost:4321`](http://localhost:4321).

### Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Start the dev server with HMR        |
| `pnpm build`     | Production build to `./dist`         |
| `pnpm preview`   | Preview the production build locally |
| `pnpm astro ...` | Run any Astro CLI command            |

## Project structure

```text
.
├── public/              # static assets (favicon, resume.pdf, photo)
├── src/
│   ├── components/      # Masthead, Footer, Stamp
│   ├── layouts/         # BaseLayout
│   ├── pages/           # index.astro, 404.astro
│   └── styles/          # global.css + design tokens
├── astro.config.mjs
└── package.json
```

## Deploy

Deployed to GitHub Pages via the workflow at `.github/workflows/deploy.yml`.

1. Repo **Settings** → **Pages** → **Build and deployment** → Source: **GitHub Actions**
2. Push to `main` (or trigger `workflow_dispatch`) — the workflow builds with `pnpm build` and publishes `./dist`
3. Site goes live at `https://preyan.github.io`

Live in ~60 seconds after the workflow completes.

## License

[MIT](LICENSE) &copy; Preyan Bhowmick
