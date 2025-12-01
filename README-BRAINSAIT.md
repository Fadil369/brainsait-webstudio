# BrainSAIT Marketing Landing Page

## 🚀 Overview

This is a stunning, production-ready marketing landing page for **BrainSAIT** - Healthcare AI Innovation platform. The landing page features:

- ✨ **Modern Design**: Glassmorphism, gradients, and smooth animations
- 🌐 **Bilingual Support**: English and Arabic (RTL support)
- 💳 **Stripe Integration**: Secure payment processing
- 📅 **Smart Booking**: Calendar integration for session scheduling
- 🎨 **Responsive**: Works beautifully on all devices
- ⚡ **Fast**: Optimized for Cloudflare Pages deployment

## 📋 Features

### Core Features
- **3-Step Booking Flow**: Payment → Slot Selection → Confirmation
- **Stripe Payment Integration**: Supports cards, Apple Pay, mada
- **Google Calendar Sync**: Automatic event creation
- **Email Notifications**: Confirmation and reminder emails
- **Multilingual**: Full EN/AR support with RTL
- **SEO Optimized**: Proper meta tags and schema markup

### Design Features
- Animated background effects
- Glassmorphic cards
- Smooth transitions and micro-interactions
- Mobile-first responsive design
- Accessibility compliant (ARIA labels)

## 🛠️ Technology Stack

- **Framework**: React Router v7 (React 18)
- **Styling**: Vanilla CSS with CSS Variables
- **Payment**: Stripe.js v3
- **Calendar**: Google Calendar API
- **Deployment**: Cloudflare Pages
- **Type Safety**: TypeScript

## 📦 Project Structure

```
webstudio/
├── app/
│   ├── routes/
│   │   ├── _index.tsx          # Main Webstudio page
│   │   └── [booking]._index.tsx # BrainSAIT booking page
│   ├── __generated__/           # Webstudio generated files
│   └── root.tsx                 # Root layout
├── public/
│   └── assets/                  # Static assets
├── wrangler.toml                # Cloudflare Workers config
├── .dev.vars.example            # Environment variables template
└── package.json
```

## 🚀 Getting Started

### Prerequisites

```bash
# Node.js 20+ required
node --version  # Should be >= 20.0.0

# Install dependencies
npm install
```

### Environment Setup

1. Copy environment variables:
```bash
cp .dev.vars.example .dev.vars
```

2. Fill in your API keys in `.dev.vars`:
   - Stripe keys (test/live)
   - Google Calendar API key
   - Email service API key

### Development

```bash
# Start development server
npm run dev

# The app will be available at:
# - Main site: http://localhost:5173
# - Booking page: http://localhost:5173/booking
```

### Building

```bash
# Build for production
npm run build

# Preview production build
npm run start
```

## 🌐 Deployment to Cloudflare Pages

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**:
```bash
git init
git add .
git commit -m "Initial commit: BrainSAIT landing page"
git remote add origin https://github.com/yourusername/brainsait-webstudio.git
git push -u origin main
```

2. **Connect to Cloudflare**:
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project" → "Connect to Git"
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `build/client`
     - **Root directory**: `/`
     - **Node version**: `20`

3. **Add Environment Variables**:
   - In Cloudflare Pages → Settings → Environment Variables
   - Add production variables:
     ```
     STRIPE_PUBLIC_KEY=pk_live_...
     STRIPE_SECRET_KEY=sk_live_...
     GOOGLE_CALENDAR_API_KEY=...
     RESEND_API_KEY=...
     NODE_ENV=production
     ```

### Method 2: Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages deploy build/client --project-name=brainsait
```

### Custom Domain Setup

1. Go to Cloudflare Pages → Custom domains
2. Add your domain: `brainsait.io` or `booking.elfadil.com`
3. Update DNS records as prompted
4. SSL certificate is automatically provisioned

## 🔧 Configuration

### Stripe Setup

1. Get your API keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
2. Update `wrangler.toml`:
```toml
[env.production.vars]
STRIPE_PUBLIC_KEY = "pk_live_YOUR_KEY"
```

3. Create a Stripe Checkout Session endpoint (recommended to add):
```typescript
// app/routes/api.create-checkout-session.ts
export async function action({ request }: ActionFunctionArgs) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'sar',
        product_data: {
          name: 'Healthcare AI Strategy Session',
        },
        unit_amount: 239000, // 2,390 SAR
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: `${process.env.SITE_URL}/booking?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.SITE_URL}/booking`,
  });
  return redirect(session.url);
}
```

### Google Calendar Integration

1. Enable Google Calendar API in Google Cloud Console
2. Create OAuth 2.0 credentials
3. Add to environment variables
4. Use Google Calendar API to create events

### Email Notifications

Use [Resend](https://resend.com) for transactional emails:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: 'BrainSAIT <noreply@brainsait.io>',
  to: userEmail,
  subject: 'Booking Confirmation',
  html: confirmationEmailTemplate,
});
```

## 🎨 Customization

### Branding

Update colors in the CSS variables:
```css
:root {
  --medical-blue: #2b6cb8;    /* Primary brand color */
  --signal-teal: #0ea5e9;     /* Accent color */
  --success-green: #22c55e;   /* Success states */
}
```

### Content

Edit content in the booking page component:
```typescript
// app/routes/[booking]._index.tsx
```

### Features List

Add/modify features in the features array:
```html
<div class="feature-item">
  <svg class="check-icon">...</svg>
  <span>Your custom feature</span>
</div>
```

## 📊 Performance Optimization

- **Code Splitting**: Automatic with React Router
- **Image Optimization**: Use Cloudflare Images
- **Caching**: Configured in headers
- **CDN**: Cloudflare global network
- **Bundle Size**: Minimal dependencies

## 🔒 Security

- CSRF protection on forms
- Stripe PCI compliance
- Environment variables for secrets
- Rate limiting (Cloudflare)
- Bot protection with form timing

## 🧪 Testing

```bash
# Run type check
npm run typecheck

# Test build
npm run build

# Preview production build locally
npm run start
```

## 📈 Analytics Integration

Add analytics providers:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Plausible (privacy-friendly) -->
<script defer data-domain="brainsait.io" src="https://plausible.io/js/script.js"></script>

<!-- Meta Pixel -->
<script>
  !function(f,b,e,v,n,t,s){...}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🐛 Troubleshooting

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Stripe Webhook Issues
- Ensure webhook endpoint is publicly accessible
- Verify webhook signing secret
- Check Cloudflare's firewall rules

### Calendar Sync Not Working
- Verify Google Calendar API is enabled
- Check OAuth scopes
- Ensure service account has calendar access

## 📞 Support

- **Email**: support@brainsait.io
- **Website**: https://brainsait.io
- **Documentation**: https://docs.brainsait.io

## 📝 License

Copyright © 2025 BrainSAIT. All rights reserved.

---

## 🚀 Quick Deployment Checklist

- [ ] Update `.dev.vars` with production values
- [ ] Replace Stripe test keys with live keys
- [ ] Configure Google Calendar API
- [ ] Set up email service (Resend)
- [ ] Add custom domain in Cloudflare
- [ ] Configure DNS records
- [ ] Enable SSL (auto with Cloudflare)
- [ ] Add analytics tracking
- [ ] Test payment flow end-to-end
- [ ] Test booking confirmation emails
- [ ] Enable monitoring/logging
- [ ] Set up error tracking (Sentry)

## 🎯 Next Steps

1. **API Integration**: Create backend endpoints for Stripe webhooks
2. **Database**: Add D1 or external database for booking records
3. **Admin Panel**: Build dashboard to manage bookings
4. **CRM Integration**: Connect to HubSpot/Salesforce
5. **Advanced Features**:
   - Recurring sessions
   - Group bookings
   - Discount codes
   - Referral system
   - Video testimonials

## 🌟 Best Practices

- Keep dependencies minimal
- Use TypeScript for type safety
- Implement proper error handling
- Add comprehensive logging
- Monitor performance metrics
- Regular security audits
- Keep documentation updated

---

Built with ❤️ by Dr. El Fadil for BrainSAIT Healthcare AI Innovation
