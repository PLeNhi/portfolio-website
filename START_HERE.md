# 🎯 START HERE - Your Portfolio Website

Welcome! You now have a complete, production-ready portfolio website. This guide will get you started in 5 minutes.

---

## ⚡ Quick Start (5 minutes)

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Update Your Information

Open `data/portfolio.ts` and change:

- Your name
- Email, GitHub, LinkedIn
- Your introduction
- Skills, projects, experience

**Save and refresh!** Changes appear instantly.

### 4. Add Your Resume

1. Create or export your resume as PDF
2. Save as `resume.pdf` in the `public/` folder
3. Done! Download button works automatically

---

## 📚 Documentation Map

### For Getting Started:

- **[SETUP.md](SETUP.md)** ← Start here for installation & local development

### For Customization:

- **[CUSTOMIZATION.md](CUSTOMIZATION.md)** ← Complete guide to personalizing content & styling

### For Understanding the Code:

- **[STRUCTURE.md](STRUCTURE.md)** ← Project architecture & file organization
- **[README.md](README.md)** ← Features & tech stack overview

### For Going Live:

- **[DEPLOYMENT.md](DEPLOYMENT.md)** ← Deploy to Vercel (recommended) or other platforms

---

## 🎯 Your Next Steps

### Immediate (Today)

- [ ] Run `npm install`
- [ ] Run `npm run dev`
- [ ] Update name, email, socials in `data/portfolio.ts`
- [ ] Add 3-5 of your best projects
- [ ] Test dark mode (click moon icon)

### Short Term (This Week)

- [ ] Update all content (About, Skills, Experience)
- [ ] Add your resume PDF
- [ ] Update project descriptions with highlights
- [ ] Test on mobile (DevTools → Ctrl+Shift+M)
- [ ] Verify all links work

### Before Launch (Before Next Week)

- [ ] Run `npm run build` to test production build
- [ ] Deploy to Vercel (free, takes 2 minutes)
- [ ] Set up custom domain (optional)
- [ ] Share with friends for feedback
- [ ] Add to LinkedIn profile

---

## 📂 Files You'll Edit Most

**Primary file** (95% of customization):

```
data/portfolio.ts  ← Your content, projects, experience
```

**Secondary files**:

```
app/globals.css         ← Change colors/styling
app/layout.tsx          ← Update SEO metadata
components/navbar.tsx   ← Modify navigation
```

If you only edit `data/portfolio.ts`, you're good!

---

## 🎨 What's Included

Your portfolio has:

✅ **Modern Stack**: Next.js 15, React 18, TypeScript, Tailwind CSS
✅ **Responsive Design**: Looks perfect on all devices
✅ **Dark Mode**: Light/dark themes with one click
✅ **Smooth Animations**: Scroll animations with Framer Motion
✅ **SEO Ready**: Structured metadata, Open Graph tags
✅ **Performance**: Fast load times, optimized bundle
✅ **Accessibility**: Semantic HTML, keyboard navigation

## 📋 Site Structure

Your portfolio has these sections:

1. **Navbar** - Navigation with logo, links, theme toggle, resume button
2. **Hero** - Your name, title, introduction, social links
3. **About** - Professional summary with stats
4. **Skills** - Skills organized by category
5. **Projects** - Your best projects (featured + grid)
6. **Experience** - Work history with achievements
7. **Case Studies** - Your engineering approach
8. **Contact** - Ways to reach you
9. **Footer** - Links and copyright

All customizable via `data/portfolio.ts`!

---

## 🚀 Deployment (2 Minutes)

When ready to go live:

### Push to GitHub

```bash
git add .
git commit -m "Portfolio website"
git push
```

### Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Create account" (use GitHub)
3. Click "Import project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live.

**Your URL**: `https://portfolio-yourname.vercel.app`

**Later**: Add custom domain (guide in [DEPLOYMENT.md](DEPLOYMENT.md))

---

## ❓ Common Questions

### Q: How do I change the accent color?

**A:** Edit `app/globals.css` and update `--primary: 262 80% 50%;` (HSL format)

### Q: How do I add more projects?

**A:** Add objects to the `projects` array in `data/portfolio.ts`

### Q: How do I change the font?

**A:** In `app/layout.tsx`, change the import from `Inter` to another Google Font

### Q: Can I use this as a base for something else?

**A:** Yes! All code is yours. Modify as needed.

### Q: How do I test on mobile?

**A:** DevTools → Toggle device toolbar (Ctrl+Shift+M)

### Q: Where do I put screenshots?

**A:** Create `public/projects/` folder and add images there

---

## 🎓 Learning Resources

- [Next.js Docs](https://nextjs.org/docs) - Framework
- [React Docs](https://react.dev) - UI library
- [Tailwind CSS](https://tailwindcss.com/docs) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - Components

---

## 🛠 Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Format code
npx prettier --write .
```

---

## ✅ Pre-Launch Checklist

Before sharing your portfolio:

- [ ] Updated `data/portfolio.ts` with all info
- [ ] Added `public/resume.pdf`
- [ ] Verified all external links
- [ ] Tested dark mode
- [ ] Tested on mobile
- [ ] Run `npm run build` successfully
- [ ] Deployed to Vercel (or hosting)
- [ ] Tested live site
- [ ] Shared with friends/colleagues

---

## 🆘 Having Issues?

1. **Changes not showing?** → Hard refresh (Cmd+Shift+R)
2. **Build errors?** → Check console, search error message
3. **Not responsive?** → Test with DevTools device toolbar
4. **Questions?** → Check [SETUP.md](SETUP.md) or [CUSTOMIZATION.md](CUSTOMIZATION.md)

---

## 📞 Quick Reference

| Task              | File                    | What to Edit                          |
| ----------------- | ----------------------- | ------------------------------------- |
| Update name/info  | `data/portfolio.ts`     | `name`, `email`, `github`, `linkedin` |
| Change color      | `app/globals.css`       | `--primary: ...`                      |
| Update projects   | `data/portfolio.ts`     | `projects` array                      |
| Update experience | `data/portfolio.ts`     | `experience` array                    |
| Update skills     | `data/portfolio.ts`     | `skills.groups`                       |
| Change font       | `app/layout.tsx`        | Font import                           |
| Update nav links  | `components/navbar.tsx` | `navLinks` array                      |
| Add resume        | `public/`               | Add `resume.pdf`                      |

---

## 🎉 Ready to Go!

Your portfolio is complete and ready to shine. Follow these steps:

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Edit `data/portfolio.ts` with your info
4. ✅ Deploy to Vercel: [vercel.com](https://vercel.com)
5. ✅ Share with the world!

---

## 🚀 Next: Read [SETUP.md](SETUP.md) or [CUSTOMIZATION.md](CUSTOMIZATION.md)

**Good luck!** Your professional portfolio is about to impress some amazing opportunities. 🌟
