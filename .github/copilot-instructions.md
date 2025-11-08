# Copilot instructions for Ergo-econom website

This project is a simple static site (HTML/CSS/JS). Keep changes lightweight and framework-free unless explicitly requested.

## Goals

- Clean, accessible, and fast-loading pages
- Plain vanilla HTML/CSS/JS (no build step)
- Works on mobile and desktop

## Guidelines for AI suggestions

- Prefer semantic HTML, ARIA only when needed
- Keep CSS modular and readable; avoid heavy resets
- JS should be minimal, progressive-enhancement friendly
- No third-party trackers by default
- Ensure contrast, keyboard reachability, and alt text

## Project structure

- `index.html`: Home page
- `cart.html`: Cart page
- `style.css`: Global styles
- `cart.css`: Cart-specific styles
- `script.js`: Minimal behavior

## PR quality checklist

- [ ] No console errors
- [ ] Lighthouse performance/accessibility >= 90 (locally)
- [ ] Valid HTML/CSS (W3C validator)
- [ ] Tested on mobile viewport (responsive)
- [ ] No broken links/images
