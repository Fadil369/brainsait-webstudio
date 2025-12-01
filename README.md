# 🚀 BrainSAIT Marketing Platform

Welcome to the **BrainSAIT Marketing Platform** - a stunning, production-ready landing page for booking healthcare AI strategy sessions.

## ✨ What's Been Created

### 1. **Booking Landing Page** (`/booking`)
- Modern, glassmorphic design with animated backgrounds
- 3-step booking flow (Payment → Slot Selection → Confirmation)
- Bilingual support (English/Arabic with RTL)
- Stripe payment integration
- Google Calendar slot selection
- Responsive and accessible

### 2. **Cloudflare Pages Integration**
- Optimized for edge deployment
- API functions for Stripe checkout, calendar, and bookings
- Environment variable configuration
- Build scripts ready

### 3. **Complete Ecosystem**
- Webstudio CMS integration
- React Router v7 framework
- TypeScript type safety
- Production-ready configuration

## 🎯 Key Features

✅ **Beautiful UI**: Gradient backgrounds, smooth animations, glassmorphism  
✅ **Secure Payments**: Stripe integration with mada support  
✅ **Smart Booking**: Calendar integration with availability checking  
✅ **Multilingual**: Full EN/AR support  
✅ **SEO Optimized**: Proper meta tags and Open Graph  
✅ **Fast**: Optimized for Cloudflare's global network  

## 📂 Project Structure

```
webstudio/
├── app/
│   ├── routes/
│   │   ├── _index.tsx              # Main Webstudio page
│   │   └── [booking]._index.tsx    # BrainSAIT booking page ⭐
│   └── __generated__/               # Webstudio generated
├── functions/api/                   # Cloudflare Functions
│   ├── [[path]].js                  # Base API handler
│   ├── create-checkout-session.js   # Stripe checkout
│   ├── check-availability.js        # Calendar availability
│   └── create-booking.js            # Booking creation
├── scripts/
│   └── cf-build.sh                  # Build script
├── wrangler.toml                    # Cloudflare config
├── .dev.vars.example                # Environment template
├── DEPLOYMENT.md                    # Deployment guide ⭐
└── README-BRAINSAIT.md              # Full documentation ⭐
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment
```bash
cp .dev.vars.example .dev.vars
# Edit .dev.vars with your API keys
```

### 3. Start Development
```bash
npm run dev
```

Visit:
- Main site: http://localhost:5173
- Booking page: http://localhost:5173/booking

## 📦 Deploy to Cloudflare Pages

### Quick Deploy via GitHub

```bash
# 1. Initialize Git
git init
git add .
git commit -m "BrainSAIT marketing platform"

# 2. Push to GitHub
gh repo create brainsait-webstudio --public --source=. --push

# 3. Connect to Cloudflare Pages
# Visit: https://dash.cloudflare.com/ → Pages → Create project
# - Connect your repository
# - Build command: npm run build
# - Build output: build/client
# - Add environment variables
```

### Direct Deploy with Wrangler

```bash
npm run build
wrangler login
wrangler pages deploy build/client --project-name=brainsait
```

See **[DEPLOYMENT.md](./DEPLOYMENT.md)** for detailed instructions.

## 🔑 Required API Keys

1. **Stripe**
   - Get from: https://dashboard.stripe.com/apikeys
   - Need: `STRIPE_PUBLIC_KEY` and `STRIPE_SECRET_KEY`

2. **Google Calendar**
   - Setup: https://console.cloud.google.com/
   - Enable Calendar API
   - Need: `GOOGLE_CALENDAR_API_KEY` and `GOOGLE_CALENDAR_ID`

3. **Email (Resend)**
   - Get from: https://resend.com/api-keys
   - Need: `RESEND_API_KEY`

## 📖 Documentation

- **[README-BRAINSAIT.md](./README-BRAINSAIT.md)** - Complete feature guide
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Step-by-step deployment
- **[.dev.vars.example](./.dev.vars.example)** - Environment variables

## 🎨 Customization

### Update Branding
Edit colors in the booking page CSS:
```css
:root {
  --medical-blue: #2b6cb8;
  --signal-teal: #0ea5e9;
  --success-green: #22c55e;
}
```

### Modify Content
Edit `app/routes/[booking]._index.tsx` for all text, features, pricing.

### Add Features
- Extend API functions in `functions/api/`
- Add new routes in `app/routes/`

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Preview production build
npm run typecheck    # Run TypeScript checks
npm run deploy       # Deploy to Cloudflare Pages
npm run preview      # Build and preview locally
```

## 🌐 URLs

- **Landing Page**: `/booking`
- **API Base**: `/api/*`
- **Stripe Checkout**: `/api/create-checkout-session`
- **Calendar**: `/api/check-availability`
- **Create Booking**: `/api/create-booking`

## 📊 Tech Stack

- **Framework**: React Router v7
- **UI**: React 18 with Vanilla CSS
- **Payments**: Stripe.js v3
- **Deployment**: Cloudflare Pages
- **CMS**: Webstudio
- **Language**: TypeScript
- **Runtime**: Cloudflare Workers

## ✅ Pre-Deployment Checklist

- [ ] API keys configured in Cloudflare
- [ ] Stripe live keys for production
- [ ] Custom domain configured
- [ ] Test payment flow
- [ ] Test booking confirmation
- [ ] Email delivery working
- [ ] Analytics added
- [ ] SSL certificate active

## 🐛 Troubleshooting

**Build fails:**
```bash
rm -rf node_modules build
npm install
npm run build
```

**Missing dependencies:**
```bash
npm install
```

**API functions not working:**
- Check environment variables in Cloudflare dashboard
- Verify `functions/api/` directory structure

## 💡 Next Steps

1. ✅ **Setup complete** - Project is ready
2. 🔑 **Add API keys** - Get Stripe, Google Calendar keys
3. 🚀 **Deploy** - Push to Cloudflare Pages
4. 🎨 **Customize** - Update branding and content
5. 📧 **Test** - Complete full booking flow
6. 📈 **Monitor** - Add analytics and monitoring

## 🎓 Learning Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [React Router Guide](https://reactrouter.com/)
- [Stripe Documentation](https://stripe.com/docs)
- [Webstudio Docs](https://webstudio.is/docs)

## 🙋 Support

Need help? Check:
1. **DEPLOYMENT.md** - Deployment questions
2. **README-BRAINSAIT.md** - Feature documentation
3. Cloudflare Community
4. GitHub Discussions

## 📝 License

Copyright © 2025 BrainSAIT. All rights reserved.

---

## 🎉 What's Next?

Your BrainSAIT marketing platform is ready! Here's what you can do:

1. **Test Locally**: Run `npm run dev` and visit `/booking`
2. **Customize**: Update colors, content, and features
3. **Add API Keys**: Configure Stripe and Google Calendar
4. **Deploy**: Push to Cloudflare Pages
5. **Go Live**: Set up custom domain and start booking!

Built with ❤️ for Healthcare AI Innovation
