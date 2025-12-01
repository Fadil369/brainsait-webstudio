# 🎯 Quick Start Guide - BrainSAIT Marketing Platform

## ⚡ 5-Minute Setup

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Copy Environment Variables
```bash
cp .dev.vars.example .dev.vars
```

### Step 3: Start Development Server
```bash
npm run dev
```

### Step 4: Visit the Booking Page
Open: http://localhost:5173/booking

## 🚀 Deploy to Cloudflare Pages (10 minutes)

### Method 1: GitHub + Cloudflare Dashboard (Easiest)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "BrainSAIT marketing platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/brainsait-webstudio.git
git push -u origin main
```

2. **Connect to Cloudflare:**
   - Visit: https://dash.cloudflare.com/
   - Pages → **Create a project** → **Connect to Git**
   - Select your repository
   - **Build command**: `npm run build`
   - **Build output**: `build/client`
   - **Framework**: React
   - Click **Save and Deploy**

3. **Add Environment Variables:**
   - Settings → Environment Variables → Production
   - Add (get keys from respective services):
     ```
     STRIPE_PUBLIC_KEY=pk_live_...
     STRIPE_SECRET_KEY=sk_live_...
     NODE_ENV=production
     ```

### Method 2: Direct Deploy with Wrangler

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Build and deploy
npm run deploy
```

## 🔑 Get Your API Keys

### Stripe (Required for Payments)
1. Visit: https://dashboard.stripe.com/apikeys
2. Copy Test keys for development:
   - **Publishable key**: `pk_test_...`
   - **Secret key**: `sk_test_...`
3. Add to `.dev.vars` for local, Cloudflare dashboard for production

### Google Calendar (Optional - for real availability)
1. Visit: https://console.cloud.google.com/
2. Enable **Google Calendar API**
3. Create **API Key**
4. Add to environment variables

### Resend (Optional - for emails)
1. Visit: https://resend.com/api-keys
2. Create API key
3. Add as `RESEND_API_KEY`

## ✅ Verify Your Setup

### Local Development
```bash
# Start dev server
npm run dev

# In browser, test:
# 1. Visit http://localhost:5173/booking
# 2. Fill in the form
# 3. Test payment flow (use test card: 4242 4242 4242 4242)
# 4. Select a date and time slot
# 5. Confirm booking
```

### Production
```bash
# Build for production
npm run build

# Preview locally
npm run start

# Visit http://localhost:3000/booking
```

## 📁 Project Overview

```
webstudio/
├── app/routes/[booking]._index.tsx    # Main booking page
├── functions/api/                      # Cloudflare Functions (APIs)
├── wrangler.toml                       # Cloudflare config
├── .dev.vars.example                   # Environment template
└── README.md                           # You are here!
```

## 🎨 Customize Your Landing Page

### 1. Update Branding Colors
Edit `app/routes/[booking]._index.tsx`, find:
```css
:root {
  --medical-blue: #2b6cb8;    /* Change to your brand color */
  --signal-teal: #0ea5e9;     /* Change accent color */
}
```

### 2. Update Content
Edit text in the HTML section of `[booking]._index.tsx`:
- Pricing: Search for `2,390 SAR`
- Features: Update the feature list items
- Session details: Modify description and benefits

### 3. Update Logo
Replace the emoji in:
```html
<div class="logo-icon">✨</div>  <!-- Change this -->
<span class="logo-text">BrainSAIT</span>
```

## 🔧 Common Commands

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Preview production build
npm run deploy           # Deploy to Cloudflare Pages
npm run typecheck        # Check TypeScript types
```

## 🐛 Troubleshooting

**Problem: Build fails**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Problem: Environment variables not working**
- For local: Check `.dev.vars` file exists
- For production: Verify in Cloudflare dashboard → Settings → Environment Variables

**Problem: Payment not working**
- Verify Stripe keys are correct
- Check browser console for errors
- Test with card: `4242 4242 4242 4242`

## 🎯 Next Steps After Setup

1. ✅ **Test locally** - Complete a test booking
2. 🔑 **Get API keys** - Stripe, Calendar, Email
3. 🚀 **Deploy** - Push to Cloudflare Pages
4. 🌐 **Custom domain** - Add your domain in Cloudflare
5. 📧 **Test emails** - Verify confirmation emails work
6. 📊 **Add analytics** - Google Analytics or Plausible

## 📚 Documentation

- **Full Features**: See [README-BRAINSAIT.md](./README-BRAINSAIT.md)
- **Deployment Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Cloudflare Docs**: https://developers.cloudflare.com/pages/

## 💬 Need Help?

1. Check documentation files in this project
2. Visit Cloudflare Pages docs
3. Check Stripe documentation
4. Review React Router docs

## 🎉 You're Ready!

Your BrainSAIT marketing platform is set up and ready to go! 

**What you have:**
- ✅ Beautiful booking landing page
- ✅ Stripe payment integration
- ✅ Calendar slot selection
- ✅ Bilingual support (EN/AR)
- ✅ Cloudflare Pages ready
- ✅ Production-ready infrastructure

Just customize the content, add your API keys, and deploy!

---

Built with ❤️ for Healthcare AI Innovation
