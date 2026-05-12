# CLAUDE.md

Operating rules, project spec, and v1 build instructions for `preyan-portfolio`. Single source of truth — re-read on every session.

---

## Part 1 — Operating rules (NON-NEGOTIABLE)

### Efficiency
1. **CLI > manual.** Always check for an official scaffold/CLI command before writing config by hand.
2. **Batch tool calls.** Chain bash commands with `&&`. Read files in parallel. Don't narrate between calls.
3. **No permission-asking for obvious things.** If the spec says "install Tailwind," run the command.
4. **No preamble, no postamble.** Do the work. Show the result. Stop.

### Production code quality
Every file must meet these standards. Speed does NOT excuse cutting corners.

**TypeScript**
- Strict mode on. No `any` anywhere — use `unknown` and narrow.
- Every Astro component has an explicit `interface Props { ... }` in frontmatter.
- `Astro.props` destructured with defaults where appropriate.
- No `as` casts unless necessary, never `as any`.
- `const` over `let`. Use `readonly` for arrays in props that won't change.
- `import type { ... }` for type-only imports.

**Astro components**
- Typed Props interface for every component.
- Frontmatter scripts stay minimal. Heavy logic goes in `src/lib/`.
- No client-side JS unless required. When required, use proper Astro client directives.
- Slots are explicit; named slots if more than one.

**CSS / Tailwind**
- Utilities first. Custom CSS only when utilities can't express it.
- Mobile-first responsive: base = mobile, modifiers = larger.
- No `!important` except the one global border-radius reset.
- No magic numbers — use design tokens.
- Class ordering: layout → spacing → typography → color → state.

**Accessibility (mandatory)**
- Semantic HTML: `<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`.
- Correct heading hierarchy. One `<h1>` per page. No skipped levels.
- All interactive elements have accessible names.
- Links have descriptive text — never "click here" alone.
- Focus states visible. Never remove outlines without replacement.
- WCAG AA contrast minimum (4.5:1 body, 3:1 large).
- Keyboard navigable end to end.

**SEO & meta**
- Every page: `<title>`, meta description, canonical URL.
- Every page: og:title, og:description, og:type, og:url.
- Every page: twitter:card, twitter:title, twitter:description.
- `<html lang="en">`.
- Title pattern: `[Page] — Preyan Bhowmick` (em dash).

**Performance**
- `output: 'static'` in astro.config.mjs.
- Zero client JS unless required.
- Fonts self-hosted via Fontsource. Preload Inter 900.
- No external CDN runtime calls.

**Naming**
- Components: PascalCase. Variables: camelCase.
- Booleans: prefix with `is`, `has`, `should`.

**Comments**
- Comment WHY, not WHAT.
- TODOs include date and context: `// TODO 2026-05-12: ...`.
- No commented-out code in commits.

**Git hygiene**
- Conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `style:`, `refactor:`.
- One logical change per commit.
- `pnpm build` MUST pass before committing.

### Hard rules
- **pnpm only.** Never npm, yarn, or bun.
- **CLI for scaffolding:** `pnpm create astro@latest`, `pnpm astro add <name> --yes`, `pnpm add <name>`.
- **Do NOT manually write:** astro.config.mjs, tsconfig.json, package.json (from scratch), Tailwind config (Tailwind 4 = config-in-CSS).
- **Manually write:** components, pages, layouts, content config, MDX files, global stylesheet.

### Drift prevention
- The tech stack in Part 2 is LOCKED. No React, Next.js, Vue, shadcn, framer-motion, etc.
- The design system in Part 2 is LOCKED. No rounded corners, shadows, gradients, blur — ever.
- The current version scope in Part 3 is LOCKED. Do NOT pre-build v2 or v3 features in v1.
- If a request conflicts with this file, point to the conflict and ask before deviating.

### Communication
- Show commands and output. Don't narrate.
- Final summary: 3-5 bullets max.
- One question max if blocked.

---

## Part 2 — Project spec

### Goal
Personal portfolio site for Preyan Bhowmick. Brutalist aesthetic. Shipped in versions.

### Version roadmap

| Version | Scope | Status |
|---|---|---|
| **v1** | Single-page site: hub showing experience + expertise + resume download button | ✅ Shipped |
| **v2** | Add /projects — showcase of personal/work projects | ✅ Shipped |
| **v3** | Add /blog — markdown posts authored in GitHub | **Building now** |

**Important:** v1 is a single page. There is no `/resume` route — the resume is a downloadable PDF only. All content (intro, experience, expertise) lives on the hub at `/`.

### Tech stack (LOCKED)
- Framework: Astro 5
- Styling: Tailwind CSS 4 (via `pnpm astro add tailwind`)
- Package manager: pnpm
- Fonts: Fontsource self-hosted — Inter + JetBrains Mono Variable
- TypeScript: strict mode
- Output: static
- Hosting: Cloudflare Pages (connected post-launch)

### Design system (LOCKED)
- Aesthetic: brutalist — treat the site like a printed publication
- Background: `#f0eee6` (warm cream)
- Ink: `#000000`
- Accent: `#fff200` (yellow) — used sparingly for stamps and key highlights
- Muted text: `#6a665e`
- Borders: 2px (3px for emphasis) solid black, **never** rounded
- Display font: Inter, weight 900, tight tracking, ALL CAPS where headlines
- Mono font: JetBrains Mono Variable for metadata, timestamps, technical labels
- Body font: Inter, weight 400/500
- No shadows, no gradients, no blur effects — ever
- Slight rotations (1–3°) on stamps for hand-placed feel
- Masthead reads: `PREYAN.DEV / VOL. I / [page name]`
- Stamp variants: `AVAILABLE`, `LIVE`, `ARCHIVED`, `WIP`, `FEATURED`

### Routes (v1 only)
- `/` — Hub (intro + experience + expertise + resume download)
- `/resume.pdf` — Placeholder PDF in `/public`
- `/404` — Brutalist 404

### Personal info
- Name: Preyan Bhowmick
- Role: Senior Full Stack Developer
- Location: Kolkata, India
- Years of experience: 7
- Email: preyan1997@gmail.com
- Phone: +91 98365 56742
- GitHub: https://github.com/preyan
- LinkedIn: https://linkedin.com/in/preyan

### Hub content

**Headline:** Full stack engineer who ships.

**Sub-headline:** Senior Full Stack Developer at Accenture, based in Kolkata. I build production web applications with Angular, Node.js, and NestJS — currently focused on performance, mentorship, and shipping software that works.

**Experience entries:**

ACCENTURE — Senior Full Stack Developer · Feb 2022 — Present · Kolkata
- Build full-stack modules with Angular (frontend) and Node.js/NestJS (backend), wired to MongoDB via Mongoose
- Designed and shipped REST APIs across Express and NestJS for production workloads
- Refactored backend to TypeScript-first — measurable gains in maintainability and type safety
- Led API performance tuning that cut response times by 30%
- Mentored junior engineers on frontend architecture and backend patterns; contributed to ~30% team velocity lift
- AWARDS: Growth Catalyst, Star Performer

CAPGEMINI — Full Stack Developer · Jul 2018 — Feb 2022 · Mumbai
- Shipped full-stack features in Angular + Node.js + MongoDB; ~20% application efficiency improvement
- Built REST APIs and refactored backend services for ~30% faster response times
- Partnered with QA and DevOps to streamline Azure DevOps pipelines, cutting deployment time by ~30%
- Used Git + Jira to coordinate sprint planning across distributed teams
- AWARDS: Xtra Mile, Star Performer, Certificate of Appreciation; Finalist — Burger Hack 2.0

**Expertise (grouped pills):**

- FRONTEND: Angular 2+, TypeScript, JavaScript, RxJS, NGRX, Tailwind, Bootstrap, HTML5, CSS3, PrimeNG, ngBootstrap
- BACKEND: Node.js, NestJS, Express, REST APIs
- DATABASE: MongoDB, MySQL, Oracle, SQL, NoSQL
- DEVOPS & TOOLS: Azure DevOps, GitHub Actions, Git, Bitbucket, Jira, Swagger, Nx Workspace
- TESTING: Karma, Jasmine, Postman
- UTILITIES: Lodash, Day.js

---

## Part 3 — v1 build instructions (execute autonomously, in order)

### Part 3.1 — Scaffold

```
pnpm create astro@latest . --template minimal --typescript strict --no-git --skip-houston
pnpm install
pnpm astro add tailwind --yes
pnpm add @fontsource/inter @fontsource-variable/jetbrains-mono
```

Edit `astro.config.mjs`: set `site: "https://preyan.pages.dev"`, confirm `output: 'static'`.

### Part 3.2 — Global styles

Create `src/styles/global.css`:

```css
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/500.css";
@import "@fontsource/inter/900.css";
@import "@fontsource-variable/jetbrains-mono";
@import "tailwindcss";

@theme {
  --color-cream: #f0eee6;
  --color-ink: #000000;
  --color-accent: #fff200;
  --color-muted: #6a665e;
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "JetBrains Mono Variable", "JetBrains Mono", ui-monospace, monospace;
}

* { border-radius: 0 !important; }
html { -webkit-text-size-adjust: 100%; }
body {
  background-color: var(--color-cream);
  color: var(--color-ink);
  font-family: var(--font-sans);
  font-weight: 400;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a { color: inherit; }
*:focus-visible {
  outline: 3px solid var(--color-accent);
  outline-offset: 2px;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Part 3.3 — Components

Every component has a typed `Props` interface. Semantic HTML. WCAG AA throughout.

**`src/components/Masthead.astro`**
- Props: `pageName: string` (required)
- Renders `<header role="banner">` with text `PREYAN.DEV / VOL. I / {pageName}`
- JetBrains Mono, uppercase, 12px, letter-spacing 0.15em
- Padding 12px 16px, 2px solid black border-bottom

**`src/components/Footer.astro`**
- No props
- Renders `<footer role="contentinfo">` with flex layout (column on mobile, row on desktop)
- Left: three links — email (mailto:), GitHub, LinkedIn — JetBrains Mono 12px
- Right: `LAST UPDATED [date]` mono uppercase. Today's date formatted as `DD MMM YYYY` via `Intl.DateTimeFormat`
- 2px solid black border-top, padding 12px 16px
- External links: `target="_blank" rel="noopener noreferrer"`

**`src/components/Stamp.astro`**
- Props: `text: string`, `variant: 'available' | 'live' | 'archived' | 'wip' | 'featured'`, `rotation?: number` (default 2)
- Renders `<span>` with text content
- 2px solid black border, JetBrains Mono bold 11px uppercase, padding 4px 10px, display inline-block
- Variants:
  - `available`: bg accent yellow, text ink
  - `live`: bg white, text ink
  - `featured`: bg ink, text accent yellow
  - `archived`: bg cream, text muted
  - `wip`: bg white, text ink, border-style dashed
- Apply rotation via inline `transform` style

**`src/layouts/BaseLayout.astro`**
- Props: `title: string`, `description: string`, `pageName: string`
- Outputs full HTML document with `lang="en"`
- `<head>` includes:
  - charset UTF-8
  - viewport meta
  - title tag
  - meta description
  - canonical URL: `https://preyan.pages.dev${Astro.url.pathname}`
  - favicon link to `/favicon.svg`
  - og:title, og:description, og:type="website", og:url
  - twitter:card="summary_large_image", twitter:title, twitter:description
  - Preload link for Inter 900 font
- Imports `global.css`
- Body: skip-to-main-content link as first focusable element, then `<Masthead>`, then `<main id="main"><slot /></main>`, then `<Footer />`

### Part 3.4 — Pages

**`src/pages/index.astro` — HUB (single-page v1)**

This is the only content page in v1. It contains: hero + intro, experience timeline, expertise pills, resume download.

BaseLayout props:
- `title="Preyan Bhowmick — Full Stack Engineer"`
- `description="Senior Full Stack Developer at Accenture, based in Kolkata. I build production web applications with Angular, Node.js, and NestJS — currently focused on performance, mentorship, and shipping software that works."`
- `pageName="HOME"`

**Section 1 — Hero** (padding `4rem 2rem` desktop / `2rem 1.5rem` mobile, position relative)

- `<p>` pre-label "PREYAN.DEV / EST. 2026 / IDX 001" — mono uppercase 11px letter-spacing 0.15em color muted
- Top-right corner (absolute positioned): `<Stamp text="AVAILABLE" variant="available" rotation={3} />`
- `<h1>FULL STACK ENGINEER WHO SHIPS.</h1>` — Inter 900, 72px desktop / 40px mobile, line-height 0.95, letter-spacing -0.04em, uppercase, margin-top 2rem
- `<p>` sub-headline (same as description above) — max-width 540px, 16px, line-height 1.5, margin-top 1.5rem
- Contact line beneath sub-headline: `<p>` mono 13px muted with mailto and tel links — `preyan1997@gmail.com · +91 98365 56742 · Kolkata, India`
- Resume download button: `<a href="/resume.pdf" aria-label="Download resume PDF" download>DOWNLOAD RESUME ↓</a>` — Inter 900 18px uppercase, 3px solid black border, padding `1rem 2rem`, hover bg ink text cream, margin-top 2rem, display inline-block

**Section 2 — Experience** (padding `4rem 2rem` desktop / `3rem 1.5rem` mobile, border-top 2px solid black)

- `<h2 id="exp-heading">EXPERIENCE</h2>` Inter 900 32px uppercase, margin-bottom 2rem
- Two `<article>` entries, separated by 1px solid black `<hr>` with `margin: 2.5rem 0`:

Accenture as `<article>`:
- Top row flex justify-between: `<h3>ACCENTURE</h3>` Inter 900 28px uppercase (left); `<p>Feb 2022 — Present · Kolkata</p>` mono 12px muted (right)
- `<p>Senior Full Stack Developer</p>` italic Inter 500 17px, margin-top 0.5rem
- `<ul>` list-style:none, padding-left 0, margin-top 1rem, each `<li>` body 15px line-height 1.6 with `— ` prefix via `::before`:
  - Build full-stack modules with Angular (frontend) and Node.js/NestJS (backend), wired to MongoDB via Mongoose
  - Designed and shipped REST APIs across Express and NestJS for production workloads
  - Refactored backend to TypeScript-first — measurable gains in maintainability and type safety
  - Led API performance tuning that cut response times by 30%
  - Mentored junior engineers on frontend architecture and backend patterns; contributed to ~30% team velocity lift
- `<p>AWARDS: Growth Catalyst, Star Performer</p>` mono 11px uppercase color muted margin-top 1rem

Capgemini as `<article>`:
- Top row flex justify-between: `<h3>CAPGEMINI</h3>` Inter 900 28px uppercase (left); `<p>Jul 2018 — Feb 2022 · Mumbai</p>` mono 12px muted (right)
- `<p>Full Stack Developer</p>` italic Inter 500 17px
- `<ul>` same styling:
  - Shipped full-stack features in Angular + Node.js + MongoDB; ~20% application efficiency improvement
  - Built REST APIs and refactored backend services for ~30% faster response times
  - Partnered with QA and DevOps to streamline Azure DevOps pipelines, cutting deployment time by ~30%
  - Used Git + Jira to coordinate sprint planning across distributed teams
- `<p>AWARDS: Xtra Mile, Star Performer, Certificate of Appreciation; Finalist — Burger Hack 2.0</p>` mono 11px uppercase color muted margin-top 1rem

**Section 3 — Expertise** (padding `4rem 2rem` desktop / `3rem 1.5rem` mobile, border-top 2px solid black)

- `<h2>EXPERTISE</h2>` Inter 900 32px uppercase, margin-bottom 2rem
- Six `<div>` subcategories, each with margin-bottom 1.5rem:
  - `<h3>FRONTEND</h3>` mono 11px uppercase color muted margin-bottom 0.75rem
  - Then pills inline below
  - Repeat for BACKEND, DATABASE, DEVOPS & TOOLS, TESTING, UTILITIES
- Each pill: `<span>` with 2px solid black border, JetBrains Mono 12px, padding 6px 10px, margin 4px 8px 4px 0, display inline-block, background cream

Pill content per category:
- FRONTEND: Angular 2+, TypeScript, JavaScript, RxJS, NGRX, Tailwind, Bootstrap, HTML5, CSS3, PrimeNG, ngBootstrap
- BACKEND: Node.js, NestJS, Express, REST APIs
- DATABASE: MongoDB, MySQL, Oracle, SQL, NoSQL
- DEVOPS & TOOLS: Azure DevOps, GitHub Actions, Git, Bitbucket, Jira, Swagger, Nx Workspace
- TESTING: Karma, Jasmine, Postman
- UTILITIES: Lodash, Day.js

**Section 4 — Coming soon** (padding `3rem 2rem` desktop / `2rem 1.5rem` mobile, border-top 2px solid black)

- `<p>` mono 11px uppercase letter-spacing 0.15em color muted: "COMING SOON / VOL. II"
- `<ul>` margin-top 1rem, list-style none padding-left 0, each `<li>` body 14px with `— ` prefix:
  - Projects showcase
  - Blog

**`src/pages/404.astro`**

BaseLayout props:
- `title="404 — Page Not Found"`
- `description="The page you're looking for doesn't exist."`
- `pageName="404"`

Layout:
- `<section>` centered, min-height 60vh, flex column align-items center justify-content center, text-align center
- `<h1>404</h1>` Inter 900, 160px desktop / 96px mobile, line-height 1
- `<p>PAGE NOT FOUND. TRY AGAIN.</p>` mono 16px uppercase letter-spacing 0.1em margin-top 1rem
- `<a href="/">← BACK TO HOME</a>` mono uppercase 14px margin-top 2rem

### Part 3.5 — Assets

Create `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" fill="#fff200"/><text x="16" y="24" font-family="Inter, system-ui, sans-serif" font-weight="900" font-size="22" fill="#000" text-anchor="middle">P</text></svg>
```

Create `public/resume.pdf` placeholder:

```
echo "Resume PDF coming soon. Replace this file with the actual export." > public/resume.pdf
```

### Part 3.6 — README

Replace `README.md` with:

```markdown
# Preyan Portfolio

Personal portfolio site by Preyan Bhowmick — Senior Full Stack Developer.

Brutalist aesthetic, content-driven architecture, statically generated for speed.

**Live:** https://preyan.pages.dev *(pending Cloudflare connection)*

## Roadmap
- **v1** — Hub with experience + expertise + resume download (current)
- **v2** — `/projects` showcase (coming)
- **v3** — `/blog` from markdown posts (coming)

## Stack
- Astro 5
- Tailwind CSS 4
- TypeScript strict
- Cloudflare Pages

## Development

```
pnpm install
pnpm dev
```

Scripts: `pnpm dev`, `pnpm build`, `pnpm preview`

## TODO
- Replace `public/resume.pdf` with actual PDF export

## License
MIT
```

### Part 3.7 — Verification

Run `pnpm build`. Must complete with zero errors. Fix any errors that appear.

Run `pnpm preview` and confirm:
- `/` returns 200 and renders hub with all four sections (hero, experience, expertise, coming soon)
- `/resume.pdf` resolves (placeholder text file is fine)
- `/nonexistent-route` returns the 404 page

Stage all changes with `git add .`. **Do NOT commit** — Preyan will review and commit himself.

Report:
- Total files created
- Files via CLI vs manual
- Build size and any warnings
- Anything skipped or compromised

---

## Part 4 — Post-build (Preyan does this, not Claude Code)

After Claude Code finishes:

```
pnpm dev
# open http://localhost:4321, scroll through entire hub page
# verify all 4 sections render: hero, experience, expertise, coming soon
# verify mobile responsiveness (resize browser)
# verify 404 by visiting /nonexistent
# verify resume download button click attempts /resume.pdf

git add .
git commit -m "feat: v1 hub page with experience and expertise"
git push
```

Replace `public/resume.pdf` with actual PDF before next push.

After VQ ends — connect Cloudflare Pages:
1. dash.cloudflare.com → Workers & Pages → Create → Pages → Connect to Git
2. Pick `preyan-portfolio` repo
3. Framework preset: Astro
4. Build command: `pnpm build`
5. Output directory: `dist`
6. Env var: `NODE_VERSION=22`
7. Save and Deploy


## Part 5 — v2 build instructions (execute autonomously, in order)

### v2 scope
Add a projects showcase to the existing site:
- New route `/projects` — index page with project cards
- Dynamic route `/projects/[slug]` — full write-up per project
- Astro Content Collection backed by MDX files
- Three projects: Velora (featured), preyan-portfolio, rand-name-gen
- Add a `PROJECTS →` nav tile to the existing hub page
- Update the hub's "Coming soon" section to remove "Projects showcase" and keep only "Blog"

### Tech stack additions
Run only if not already present:
```
pnpm astro add mdx --yes
```

(Tailwind is already configured from v1 — do not re-add.)

### Part 5.1 — Content Collection

Create `src/content/config.ts`:

```ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()).readonly(),
    liveUrl: z.string().url().optional(),
    codeUrl: z.string().url(),
    npmUrl: z.string().url().optional(),
    status: z.enum(['live', 'archived', 'wip']),
    featured: z.boolean().default(false),
    order: z.number().int().positive(),
  }),
});

export const collections = { projects };
```

### Part 5.2 — MDX content files

Create `src/content/projects/velora.mdx`:

```markdown
---
id: "001"
title: "VELORA"
description: "A cinematic quote experience. Fullscreen, atmospheric, immersive. Built with Angular 21 and the Web Audio API."
stack: ["Angular 21", "Signals", "Web Audio API", "SCSS", "Bun"]
liveUrl: "https://preyan.github.io/velora"
codeUrl: "https://github.com/preyan/velora"
status: "live"
featured: true
order: 1
---

## What it is
Velora is a fullscreen, immersive quote app that transforms how you experience words. Every animation, sound, and color shift is intentional. The goal: to make you feel something.

## Why I built it
Inspired by Interstellar, Apple, and A24. Most quote apps treat words as content to consume. I wanted to treat them as something to sit with — fullscreen, with ambient audio, cinematic transitions, and zero clutter.

## Architecture
- Angular 21 standalone components, no NgModules
- Signals for reactive state across QuoteService, ThemeService, AudioService
- Shallow component tree, maximum 4 levels deep
- Composition over abstraction

## The interesting parts
- Web Audio API with smooth fade transitions between ambient tracks
- Persistent theme and audio settings via localStorage
- Screenshot export of any quote as a PNG
- Keyboard shortcuts (P/N for navigation, T for themes, Ctrl+S for capture)

## Performance
- 81KB production bundle
- Smooth 60fps animations across all themes
- Lighthouse score above 90, WCAG AAA accessibility

## What I'd do differently
Cinematic autoplay was deferred. Shareable URLs that encode quote + theme would have been worth front-loading. The audio engine is also overbuilt for the current track count — designed for 20+ tracks, ships with 3.

## Stack
Angular 21 · Signals · Web Audio API · SCSS · Bun
```

Create `src/content/projects/preyan-portfolio.mdx`:

```markdown
---
id: "002"
title: "PREYAN.GITHUB.IO"
description: "This portfolio. Brutalist design, content-driven architecture, statically generated for speed."
stack: ["Astro 5", "MDX", "Tailwind 4", "TypeScript", "GitHub Pages"]
liveUrl: "https://preyan.github.io"
codeUrl: "https://github.com/preyan/preyan.github.io"
status: "live"
featured: false
order: 2
---

## What it is
The site you're reading. A brutalist personal portfolio that doubles as a project itself.

## Why this approach
Most developer portfolios in 2026 look the same — Inter, gradients, glassmorphism, animation libraries. I wanted something that felt like a publication: hard borders, monospace metadata, status stamps, real content over decoration.

## Decisions
- Astro over Next.js for content-first sites — ships zero JS by default
- Path routing for simplicity — every section gets a clean URL without subdomain DNS overhead
- MDX content collections for type-safe project frontmatter — typos fail the build
- Tailwind 4 with custom design tokens — brutalist palette defined once
- GitHub Pages for free, fast static hosting with automatic SSL

## What I learned
Shipping fast required cutting scope aggressively. Originally planned subdomains, a blog, and an ideas wall — v1 launched with just the hub. The constraint forced better decisions: no feature made the cut unless it was essential.

## Stack
Astro 5 · MDX · Tailwind 4 · TypeScript · GitHub Pages
```

Create `src/content/projects/rand-name-gen.mdx`:

```markdown
---
id: "003"
title: "RAND-NAME-GEN"
description: "A small npm package for generating random names with configurable options. A sandbox for learning dual-publishing across npm and JSR."
stack: ["TypeScript", "tsup", "npm", "JSR"]
codeUrl: "https://github.com/preyan/rand-name-gen"
npmUrl: "https://npmjs.com/package/rand-name-gen"
status: "archived"
featured: false
order: 3
---

## What it is
A small npm package that returns random names with configurable options (title, first, last). Published to both npm and JSR.

## Why it exists
I wanted to learn the full package publishing flow — semantic versioning, dual registry publishing, CI release automation — without the pressure of a real product. This was the sandbox.

## What I learned
- Dual-publishing to npm and JSR from a single source
- tsup for zero-config TypeScript bundling
- Automated changelog generation via GitHub Actions
- The surprisingly involved metadata required for a good citizen package — keywords, repository, bugs, exports map

## Status
Archived. Goal achieved.

## Stack
TypeScript · tsup · npm · JSR
```

### Part 5.3 — Pages

**`src/pages/projects/index.astro` — PROJECTS INDEX**

Use BaseLayout with:
- `title="Projects — Preyan Bhowmick"`
- `description="Selected projects by Preyan Bhowmick — Velora, this portfolio, and more."`
- `pageName="PROJECTS"`

Layout:
- Top header padding `1.5rem 2rem` border-bottom 2px black:
  - `<p>` "ALL PROJECTS · 03 ENTRIES" mono uppercase 13px letter-spacing 0.15em
- `<section>` containing a CSS grid `auto-fit minmax(320px, 1fr)`, gap 0 (cards share borders)
- Sort projects by `order` field ascending
- Each card as `<article>` with 2px solid black border, padding 1.5rem:
  - Top flex row justify-between align-start:
    - `<p>` project number `"#001"` / `"#002"` / `"#003"` Inter 900 32px uppercase (left)
    - Stamps stacked on right (top to bottom): status stamp, plus FEATURED stamp if `featured === true`
  - `<h2>{title}</h2>` Inter 900 28px uppercase margin-top 1.5rem
  - `<p>{description}</p>` body 15px line-height 1.5 color muted margin-top 0.5rem
  - `<div>` stack pills row, margin-top 1rem (same pill styling from the v1 expertise section)
  - `<div>` link row margin-top 1.5rem, flex gap 1.5rem, mono 13px uppercase:
    - `<a href={liveUrl} target="_blank" rel="noopener noreferrer">LIVE ↗</a>` if `liveUrl`
    - `<a href={codeUrl} target="_blank" rel="noopener noreferrer">CODE ↗</a>` always
    - `<a href={`/projects/${slug}`}>WRITE-UP →</a>` always (internal, no target blank)
    - `<a href={npmUrl} target="_blank" rel="noopener noreferrer">NPM ↗</a>` if `npmUrl`
- Hover on the entire `<article>` card: background ink, project number text accent yellow, all other text cream (no transition — sharp)
- Cards stack full-width on mobile

**`src/pages/projects/[slug].astro` — PROJECT DETAIL**

Use `getStaticPaths` to generate one page per project from the content collection.

```ts
export async function getStaticPaths() {
  const projects = await getCollection('projects');
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project },
  }));
}
```

BaseLayout props:
- `title={`${project.data.title} — Preyan Bhowmick`}`
- `description={project.data.description}`
- `pageName={`PROJECT / ${project.data.title}`}`

Layout:
- **Header** padding 2rem border-bottom 2px black:
  - `<p>` project number "#001" etc — Inter 900 24px color muted
  - Stamps below: status (always), FEATURED if applicable
  - `<h1>{project.data.title}</h1>` Inter 900 56px desktop / 36px mobile uppercase margin-top 1rem
  - `<p>{project.data.description}</p>` body 18px max-width 600px margin-top 1rem
- **Metadata strip** padding `1.5rem 2rem` border-bottom 2px black, flex justify-between align-center wrap:
  - Left: stack pills inline
  - Right: external links (LIVE ↗ CODE ↗ NPM ↗) — target blank, rel noopener noreferrer
- **Article body** max-width 720px centered padding `3rem 2rem`, renders `<Content />` from the MDX:
  - h2: Inter 900 28px uppercase border-bottom 2px black margin-top 2rem padding-bottom 0.5rem
  - h3: Inter 900 20px uppercase margin-top 1.5rem
  - p: Inter 400 16px line-height 1.7
  - ul: list-style none, padding-left 0, each li with "— " prefix via `::before` content
  - inline code: mono background accent yellow padding 1px 4px font-size 14px
  - pre: 2px black border padding 1rem mono 13px overflow-x auto background cream
  - blockquote: 4px left border accent yellow padding-left 1rem font-style italic margin-left 0
- **Bottom nav** padding 2rem border-top 2px black:
  - `<a href="/projects">← BACK TO PROJECTS</a>` mono uppercase 14px

### Part 5.4 — Update existing hub page

Modify `src/pages/index.astro`:

1. **Find the existing nav section** (the single tile with "RESUME →" or similar from v1)

2. **Replace it with a two-tile nav** matching the v1 styling:
   - Tile 1: existing resume download (keep as-is)
   - Tile 2 (NEW): `<a href="/projects">` with text "PROJECTS →" — Inter 900 32px uppercase, 3px solid black border, padding `2rem 2.5rem`, hover background ink text cream
   - Layout: side-by-side desktop with gap 1rem, stacked vertically on mobile

3. **Update the "Coming soon" section** (Section 4 in the v1 spec):
   - Remove the line "Projects showcase" from the `<ul>`
   - Keep only "Blog" in the list
   - If the ul only has one item now, that's fine — keep the list structure

### Part 5.5 — Verification

Run `pnpm build`. Must complete with zero errors. Fix any errors.

Run `pnpm preview` and confirm:
- `/` returns 200, shows updated hub with two nav tiles and updated "Coming soon"
- `/projects` returns 200, shows 3 project cards in order
- `/projects/velora` returns 200, shows full Velora write-up
- `/projects/preyan-portfolio` returns 200, shows portfolio write-up
- `/projects/rand-name-gen` returns 200, shows rand-name-gen write-up
- `/nonexistent` returns 404 page
- All MDX content renders correctly (headings, lists, code blocks if any)

Stage all changes with `git add .`. **Do NOT commit** — Preyan will review and commit himself.

Report:
- Total files created vs modified
- Build size delta vs v1
- Any warnings or skipped items

# CLAUDE.md — v3 ADDITION

Replace the existing "Part 6 — v3 scope" placeholder with the content below.

---

## Part 6 — v3 build instructions (execute autonomously, in order)

### v3 scope
Add a blog section to the existing site. Infrastructure only — no actual blog posts yet (they'll be added later as `.mdx` files).

- New route `/blog` — index page listing all posts (sorted by date, newest first)
- Dynamic route `/blog/[slug]` — full post page with prose styling
- Astro Content Collection backed by MDX files in `src/content/blog/`
- One placeholder post explaining the blog is coming soon
- Update the hub page: replace "Coming soon: Blog" line by adding a new third nav tile for BLOG, OR by removing the "Coming soon" section entirely
- RSS feed at `/feed.xml` (optional but easy — adds it)

### Tech stack additions
MDX is already configured from v2. Add RSS support:
```
pnpm astro add sitemap --yes
pnpm add @astrojs/rss
```

### Part 6.1 — Content Collection

Modify `src/content/config.ts` — ADD a blog collection alongside the existing projects collection. Final file should look like this:

```ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()).readonly(),
    liveUrl: z.string().url().optional(),
    codeUrl: z.string().url(),
    npmUrl: z.string().url().optional(),
    status: z.enum(['live', 'archived', 'wip']),
    featured: z.boolean().default(false),
    order: z.number().int().positive(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTime: z.string().optional(),
  }),
});

export const collections = { projects, blog };
```

### Part 6.2 — Placeholder post

Create `src/content/blog/welcome.mdx`:

```markdown
---
title: "On opening this blog"
description: "Why I'm starting this, what I plan to write about, and a note to anyone who lands here."
pubDate: 2026-05-12
tags: ["meta"]
draft: false
readingTime: "1 min"
---

This is the start of a small writing practice — a place to put what I learn the hard way.

I've spent seven years building production software at Accenture and Capgemini. Most of the lessons I've collected aren't in books or blog posts. They're the kind that surface only when you're three hours into debugging something at midnight, or when a senior engineer says something offhand that changes how you think about the next decade of your career.

I want to write some of those down here.

## What you can expect
- Specific takes on things I actually use day-to-day (Angular, Node, the AI tools changing how we work)
- Honest reflections, not hot takes
- Short posts. I have a day job.

## What you won't find
- "Top 10 things every developer should know"
- AI-generated filler
- Advice on technologies I've never shipped to production

First real post coming soon.

— Preyan
```

### Part 6.3 — Pages

**`src/pages/blog/index.astro` — BLOG INDEX**

Use BaseLayout with:
- `title="Blog — Preyan Bhowmick"`
- `description="Writing on software engineering, the practice of shipping, and lessons from seven years in production."`
- `pageName="BLOG"`

Logic:
- `const posts = await getCollection('blog', ({ data }) => !data.draft);`
- Sort by `pubDate` descending (newest first)

Layout:
- Top header padding `1.5rem 2rem` border-bottom 2px black:
  - `<p>` showing post count: e.g. "ALL POSTS · 01 ENTRY" — mono uppercase 13px letter-spacing 0.15em
  - Use singular "ENTRY" when 1, plural "ENTRIES" otherwise
- `<section>` containing a vertical list of `<article>` cards
- Each card padding `2rem`, border-bottom 2px black (no border on last):
  - Top row flex justify-between mono 12px uppercase color muted:
    - Left: date formatted "DD MMM YYYY" via `Intl.DateTimeFormat`
    - Right: reading time if present
  - `<h2><a href={`/blog/${post.slug}`}>{title}</a></h2>` Inter 900 32px desktop / 24px mobile uppercase margin-top 1rem, no underline on the link, hover underline
  - `<p>{description}</p>` body 16px line-height 1.5 color muted margin-top 0.75rem max-width 640px
  - Tag row margin-top 1rem: each tag as `<span>` mono 11px uppercase, 2px solid black border, padding 4px 8px, margin-right 8px
  - `<a href={`/blog/${post.slug}`}>READ →</a>` mono 13px uppercase margin-top 1rem, display inline-block
- If no posts (empty array case), show a single centered message: "NO POSTS YET. CHECK BACK SOON." in mono uppercase

**`src/pages/blog/[slug].astro` — BLOG POST PAGE**

Use `getStaticPaths` to generate one page per non-draft post.

```ts
export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }));
}
```

BaseLayout props:
- `title={`${post.data.title} — Preyan Bhowmick`}`
- `description={post.data.description}`
- `pageName={`BLOG / ${post.data.title}`}`

Layout:
- **Header** max-width 720px centered padding `3rem 2rem 2rem`:
  - Metadata row mono 12px uppercase color muted: date · reading time · tags inline
  - `<h1>{title}</h1>` Inter 900 48px desktop / 32px mobile uppercase line-height 1.1 letter-spacing -0.02em margin-top 1.5rem
  - `<p>{description}</p>` body 18px line-height 1.5 color muted margin-top 1rem italic
  - Thin 2px black `<hr>` margin-top 2rem
- **Article body** max-width 720px centered padding `2rem`:
  - Render `<Content />` from MDX with prose styling:
    - h2: Inter 900 28px uppercase border-bottom 2px black margin-top 2.5rem padding-bottom 0.5rem
    - h3: Inter 900 20px uppercase margin-top 2rem
    - p: Inter 400 17px line-height 1.7 margin-top 1.25rem
    - ul, ol: padding-left 1.5rem, list-style none for ul (with "— " prefix via ::before), decimal for ol
    - li: margin-bottom 0.5rem line-height 1.7
    - inline code: mono background accent yellow padding 1px 6px font-size 15px
    - pre: 2px solid black border padding 1.25rem mono 14px overflow-x auto background cream margin 1.5rem 0
    - blockquote: 4px left border accent yellow padding 0.5rem 0 0.5rem 1.5rem font-style italic margin 1.5rem 0
    - a: underline, hover bg accent yellow
    - hr: 1px solid black margin 2rem 0
  - Closing signature: after the content, a separator and "— Preyan" line in mono italic
- **Bottom nav** max-width 720px centered padding `2rem` border-top 2px black:
  - `<a href="/blog">← BACK TO BLOG</a>` mono uppercase 14px

### Part 6.4 — RSS feed

Create `src/pages/feed.xml.js`:

```js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return rss({
    title: 'Preyan Bhowmick — Blog',
    description: 'Writing on software engineering, the practice of shipping, and lessons from seven years in production.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    customData: `<language>en</language>`,
  });
}
```

### Part 6.5 — Update existing hub page

Modify `src/pages/index.astro`:

1. **Find the nav section** (currently has 2 tiles: RESUME and PROJECTS from v2)

2. **Add a third tile** for BLOG with matching styling:
   - Tile 3: `<a href="/blog">` with text "BLOG →" — same Inter 900 32px uppercase, 3px solid black border, padding `2rem 2.5rem`, hover bg ink text cream
   - On desktop: three tiles side-by-side in a CSS grid `grid-template-columns: repeat(3, 1fr)` with gap 1rem
   - On mobile: stack vertically (single column)

3. **Remove the "Coming soon" section entirely** (Section 4 from v1):
   - The whole section with the "COMING SOON / VOL. II" label and the `<ul>` list
   - It's no longer needed — all sections are now live

### Part 6.6 — Update BaseLayout for RSS discovery

In `src/layouts/BaseLayout.astro`, add to the `<head>` section:

```html
<link rel="alternate" type="application/rss+xml" title="Preyan Bhowmick — Blog" href="/feed.xml" />
```

### Part 6.7 — Verification

Run `pnpm build`. Must complete with zero errors. Fix any errors.

Run `pnpm preview` and confirm:
- `/` returns 200, shows updated hub with three nav tiles (Resume, Projects, Blog), no "Coming soon" section
- `/blog` returns 200, shows the "On opening this blog" placeholder post with date, title, description, tags, READ link
- `/blog/welcome` returns 200, shows the full placeholder post with proper prose styling
- `/feed.xml` returns 200, valid XML RSS feed with 1 item
- Existing routes still work: `/projects`, `/projects/velora`, `/projects/preyan-portfolio`, `/projects/rand-name-gen`
- `/nonexistent-route` returns the 404 page

Stage all changes with `git add .`. **Do NOT commit** — Preyan will review and commit himself.

Report:
- Total files created vs modified
- Build size delta vs v2
- Number of posts detected by content collection
- Any warnings or skipped items