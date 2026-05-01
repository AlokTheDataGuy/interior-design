# Atelier Nord — Interior Design Studio

Next.js 15 (App Router) + Tailwind CSS 3 + TypeScript.

## Quick start
```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

Deploy with one command on Vercel, Netlify, or any Node host.

## Project structure

```
app/
  layout.tsx          # Fonts (Fraunces + Manrope), metadata
  page.tsx            # Composes section components — easy to rearrange
  globals.css         # Tailwind + tokens + paper-grain overlay

components/
  layout/             # Nav, Footer, WhatsAppFab
  sections/           # Hero, Marquee, Intro, Work, Services, Team, Journal, Contact
  work/               # WorkRow + ProjectCard (ready for /work/[slug])
  ui/                 # Icons, Reveal (intersection-observer fade)

lib/
  config.ts           # Studio name, email, phone, WhatsApp — single source of truth
  data/
    projects.ts       # Project archive (categorized) — swap for CMS later
    services.ts
    team.ts
    posts.ts
```

## What to customise (5 minutes)

### 1 — Studio details
Edit **`lib/config.ts`**. Studio name, initials, email, phone, WhatsApp number, address, social links, nav items — all here.

```ts
export const studio = {
  name: "Atelier Nord",
  initials: "A/N",
  whatsapp: "919999999999",  // country code + number, no + or spaces
  email: "hello@ateliernord.studio",
  // …
};
```

The footer wordmark and meta tags pick up `studio.name` automatically.

### 2 — Projects, services, team, posts
Each lives in its own file under **`lib/data/`**. Just edit the arrays.

To add a new project category later: extend the `ProjectCategory` union in `projects.ts`, add an entry to `categories`, and add a `<WorkRow />` to `components/sections/Work.tsx`.

### 3 — Images
Currently uses Unsplash URLs. To swap:
- Replace the `image:` strings in `lib/data/*.ts`
- For your client's Unsplash+ assets: paste the high-res URLs directly, or download them into `public/images/` and reference as `/images/foo.jpg`

`next.config.mjs` already allows `images.unsplash.com` and `plus.unsplash.com` for `next/image`.

### 4 — Form backend
The contact form currently opens WhatsApp pre-filled with the inquiry. To wire it to a real backend instead, edit `components/sections/Contact.tsx` — replace the `window.open(waLink(...))` call with a `fetch('/api/contact', ...)` call, then create `app/api/contact/route.ts`.

For zero-backend options: Formspree, Resend + Edge route, or Vercel Forms.

## Performance & accessibility
- All images via `next/image` (auto-resize, lazy, AVIF/WebP)
- Variable Google fonts loaded via `next/font` (no CLS)
- `prefers-reduced-motion` respected globally
- Focus states preserved, semantic landmarks (`<header>`, `<main>`, `<footer>`)
- Mobile sheet locks body scroll, restores on close
- ~110 KB JS first-load (most is React + Next runtime)

## Adding individual project pages later
Each project already has a `slug` in `lib/data/projects.ts`. To wire up detail pages:

1. Create `app/work/[slug]/page.tsx`
2. `import { projects } from "@/lib/data/projects"` and find by slug
3. Update the `<a href="#">` in `ProjectCard.tsx` to `/work/${project.slug}`

Same pattern works for journal posts (`app/journal/[slug]/page.tsx`).
