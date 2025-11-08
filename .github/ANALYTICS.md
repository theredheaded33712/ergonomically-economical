# Analytics & Monitoring Setup

## Privacy-Friendly Analytics

### Option 1: Plausible Analytics (Recommended)
1. Sign up at https://plausible.io (has free trial, then $9/month)
2. Add your domain: `theredheaded33712.github.io`
3. Add this script to the `<head>` of both `index.html` and `cart.html`:
```html
<script defer data-domain="theredheaded33712.github.io" src="https://plausible.io/js/script.js"></script>
```

### Option 2: Google Analytics 4 (Free, but less privacy-focused)
1. Create account at https://analytics.google.com
2. Create a new property for your site
3. Add the tracking code to both HTML files

### Option 3: Self-hosted (Advanced)
- Umami: https://umami.is (open source, self-hosted)
- Matomo: https://matomo.org (open source, self-hosted)

## Uptime Monitoring

### Free Options:
1. **UptimeRobot** (https://uptimerobot.com)
   - Free tier: 50 monitors, 5-minute checks
   - Email/SMS alerts
   
2. **Freshping** (https://www.freshworks.com/website-monitoring/)
   - Free: 50 URLs, 1-minute checks
   
3. **StatusCake** (https://www.statuscake.com)
   - Free: Unlimited tests, 5-minute checks

## Current Status
- [ ] Analytics not yet configured (waiting for user preference)
- [ ] Uptime monitoring not configured
- ✅ Site is live and accessible

## Quick Setup
Once you choose an analytics provider, run:
```powershell
# Edit index.html and cart.html to add tracking script
# Then commit and push
git add index.html cart.html
git commit -m "Add analytics tracking"
git push
```
