# Ergo-econom website

A simple static website built with HTML, CSS, and a little JavaScript. No build tools required.

## What's here

- `index.html` — Home page
- `cart.html` — Cart page
- `style.css` — Global styles
- `cart.css` — Cart-specific styles
- `script.js` — Minimal interactive behavior

## Preview locally

Option 1 (VS Code):

- Install the "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

Option 2 (Python):

```powershell
cd "c:\Users\there\Ergo-econom website"
python -m http.server 8080
# Open http://localhost:8080 in your browser
```

## Publish with GitHub Pages

1. Create a new GitHub repository (public is fine for Pages)
2. Initialize git locally and push

```powershell
cd "c:\Users\there\Ergo-econom website"
 git init
 git add .
 git commit -m "Initial website"
# Create repo on GitHub, then set it as origin and push (replace URL)
 git remote add origin https://github.com/<your-username>/<your-repo>.git
 git branch -M main
 git push -u origin main
```

3. On GitHub → Settings → Pages

- Source: "Deploy from a branch"
- Branch: `main` and folder `/ (root)` → Save

Your site will be available at `https://<your-username>.github.io/<your-repo>/` after a minute or two.

### Optional: Custom domain

- In your repo: Settings → Pages → Add your domain
- Create a DNS CNAME record pointing your domain to `<your-username>.github.io`
- Add a `CNAME` file in the repo root containing your domain

## Alternatives to Pages

- Netlify: drag-and-drop your folder, auto-HTTPS, previews
- Cloudflare Pages: connect GitHub, choose repo, deploy from `main`
- Vercel: import project, choose static site, deploy from `main`

## Quality checklist (recommended before publishing)

- Validate HTML/CSS (https://validator.w3.org/ and https://jigsaw.w3.org/css-validator/)
- Basic accessibility: color contrast, alt text, keyboard nav
- Test on mobile viewport (Chrome devtools → Toggle device toolbar)
- No 404s: verify all links/images load
- Performance: keep images optimized; avoid unused JS/CSS
