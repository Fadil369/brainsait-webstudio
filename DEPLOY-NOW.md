# 🚀 Deploy BrainSAIT to Cloudflare Pages - RIGHT NOW

## Quick Deploy (5 Minutes)

### Step 1: Create GitHub Repository

Visit: https://github.com/new

Fill in:
- Repository name: `brainsait-webstudio`
- Description: `BrainSAIT Healthcare AI Marketing Platform`
- Visibility: Public (or Private)
- Click: **Create repository**

### Step 2: Push Your Code

GitHub will show you commands. Run these:

```bash
cd /Users/fadil369/webstudio

# Add your GitHub repository URL here
git remote add origin https://github.com/YOUR_USERNAME/brainsait-webstudio.git

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to Cloudflare Pages

1. **Visit Cloudflare Dashboard**
   - Go to: https://dash.cloudflare.com/
   - Sign in (or create free account)

2. **Create Pages Project**
   - Click: **Pages** (left sidebar)
   - Click: **Create a project**
   - Click: **Connect to Git**

3. **Select Repository**
   - Authorize GitHub access
   - Select: `brainsait-webstudio`
   - Click: **Begin setup**

4. **Configure Build Settings**
   ```
   Project name: brainsait
   Production branch: main
   Framework preset: React
   Build command: npm run build
   Build output directory: build/client
   Deploy command: (leave empty - Cloudflare Pages handles this automatically)
   ```
   
   > ⚠️ **IMPORTANT**: Do NOT enter a deploy command. Leave it empty. Cloudflare Pages automatically serves the build output directory. Do not enter `nom`, `npm`, or `npx` commands here.
   
5. **Click: Save and Deploy**

### Step 4: Add Environment Variables

While deployment is running:

1. Go to: **Settings** → **Environment Variables**
2. Click: **Add variable** (for Production)

**Required Variables:**
```
STRIPE_PUBLIC_KEY    = pk_test_51QNEwlF4XY8Zkb2J9CORlTdLn5N4QAMaUe39pC6z0UGMqN0PCh0gxzS5dWJEuAWxcQfMJJCiF3wZXwk7SBt7k9zx00VEQ8tZQi
NODE_ENV             = production
```

**Optional (add later):**
```
STRIPE_SECRET_KEY    = sk_test_YOUR_KEY
RESEND_API_KEY       = re_YOUR_KEY
```

3. Click: **Save**
4. Redeploy: **Deployments** → **Retry deployment**

### Step 5: Your Site is Live! 🎉

After 2-3 minutes:
- Your site will be at: `https://brainsait.pages.dev`
- Booking page: `https://brainsait.pages.dev/booking`

## Get Your Stripe Keys

1. Visit: https://dashboard.stripe.com/apikeys
2. Copy your test keys
3. Replace in Cloudflare environment variables

## Add Custom Domain (Optional)

1. In Cloudflare Pages → **Custom domains**
2. Click: **Set up a custom domain**
3. Enter: `brainsait.io` or `book.elfadil.com`
4. Follow DNS instructions
5. Wait 5 minutes for SSL certificate

## Test Your Deployment

1. Visit: `https://your-project.pages.dev/booking`
2. Fill in the booking form
3. Use test card: `4242 4242 4242 4242`
4. Test the full flow

## Troubleshooting

**Build fails?**
- Check build logs in Cloudflare
- Verify environment variables
- Ensure build command is correct

**Deploy fails with `nom: not found`?**
- This is a typo! `nom` should be `npm` or `npx`
- **Fix**: In Cloudflare Pages settings, **leave the deploy command empty**
- Cloudflare Pages automatically deploys the build output directory

**Page not loading?**
- Check build output directory: `build/client`
- Verify deployment succeeded
- Check browser console for errors

**Payment not working?**
- Verify Stripe keys are set
- Check STRIPE_PUBLIC_KEY is correct
- Use test card: 4242 4242 4242 4242

## You're Done! 🎊

Your BrainSAIT marketing platform is now live and accepting bookings globally!

Next steps:
- [ ] Get live Stripe keys for production
- [ ] Set up email notifications
- [ ] Add Google Calendar integration
- [ ] Configure custom domain
- [ ] Start promoting your service!

---

**Need Help?**
- Full deployment guide: [DEPLOYMENT.md](./DEPLOYMENT.md)
- Quick start: [QUICKSTART.md](./QUICKSTART.md)
- Features: [README-BRAINSAIT.md](./README-BRAINSAIT.md)
