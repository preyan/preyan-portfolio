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
| **v1** | Single-page site: hub showing experience + expertise + resume download button | **Building now** |
| **v2** | Add `/projects` — showcase of personal/work projects | Future |
| **v3** | Add `/blog` — markdown posts authored in GitHub | Future |

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
6. Env var: `NODE_VERSION=20`
7. Save and Deploy

Live in ~90 seconds at `preyan-portfolio.pages.dev`.

---

## Part 5 — v2 scope (FUTURE — do not build now)

When ready for v2, the spec will be expanded to include:
- `/projects` route with project showcase cards
- Astro Content Collection for projects with zod schema
- MDX-based project detail pages at `/projects/[slug]`
- Featured projects: Velora (https://github.com/preyan/velora), this portfolio, rand-name-gen

## Part 6 — v3 scope (FUTURE — do not build now)

When ready for v3, the spec will be expanded to include:
- `/blog` route reading markdown posts from a GitHub-managed folder
- Astro Content Collection for posts
- Individual post pages at `/blog/[slug]`
- RSS feed at `/feed.xml`