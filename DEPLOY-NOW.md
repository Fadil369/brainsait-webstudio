# 🚀 BrainSAIT Deployment Guide - Direct Upload

## ✅ Simple Cloudflare Pages Deployment via Wrangler

This project uses **Cloudflare Pages Direct Upload** for clean, authenticated deployments.

### 📦 What is Direct Upload?

Instead of connecting GitHub to Cloudflare Pages, we build locally and upload directly using Wrangler CLI. This gives us:

✅ Full control over builds  
✅ No CI/CD configuration needed  
✅ Authenticated, secure deployments  
✅ Works perfectly with limited disk space  

---

## 🎯 Quick Deploy (Production)

```bash
# One command to build & deploy
npm run deploy
```

That's it! Your site will be live at:
`https://brainsait.pages.dev`

---

## 🔧 Deployment Commands

### Production Deployment
```bash
npm run deploy:production
```
Builds and deploys to production (main branch)

### Preview Deployment
```bash
npm run deploy:preview
```
Builds and deploys to preview environment

### Manual Deploy (if needed)
```bash
# Build first
npm run build

# Deploy
wrangler pages deploy build/client --project-name=brainsait
```

---

## 🌐 Your Live URLs

After deployment, your site will be available at:

**Production:**  
`https://brainsait.pages.dev`

**Custom Domain (add in dashboard):**  
`https://brainsait.io`  
`https://app.elfadil.com`

---

## 🔑 Authentication

Wrangler will authenticate automatically when you run deploy commands.

**First time setup:**
```bash
wrangler login
```

This opens your browser to authenticate with Cloudflare.

---

## 📚 Project Structure

```
brainsait-webstudio/
├── app/                    # React Router app
├── build/
│   ├── client/            # Static assets (deployed to Pages)
│   └── server/            # SSR bundle (not used for static Pages)
├── public/                # Public assets
├── wrangler.toml          # Cloudflare configuration
└── package.json           # Scripts
```

---

## 🎨 Features Included

### Current Features:
- ✅ React Router v7
- ✅ Server-side rendering (SSR)
- ✅ Static asset optimization
- ✅ Environment variables
- ✅ Stripe integration (booking page)
- ✅ Responsive design
- ✅ Arabic/English support

### Ready to Add:
- 📧 Contact form (Pages Functions)
- 📊 Analytics (Cloudflare Analytics)
- 🗄️ Database (D1)
- 💾 File storage (R2)
- 🔐 Authentication (Cloudflare Access)

---

## 🔒 Environment Variables

### Production Secrets
Set via Wrangler:
```bash
wrangler pages secret put STRIPE_SECRET_KEY
wrangler pages secret put GOOGLE_CALENDAR_API_KEY
```

### Preview/Development
Edit `wrangler.toml`:
```toml
[env.preview.vars]
STRIPE_PUBLIC_KEY = "pk_test_..."
```

---

## 🚀 Next Steps

### 1. Deploy Now
```bash
npm run deploy
```

### 2. Add Custom Domain
- Go to: Cloudflare Dashboard → Pages → brainsait → Custom domains
- Add: `brainsait.io` or `app.elfadil.com`

### 3. Set Production Secrets
```bash
wrangler pages secret put STRIPE_SECRET_KEY
```

### 4. Enable Analytics (Optional)
- Dashboard → Pages → brainsait → Analytics
- Enable Web Analytics

---

## 🐛 Troubleshooting

### "Project not found"
First deployment creates the project automatically. Just run:
```bash
npm run deploy
```

### "Build failed"
Check you have enough disk space (need ~2GB for build):
```bash
df -h
```

### "Authentication failed"
Re-authenticate:
```bash
wrangler logout
wrangler login
```

---

## 📖 Documentation

- **Direct Upload:** https://developers.cloudflare.com/pages/get-started/direct-upload/
- **Pages Docs:** https://developers.cloudflare.com/pages/
- **React Router:** https://reactrouter.com/
- **Wrangler CLI:** https://developers.cloudflare.com/workers/wrangler/

---

## 🎉 You're Ready!

Just run:
```bash
npm run deploy
```

And your BrainSAIT marketing platform will be live! 🚀

---

**Made with ❤️ for BrainSAIT Healthcare AI Platform**  
*Empowering Saudi Arabia's Healthcare Digital Transformation*
