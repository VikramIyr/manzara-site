# Manzara — website

Static bilingual (DE/EN) landing page for [Manzara]. Plain HTML/CSS/JS, no build step. Matches the Figma brand (palette A: ivory / ink / terracotta, Cormorant Garamond + Inter).

```
index.html   – the page (sections: nav, hero, demo, pillars, how, pilot CTA, footer)
styles.css   – all styling + responsive
main.js      – DE/EN toggle (default DE, remembers choice in localStorage)
.nojekyll    – tells GitHub Pages to serve files as-is
```

## ⚠️ Privacy — deploy this in its OWN repo
This folder is meant for a **separate, public** repo (e.g. `manzara-site`). Do **NOT** enable GitHub Pages on the main startup repo — it contains the private strategy vault (pricing, broker targets, financials). Free Pages requires a public repo, which would expose all of that.

## Deploy to GitHub Pages
1. Create a new **public** repo, e.g. `manzara-site`.
2. Copy the **contents of this `site/` folder** to the repo root (so `index.html` is at the top).
3. Push to `main`.
4. Repo **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `root`**.
5. Live in ~1 min at `https://<user>.github.io/manzara-site/`.
6. Custom domain: once you own `manzara.ch`, add it under Settings → Pages → Custom domain (creates a `CNAME` file) and point a DNS record at GitHub Pages.

## Before going live — fill these in
- [ ] Replace the **demo placeholder** in `index.html` (`.demo-frame`) with the real embedded tour (`<iframe>`).
- [ ] Set real **contact email** (currently `hallo@manzara.ch`) in `index.html` + `main.js` (`footer_info`, mailto links).
- [ ] Have the **German copy vetted** by the collaborator (founder doesn't speak German).
- [ ] Add an OG image / favicon for nice link previews.
