# Palina Mushtukova — Portfolio

Personal portfolio site. Product Manager with a background in EdTech, AI, and learning experience design.

**Live:** https://<your-username>.github.io/<your-repo>/

## Tech

Plain HTML + React 18 (loaded from CDN) + Babel Standalone — no build step required. Just open `index.html` or serve the folder statically.

## Local preview

```bash
# from the project root
python3 -m http.server 8000
# then open http://localhost:8000
```

Or any other static server (e.g. `npx serve .`).

## Structure

```
index.html              # entry point (for GitHub Pages)
Portfolio.html          # same as index.html (kept for compatibility)
styles.css              # all styles, including responsive rules
src/
  App.jsx               # root component, nav, burger menu
  Tweaks.jsx            # palette / font switcher (dev tool)
  assets.jsx            # shared SVG assets
  sections/
    Hero.jsx
    About.jsx
    Stats.jsx
    Experience.jsx
    Operate.jsx
    AI.jsx
    Skills.jsx
    Cases.jsx
    Testimonial.jsx
    Contact.jsx
assets/                 # portrait image
uploads/                # extra images
```

## Responsive behaviour

The site is adaptive across common breakpoints:

- **≤ 960px** — compact top nav
- **≤ 760px** — burger menu, hero scroll indicator moves inline
- **≤ 600px** — tightened paddings, single-column grids for most sections, smaller typography
- **≤ 420px** — CTA in header hides (available via burger menu)
- **≤ 380px** — stats / skills / experience outcomes collapse to one column
