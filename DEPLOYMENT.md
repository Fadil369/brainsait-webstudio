# BrainSAIT Webstudio - Deployment Guide

## 🚀 Quick Deploy to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. **Initialize Git Repository**
```bash
git init
git add .
git commit -m "Initial commit: BrainSAIT marketing platform"
```

2. **Create GitHub Repository**
```bash
gh repo create brainsait-webstudio --public --source=. --remote=origin --push
```

Or manually:
- Go to https://github.com/new
- Create repository `brainsait-webstudio`
- Push code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/brainsait-webstudio.git
git branch -M main
git push -u origin main
```

3. **Connect to Cloudflare Pages**
- Visit https://dash.cloudflare.com/
- Go to **Pages** → **Create a project**
- Select **Connect to Git**
- Choose your repository
- Configure build settings:
  - **Framework preset**: React
  - **Build command**: `npm run build`
  - **Build output directory**: `build/client`
  - **Root directory**: `/` (leave empty)
  - **Node version**: `20`

4. **Set Environment Variables**
In Cloudflare Pages → Settings → Environment Variables:

**Production:**
```
STRIPE_PUBLIC_KEY=pk_live_YOUR_KEY
STRIPE_SECRET_KEY=sk_live_YOUR_KEY
GOOGLE_CALENDAR_API_KEY=YOUR_KEY
GOOGLE_CALENDAR_ID=YOUR_CALENDAR@group.calendar.google.com
RESEND_API_KEY=re_YOUR_KEY
NOTIFICATION_EMAIL=support@brainsait.io
NODE_ENV=production
```

**Preview:**
```
STRIPE_PUBLIC_KEY=pk_test_YOUR_KEY
STRIPE_SECRET_KEY=sk_test_YOUR_KEY
NODE_ENV=development
```

### Option 2: Direct Wrangler Deploy

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy directly
npm run build
wrangler pages deploy build/client --project-name=brainsait

# Or use the deploy script
npm run deploy
```

## 🌐 Custom Domain Setup

1. **Add Custom Domain**
   - Cloudflare Pages → Custom domains
   - Add: `brainsait.io` or `book.elfadil.com`
   - DNS records are automatically configured

2. **SSL Certificate**
   - Automatically provisioned by Cloudflare
   - Usually ready in 5-10 minutes

## 🔑 API Keys Required

### Stripe
1. Visit: https://dashboard.stripe.com/apikeys
2. Copy:
   - Test: `pk_test_...` and `sk_test_...`
   - Live: `pk_live_...` and `sk_live_...`

### Google Calendar
1. Go to: https://console.cloud.google.com/
2. Enable Google Calendar API
3. Create OAuth credentials or API key
4. Get Calendar ID from Calendar settings

### Resend (Email)
1. Visit: https://resend.com/api-keys
2. Create API key
3. Verify domain for sending emails

## 📝 Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Stripe keys updated (live for production)
- [ ] Custom domain configured
- [ ] DNS records verified
- [ ] Test payment flow
- [ ] Test booking confirmation
- [ ] Email sending verified
- [ ] Analytics tracking added
- [ ] Error monitoring setup (Sentry optional)

## 🎯 Post-Deployment

1. **Test the booking flow:**
   - Visit `/booking`
   - Complete test payment (use Stripe test card: 4242 4242 4242 4242)
   - Verify calendar slot selection
   - Check confirmation email

2. **Monitor:**
   - Cloudflare Analytics
   - Stripe Dashboard for payments
   - Email delivery logs

3. **Optimize:**
   - Add caching rules in Cloudflare
   - Configure page rules
   - Enable Cloudflare Images (optional)

## 🔧 Troubleshooting

**Build fails:**
```bash
# Clear and rebuild
rm -rf node_modules build
npm install
npm run build
```

**Environment variables not working:**
- Check spelling matches exactly
- Restart deployment after adding variables
- Check preview vs production environment

**API routes 404:**
- Verify `functions/api/` directory structure
- Check Cloudflare Pages Functions are enabled

## 📚 Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [React Router Deployment](https://reactrouter.com/en/main/guides/deploying)
- [Stripe Documentation](https://stripe.com/docs)
- [Google Calendar API](https://developers.google.com/calendar)

## 💡 Tips

- Use preview deployments for testing
- Keep test and production keys separate
- Monitor build logs in Cloudflare dashboard
- Set up deployment notifications in Slack/Discord

---

Built with ❤️ for BrainSAIT Healthcare AI Innovation
