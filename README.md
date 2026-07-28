# Aisyah Mahla Nurussalamah — Portfolio

A responsive, multi-page portfolio site for an Event Coordination & Public Relations
professional. Built with React + Vite, React Router, and plain CSS.

**Live site:** https://at1ng.github.io/portofolioaisyahmahla/

Deployed automatically to GitHub Pages via GitHub Actions on every push to `main`
(see `.github/workflows/deploy.yml`).

## Tech stack

- **React 19 + Vite** — fast dev server and build tooling
- **React Router** — client-side routing across pages
- **react-helmet-async** — per-page `<title>` / meta tags for SEO
- Plain CSS with CSS custom properties (no build-step CSS framework required)

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the local dev server (http://localhost:5173)
npm run dev

# 3. Build for production (outputs to /dist)
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project structure

```
src/
  data/content.js      # All editable site copy — name, bio, skills, education,
                        # experience entries, and gallery items live here.
  components/           # Navbar, Footer, Layout, Reveal (scroll animation),
                        # Seo (per-page meta tags), Lightbox, icons
  pages/                 # One file per route: Home, About, Experience,
                        # Portfolio, Contact, NotFound
  index.css              # Design tokens (colors, type), layout & component styles
```

## Editing content

Almost everything text-based (name, tagline, bio, skills, education, experience,
gallery captions, contact info) lives in **`src/data/content.js`**. Edit that file
and the site updates everywhere it's referenced.

To swap in real event photos, replace the `image` URLs in the `gallery` array in
`src/data/content.js` with your own image paths (e.g. files placed in `public/` or
`src/assets/`). Placeholder images are currently served from
[placehold.co](https://placehold.co).

## Pages

- **Home** — hero introduction with CTAs to the portfolio and contact page
- **About** — bio, hard/soft skills, education
- **Experience** — timeline of roles and events
- **Portfolio** — responsive image gallery with a lightbox/modal viewer
- **Contact** — phone, email, WhatsApp link, and location (no form)

## Notes

- Navigation collapses into a hamburger menu below ~860px width.
- The gallery grid reflows from 1 column (mobile) → 2 columns (tablet) → 3 columns
  (desktop).
- Scroll-reveal animations respect `prefers-reduced-motion`.
