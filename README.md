<div align="center">

# preyan-portfolio

**Personal portfolio site by Preyan Bhowmick.**

Brutalist aesthetic. Statically generated. Built to last.

[![Astro](https://img.shields.io/badge/Astro-6-FF5D01?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![MDX](https://img.shields.io/badge/MDX-5-1B1F24?style=flat-square&logo=mdx&logoColor=white)](https://mdxjs.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-live-222222?style=flat-square&logo=github&logoColor=white)](https://preyan.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-000000?style=flat-square)](LICENSE)

**Live:** [preyan.github.io](https://preyan.github.io)

</div>

---

## Overview

A static site built like a printed publication: hard borders, no rounded corners, no shadows, generous whitespace. Hub at `/` surfaces experience, expertise, and a resume download; `/projects` opens a showcase of selected work with full MDX write-ups per project.

## Stack

| Layer            | Tech                                          |
| ---------------- | --------------------------------------------- |
| Framework        | [Astro 6](https://astro.build)                |
| Content          | [MDX](https://mdxjs.com) via Content Layer    |
| Styling          | [Tailwind CSS 4](https://tailwindcss.com)     |
| Language         | TypeScript (strict)                           |
| Fonts            | Self-hosted Inter + JetBrains Mono Variable   |
| Output           | Static                                        |
| Package manager  | pnpm                                          |
| Hosting          | GitHub Pages                                  |

## Roadmap

- [x] **v1** — Hub: experience + expertise + resume download
- [x] **v2** — `/projects` showcase with MDX write-ups
- [ ] **v3** — `/blog` from markdown posts

## Visibility controls

Two layers of build-time gating; both require a rebuild to take effect.

- **Section-level** — flip a boolean in [`src/config/features.ts`](src/config/features.ts) to hide an entire section. Flags: `showProjects`, `showBlog`, `showResumeDownload`, `showAvailableStamp`. When off, the corresponding nav tile is hidden and the routes redirect to `/404` (the RSS feed returns 404 too).
- **Item-level** — handled via frontmatter on each content file. Blog posts with `draft: true` are excluded from the index, slug routes, and the RSS feed. Projects with `status: 'wip'` are excluded from the index and slug routes; `live` and `archived` projects render normally.

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
├── public/                 # static assets (favicon, resume.pdf, photo)
├── src/
│   ├── components/         # Masthead, Footer, Stamp
│   ├── content/projects/   # MDX write-ups, one per project
│   ├── content.config.ts   # Content Layer schema (zod-validated)
│   ├── layouts/            # BaseLayout
│   ├── pages/
│   │   ├── index.astro     # hub
│   │   ├── 404.astro
│   │   └── projects/       # /projects index + /projects/[slug]
│   └── styles/             # global.css + design tokens
├── .github/workflows/      # deploy.yml (GitHub Pages)
├── astro.config.mjs
└── package.json
```

## Deploy

Live at [preyan.github.io](https://preyan.github.io). Deployed automatically by the workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`. The workflow builds with `pnpm build` and publishes `./dist` to GitHub Pages — typically ~60 seconds end-to-end.

## License

[MIT](LICENSE) &copy; Preyan Bhowmick
