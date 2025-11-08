# Custom Domain Setup

To use a custom domain (e.g., `ergonomically-economical.com`) instead of `theredheaded33712.github.io/ergonomically-economical/`:

## Step 1: Purchase a Domain
Popular registrars:
- Namecheap: https://www.namecheap.com
- Google Domains: https://domains.google
- Cloudflare Registrar: https://www.cloudflare.com/products/registrar/
- Porkbun: https://porkbun.com

## Step 2: Configure DNS
Add these DNS records at your domain registrar:

### For Apex Domain (ergonomically-economical.com):
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600
```
```
Type: A
Name: @
Value: 185.199.109.153
TTL: 3600
```
```
Type: A
Name: @
Value: 185.199.110.153
TTL: 3600
```
```
Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### For WWW Subdomain (www.ergonomically-economical.com):
```
Type: CNAME
Name: www
Value: theredheaded33712.github.io
TTL: 3600
```

## Step 3: Add CNAME File to Repository
Create a file named `CNAME` (no extension) in the root of your repo with your domain:
```
ergonomically-economical.com
```

## Step 4: Configure GitHub Pages
1. Go to: https://github.com/theredheaded33712/ergonomically-economical/settings/pages
2. Under "Custom domain", enter your domain
3. Click Save
4. Wait for DNS check to pass (can take 24-48 hours)
5. Enable "Enforce HTTPS" once DNS propagates

## Step 5: Push CNAME File
```powershell
# Create CNAME file with your domain
echo "ergonomically-economical.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

## Verify Setup
- Check DNS propagation: https://dnschecker.org
- Test HTTPS certificate: https://www.ssllabs.com/ssltest/

## Notes
- DNS changes can take up to 48 hours to propagate
- GitHub provides free SSL/TLS certificates via Let's Encrypt
- Both `example.com` and `www.example.com` will work once configured
