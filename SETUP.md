# Getting Started with Your Portfolio Website

Welcome! Your professional portfolio website is ready to be built and customized. Follow these steps to get it running locally and make it your own.

## 📋 Prerequisites

Make sure you have:

- **Node.js** 18.x or higher ([download here](https://nodejs.org/))
- **npm** or **yarn** (comes with Node.js)
- A code editor (VS Code recommended)
- Git (already initialized in this project)

## 🚀 Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This installs all required packages:

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- Lucide Icons
- And more...

### 2. Start Development Server

```bash
npm run dev
```

Your portfolio will be available at **[http://localhost:3000](http://localhost:3000)**

The app will automatically reload when you make changes.

## ✏️ Customize Your Portfolio

### Step 1: Edit Your Content

Open `data/portfolio.ts` and update:

- **Name & Title**: Change "Nhi Le" and "Frontend Engineer"
- **Subtitle & Intro**: Update your professional pitch
- **Email, GitHub, LinkedIn**: Add your social links
- **About Section**: Your professional summary
- **Skills**: Organize by category
- **Projects**: Update with your actual projects
- **Experience**: Your work history
- **Case Studies**: Your engineering philosophy or deep dives

**Example - Updating a Project:**

```typescript
{
  id: 1,
  name: "Your Project Name",
  summary: "One-sentence summary",
  description: "Longer description of the project...",
  highlights: [
    "Key achievement 1",
    "Key achievement 2",
    "Key achievement 3",
  ],
  techStack: ["React", "TypeScript", "Node.js"],
  liveUrl: "https://your-project.com",
  githubUrl: "https://github.com/yourname/project",
  caseStudyUrl: "#case-studies",
  featured: true, // Set to true for the large featured card
}
```

### Step 2: Add Project Screenshots

1. Create screenshots of your projects
2. Place them in `public/projects/`
3. Update the project cards to display these images (modify `projects.tsx` to add Image components)

### Step 3: Create Your Resume

1. Create a PDF of your resume
2. Save it as `public/resume.pdf`
3. Update the download links if needed

### Step 4: Customize Styling (Optional)

**Colors & Theme:**

- Open `app/globals.css`
- Update CSS variables to match your brand
- Default accent color is indigo (262, 80%, 50%)

**Example - Change accent color to blue:**

```css
:root {
  --primary: 217 91% 60%; /* Blue instead of indigo */
  --accent: 217 91% 60%; /* Blue instead of indigo */
}
```

**Typography:**

- Edit font in `app/layout.tsx` if you want to change from Inter

## 🧪 Preview Your Changes

As you edit `data/portfolio.ts`, your changes will appear immediately at [http://localhost:3000](http://localhost:3000) thanks to Next.js hot reloading.

### Tips:

- Use Ctrl+Shift+R (Cmd+Shift+R on Mac) to hard refresh if changes don't appear
- Open DevTools (F12) to check mobile responsiveness
- Test dark mode by clicking the moon icon in the navbar

## 📱 Testing Responsive Design

1. Open DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M)
3. Test on different device sizes:
   - Mobile (320px - 640px)
   - Tablet (640px - 1024px)
   - Desktop (1024px+)

## 🎨 Sections Guide

### Navbar

- Located in `components/navbar.tsx`
- Sticky header with theme toggle
- Mobile menu automatically collapses on small screens

### Hero

- Large headline with your name
- Brief introduction and CTAs
- Animated visual elements on the right
- Social media links

### About

- Professional summary
- 4 stat cards (Years of Experience, Web + Mobile, etc.)
- Edit the stats in `data/portfolio.ts` under `about.stats`

### Skills

- Organized into groups (Frontend, Mobile, Backend, etc.)
- Add or remove skill groups in `data/portfolio.ts`
- Edit `skills.groups`

### Projects

- Featured project (large card)
- 2 additional projects (smaller cards)
- Each has a screenshot placeholder, description, highlights, and tech tags
- Update `projects` array in `data/portfolio.ts`

### Experience

- Timeline of work history
- Show company, role, period, description, and key contributions
- Update `experience` array in `data/portfolio.ts`

### Case Studies

- 3 deep-dive cards showcasing your engineering mindset
- Short summary for each
- Update `caseStudies` array in `data/portfolio.ts`

### Contact

- Call-to-action to email you
- Links to GitHub and LinkedIn
- Resume download button
- Update contact info in `data/portfolio.ts`

### Footer

- Quick links
- Social links
- Copyright

## 🚢 Build for Production

When ready to deploy:

```bash
npm run build
npm start
```

This creates an optimized production build.

## 🌐 Deploy to Vercel (Recommended)

Vercel is the creator of Next.js and offers free hosting with automatic deployments.

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to connect your GitHub account and deploy.

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Your portfolio will be live instantly and redeploy on every git push!

### Option 3: Other Platforms

You can also deploy to:

- **Netlify** - Drag and drop like Vercel
- **AWS Amplify** - More control if needed
- **Self-hosted** - Your own server

## 📊 SEO & Metadata

Your portfolio includes:

- ✅ Meta descriptions
- ✅ Open Graph tags for social sharing
- ✅ Proper heading hierarchy
- ✅ Mobile-friendly design
- ✅ Fast page load time

To customize:

1. Edit meta in `app/layout.tsx`
2. Update Open Graph description
3. Add your actual resume PDF

## 🔍 Performance Checklist

- [ ] Resume PDF uploaded to `public/resume.pdf`
- [ ] All social links verified
- [ ] Email address correct
- [ ] Projects completed and customized
- [ ] Experience section accurate
- [ ] Skills categorized properly
- [ ] Dark mode tested (click moon icon)
- [ ] Mobile responsive tested
- [ ] All links working

## 🐛 Common Issues

### Changes not showing?

- Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- Restart dev server: Ctrl+C, then `npm run dev`

### Styling not applying?

- Make sure Tailwind classes match the design system
- Check that tailwind.config.ts is in the root directory

### Images not loading?

- Place images in the `public/` folder
- Reference them as `/image-name.jpg` in components

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🆘 Need Help?

1. **Check the README.md** - Project overview and structure
2. **Read comments in components** - Each component has documentation
3. **Check data/portfolio.ts** - All content is clearly organized
4. **Google your error** - Most issues have solutions online

## ✅ Ready to Go!

You now have a premium portfolio website ready to customize and deploy. Here's your next steps:

1. Update your content in `data/portfolio.ts`
2. Test locally with `npm run dev`
3. Add your resume PDF to `public/resume.pdf`
4. Deploy to Vercel or your preferred platform
5. Share your portfolio with recruiters! 🎉

---

**Questions?** The code is well-commented. Explore the components folder to see how everything works!

Good luck with your portfolio! 🚀
