# Deployment Guide

Your complete guide to deploying your portfolio website to the internet.

## 🚀 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] `npm run build` completes without errors
- [ ] All content updated in `data/portfolio.ts`
- [ ] `Frontend_Developer_Le_Thi_Y_Nhi.docx.pdf` added to `public/`
- [ ] Social links verified and working
- [ ] Email link tested
- [ ] Dark mode tested (click moon icon)
- [ ] Mobile responsive tested
- [ ] All project links working

---

## 📤 Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**

- Creator of Next.js
- Free tier with generous limits
- Automatic deployments on git push
- Fast CDN globally
- HTTPS by default
- Monitoring and analytics

#### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial portfolio website"
git push origin main
```

#### Step 2: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

#### Step 3: Import Project

1. Click "New Project"
2. Select your `portfolio-website` repository
3. Click "Import"
4. Keep default settings (Next.js is auto-detected)
5. Click "Deploy"

**Wait 2-3 minutes** for deployment to complete.

Your site will be live at: `https://your-project-name.vercel.app`

#### Step 4: Custom Domain (Optional)

1. Buy a domain (e.g., `nhile.dev` from GoDaddy, Namecheap, Google Domains)
2. In Vercel: "Settings" → "Domains"
3. Add your domain
4. Update DNS settings at your domain registrar (Vercel will show you how)
5. Wait 5-10 minutes for propagation

Your site will be at: `https://yourdomain.com`

#### Automatic Deployments

Once set up, every time you `git push`:

1. Vercel detects the change
2. Builds your site
3. Deploys automatically
4. Your site updates within minutes

---

### Option 2: Netlify

Similar to Vercel with slightly different interface.

#### Steps:

1. Go to [netlify.com](https://netlify.com)
2. Click "Sign up"
3. Connect GitHub account
4. Select your repository
5. Keep build settings as default
6. Click "Deploy"

Your site will be at: `https://your-project-name.netlify.app`

#### Custom Domain:

Go to "Domain settings" and add your purchased domain.

---

### Option 3: AWS Amplify

For more control and integration with AWS services.

#### Steps:

1. Go to [aws.amazon.com/amplify](https://aws.amazon.com/amplify)
2. Click "Create app"
3. Connect GitHub repository
4. Configure build settings (defaults work)
5. Deploy

**Note**: Requires AWS account (free tier available)

---

### Option 4: Docker + Self-Hosted

For deploying to your own server.

#### Create Dockerfile:

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["npm", "start"]
```

#### Deploy:

```bash
docker build -t portfolio-website .
docker run -p 3000:3000 portfolio-website
```

---

## 🔧 Environment Variables

For deployments, you can set environment variables:

**Vercel**:

1. Go to "Settings" → "Environment Variables"
2. Add variables you need
3. They're automatically available during build

**Example** (if adding analytics later):

```
NEXT_PUBLIC_GA_ID=your_analytics_id
```

---

## 📊 Monitoring & Analytics

### Add Google Analytics (Optional)

1. Create [Google Analytics](https://analytics.google.com) account
2. Get your Tracking ID
3. Add to environment variables (see above)
4. Install analytics library:

```bash
npm install gtag
```

Use in a component:

```typescript
useEffect(() => {
  gtag.pageview({
    page_path: router.pathname,
    page_title: router.pathname,
  });
}, [router.pathname]);
```

### Vercel Analytics

Already included in Vercel deployments! View at:

- Vercel Dashboard → Your Project → Analytics

---

## 🔒 Security & Performance

### HTTPS

✅ Automatic with Vercel, Netlify, AWS

### Content Security Policy

Add to `next.config.ts` if needed:

```typescript
const securityHeaders = [
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
];

export default nextConfig {
  headers: async () => {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};
```

### Vercel Deployment Configuration

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "env": {
    "NODE_ENV": "production"
  }
}
```

---

## ⚡ Performance Optimization

Your portfolio is already optimized! But you can further improve:

### Image Optimization

Use Next.js Image component (already done):

```jsx
import Image from "next/image";
<Image src="/..." alt="..." width={300} height={200} priority />;
```

### Code Splitting

Vercel automatically optimizes this.

### Caching

Vercel handles ISR (Incremental Static Regeneration) automatically.

### CDN

Vercel's global CDN ensures fast delivery worldwide.

---

## 🔄 Updating Your Site

After deployment, updating is simple:

1. Edit `data/portfolio.ts` locally
2. Test with `npm run dev`
3. Commit and push:

```bash
git add data/portfolio.ts
git commit -m "Update projects"
git push
```

4. Vercel automatically redeploys (1-5 minutes)

No need to manually rebuild or deploy again!

---

## 🔗 Setting Up Custom Domain

### Via Vercel:

1. Buy a domain from any registrar:
   - GoDaddy
   - Namecheap
   - Google Domains
   - Route53 (AWS)

2. In Vercel dashboard:
   - "Settings" → "Domains"
   - Enter your domain name
   - Click "Add"

3. Vercel shows you the DNS records to add

4. Go to your registrar and update DNS:
   - Copy the nameserver from Vercel
   - Go to DNS settings in your registrar
   - Add the nameserver
   - Wait 5-10 minutes for propagation

5. Verify in Vercel (usually automatic)

### Popular Domain Registrars:

- [Namecheap](https://www.namecheap.com/) - Cheap, good support
- [Google Domains](https://domains.google/) - Simple, integrated
- [GoDaddy](https://www.godaddy.com/) - Large selection
- [Route53](https://aws.amazon.com/route53/) - AWS integrated

**Recommended**: Buy `.dev` domains from Google Domains for simplicity.

---

## 🆘 Troubleshooting Deployments

### Build fails on Vercel

Check Vercel logs:

1. Go to Deployment
2. Click on the failed deployment
3. Look at build logs

**Common causes**:

- TypeScript errors
- Missing dependencies
- Environment variables not set

**Fix**:

```bash
# Test locally first
npm run build

# Fix any errors
npm install  # If missing deps

# Push again
git push
```

### Site looks different after deployment

**Causes**:

- CSS not loading (rare with Vercel)
- JavaScript error
- Environment mismatch

**Debug**:

1. Check browser DevTools (F12)
2. Look for errors in console
3. Check Vercel logs for build warnings

### Domain not working

**Steps**:

1. DNS can take 10-30 minutes to propagate
2. Check DNS was updated at registrar
3. Use `nslookup yourdomain.com` to verify
4. Clear browser cache (Ctrl+Shift+Delete)

---

## 📈 Post-Launch Checklist

After going live:

- [ ] Test site on mobile and desktop
- [ ] Verify all links work
- [ ] Check dark mode
- [ ] Test form submissions (if added)
- [ ] Set up Google Analytics
- [ ] Add to search engines (Google Search Console)
- [ ] Share on LinkedIn, Twitter, GitHub
- [ ] Monitor Vercel analytics
- [ ] Set up error tracking (optional)

---

## 🎉 You're Live!

Your portfolio is now live on the internet! Share your URL:

- **LinkedIn**: Add to profile
- **GitHub**: Add to bio
- **Twitter/X**: Share your portfolio
- **Resume**: Add link to your resume PDF
- **Email**: Add to email signature
- **Networking**: Share with recruiters and friends

---

## 📚 Next Steps

1. **Promote your portfolio**
   - Share on social media
   - Add to LinkedIn
   - Update resume

2. **Keep it fresh**
   - Add new projects
   - Update experience
   - Write case studies

3. **Track visitors**
   - Enable analytics
   - Monitor traffic sources
   - See which projects catch eyes

4. **Iterate**
   - Get feedback from friends
   - Improve based on engagement
   - Keep content current

---

## 🤖 Vercel Command Line (Optional)

For power users, use Vercel CLI:

```bash
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# View logs
vercel logs

# Check status
vercel inspect
```

---

## 💡 Pro Tips

✅ **Auto-deploy**: Push to GitHub and Vercel deploys automatically
✅ **Preview builds**: Get a preview URL before merging
✅ **Rollback**: Revert to previous deployment with one click
✅ **Analytics**: Monitor real visitor behavior
✅ **Free HTTPS**: Automatic with all platforms
✅ **Global CDN**: Fast everywhere in the world

---

Congratulations! Your portfolio is officially live! 🎊

For questions or issues, check:

- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)
- This project's README.md

Good luck! 🚀
