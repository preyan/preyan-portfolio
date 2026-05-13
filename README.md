# PREYAN.GITHUB.IO

> Personal portfolio · Est. 2026 · Vol. I

A brutalist personal portfolio built like a printed publication. Hard borders, no rounded corners, generous whitespace. Statically generated, zero JavaScript.

**[→ Live site](https://preyan.github.io)** · **[Releases](https://github.com/preyan/preyan.github.io/releases)** · **License MIT**

---

## § 01 — Status

| Field | Value |
| --- | --- |
| Version | v2.0.0 |
| Deploy | Live |
| Accessibility | WCAG 2.2 AA |
| Lighthouse | 100 / 100 / 100 / 100 |
| License | MIT |

---

## § 02 — Stack

| Layer | Tech |
| --- | --- |
| Framework | [Astro 6](https://astro.build) + MDX Content Layer |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) with custom brutalist tokens |
| Language | TypeScript (strict) |
| Fonts | Self-hosted Inter + JetBrains Mono Variable |
| Output | Static |
| Package manager | pnpm |
| Hosting | [GitHub Pages](https://pages.github.com) |
| CI | GitHub Actions (deploy + auto-release) |

---

## § 03 — Roadmap

| Version | Status | Scope |
| --- | --- | --- |
| v1 | Shipped | Hub · experience · expertise · resume download |
| v2 | Shipped | /projects · MDX write-ups · feature flag system |
| v3 | Shipped | /blog · MDX posts · RSS feed |
| v4 | Planned | Long-form case studies — architecture deep-dives, performance notes, retrospectives on shipped projects |

---

## § 04 — Getting started

Install dependencies and start the dev server. Then visit http://localhost:4321.

| Command | Description |
| --- | --- |
| pnpm install | Install dependencies |
| pnpm dev | Start the dev server with HMR |
| pnpm build | Production build to ./dist |
| pnpm preview | Preview the production build locally |
| pnpm astro ... | Run any Astro CLI command |

---

## § 05 — Visibility controls

Two layers of build-time gating. Both require a rebuild to take effect.

Section-level — edit [src/config/features.ts](src/config/features.ts) to hide entire sections or routes. Four flags: showProjects, showBlog, showResumeDownload, showAvailableStamp. When a flag is false, the nav tile disappears, the routes redirect to /404, and (for blog) the RSS feed returns 404.

Item-level — handled via frontmatter on each content file. Blog posts with draft: true are excluded from the index, slug routes, and RSS feed. Projects with status: 'wip' are excluded from the index and slug routes; live and archived projects render normally.

---

## § 06 — Project structure

| Path | Purpose |
| --- | --- |
| public/ | Static assets (favicon, resume.pdf) |
| src/components/ | Masthead · Footer · Stamp · BlogImage |
| src/config/features.ts | Build-time feature flags |
| src/content/blog/ | MDX blog posts |
| src/content/projects/ | MDX project write-ups |
| src/content.config.ts | Content Layer schema (zod-validated) |
| src/layouts/ | BaseLayout |
| src/pages/index.astro | Hub |
| src/pages/404.astro | Animated brutal-joke 404 |
| src/pages/feed.xml.js | RSS feed |
| src/pages/blog/ | /blog index + /blog/[slug] |
| src/pages/projects/ | /projects index + /projects/[slug] |
| src/styles/ | global.css + design tokens |
| .github/workflows/deploy.yml | GitHub Pages deployment |
| .github/workflows/release.yml | Auto-generated release notes |
| CLAUDE.md | Operating rules + project spec |

---

## § 07 — Deploy

Live at [preyan.github.io](https://preyan.github.io). Deployed automatically by [.github/workflows/deploy.yml](.github/workflows/deploy.yml) on every push to main. Build with pnpm build, publishes ./dist to GitHub Pages — typically ~60 seconds end-to-end.

Tagged releases (v*.*.*) trigger [.github/workflows/release.yml](.github/workflows/release.yml), which generates structured release notes from conventional commit messages and publishes a GitHub Release.

---

## § 08 — Design principles

- Brutalist publication aesthetic — hard borders, no rounded corners, no shadows, no gradients
- Zero client JS — all interactivity in CSS only
- Type-safe content — MDX frontmatter validated by zod at build time
- Conventional commits — every commit prefixed (feat:, fix:, chore:, docs:)
- Semver discipline — patch for fixes, minor for features, major reserved for redesigns

---

## License

[MIT](LICENSE) © 2026 Preyan Bhowmick · Built to last.
