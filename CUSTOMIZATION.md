# Customization Guide

Complete guide to personalizing your portfolio website.

## 🎯 1-Minute Quick Start

1. Open `data/portfolio.ts`
2. Update your name, email, and social links
3. Update the intro text
4. Save and refresh [http://localhost:3000](http://localhost:3000)

## ⚙️ Complete Customization

### Personal Information

**File**: `data/portfolio.ts`

```typescript
export const portfolioData = {
  name: "Your Name Here",
  title: "Your Job Title",
  subtitle: "Your key skills",
  intro: "Your 2-3 sentence pitch...",
  email: "your.email@example.com",
  github: "https://github.com/yourname",
  linkedin: "https://linkedin.com/in/yourname",
  resumeUrl: "/resume.pdf",
  // ... rest of data
};
```

### About Section

```typescript
about: {
  title: "About",
  description: "Your professional summary paragraph... (2-3 sentences)",
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Web + Mobile", value: "Full Stack" },
    { label: "Production Systems", value: "Enterprise" },
    { label: "Tech Stack", value: "React/TS" },
  ],
}
```

Adjust the stats to match your highlights. Examples:

- Years: "3+", "5+", "8+"
- Type: "Full Stack", "Backend", "Frontend"
- Scale: "Startup", "Scale-up", "Enterprise"
- Tech: "React/TS", "Python/Django", "Go/Rust"

### Skills Section

```typescript
skills: {
  groups: [
    {
      name: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      name: "Mobile",
      skills: ["React Native", "Expo", "iOS", "Android"],
    },
    // Add or remove groups as needed
  ];
}
```

**Best practices**:

- 2-4 skills per group
- Use official technology names
- Group by function (Frontend, Backend, Tools)
- Remove groups you don't use
- Add groups you specialize in (e.g., "DevOps", "Testing")

### Projects Section

**File**: `data/portfolio.ts` → `projects`

Example structure:

```typescript
{
  id: 1,
  name: "Project Name",
  summary: "One-sentence description of what it does",
  description: "2-3 sentences explaining the project",
  highlights: [
    "Key achievement or feature 1",
    "Key achievement or feature 2",
    "Key achievement or feature 3",
    "Key achievement or feature 4",
    "Key achievement or feature 5",
  ],
  techStack: ["React", "TypeScript", "Node.js"],
  liveUrl: "https://live-url.com",
  githubUrl: "https://github.com/username/repo",
  caseStudyUrl: "#case-studies",
  featured: true,  // Set first project to true
}
```

**Featured Project Tips**:

- Set `featured: true` for one project to feature it in the large card
- Choose your best/most impressive project
- Highlight business impact, not just technical details
- Examples:
  - "Reduced page load time by 40%"
  - "Shipped in 6 weeks with 2 engineers"
  - "Served 1M+ weekly active users"

**Non-Featured Projects**:

- Set `featured: false`
- Still showcase these in the grid below
- Can be a mix of personal and professional projects

### Experience Section

**File**: `data/portfolio.ts` → `experience`

```typescript
{
  id: 1,
  title: "Frontend Engineer",
  company: "Company Name",
  period: "2021 - 2023",
  description: "One paragraph summarizing your role and impact",
  highlights: [
    "Specific achievement or responsibility 1",
    "Specific achievement or responsibility 2",
    "Specific achievement or responsibility 3",
    "Specific achievement or responsibility 4",
    "Specific achievement or responsibility 5",
  ],
}
```

**Highlight Tips** - Use action verbs:

- Built, shipped, delivered, designed
- Improved, optimized, scaled, reduced
- Collaborated, mentored, led, managed

**Example highlights**:

- "Built React component library used by 10+ teams"
- "Optimized app bundle size by 35% through code splitting"
- "Helped onboard and mentor 5 junior developers"
- "Debugged and fixed critical production issues spanning frontend and backend"
- "Implemented real-time features using WebSockets"

### Case Studies Section

**File**: `data/portfolio.ts` → `caseStudies`

```typescript
{
  id: 1,
  title: "Building Scalable Component Systems",
  summary: "How I designed a component library that grew with the team",
  description: "2-3 sentence explanation of the approach and outcome",
}
```

**Case Study Ideas**:

- "How I debug complex production issues"
- "Designing for performance without over-engineering"
- "Managing state in large React applications"
- "Building reliable deep linking flows"
- "Scaling frontend architecture with a growing team"

### Contact Section

**File**: `data/portfolio.ts` → `contact`

```typescript
contact: {
  description: "I'm currently open to opportunities...",
  cta: "Get in touch",
}
```

Keep this concise and welcoming.

---

## 🎨 Styling & Branding

### Change Accent Color

**File**: `app/globals.css`

Find the `:root` section and update `--primary` and `--accent`:

```css
:root {
  --primary: 262 80% 50%; /* Current: Indigo */
  --accent: 262 80% 50%; /* Current: Indigo */
}
```

**Color Options** (HSL format):

Common colors:

- **Blue**: `217 91% 60%`
- **Purple**: `280 85% 55%`
- **Red**: `0 84% 60%`
- **Green**: `142 70% 45%`
- **Orange**: `39 100% 50%`
- **Teal**: `174 77% 45%`

To find more colors:

1. Go to [HSLPicker.com](https://hslpicker.com/)
2. Pick your color
3. Copy the HSL value
4. Paste into `--primary` and `--accent`

**Dark Mode Colors**:
In the `.dark` section, also update:

```css
.dark {
  --primary: 262 80% 60%; /* Slightly lighter for dark mode */
  --accent: 262 80% 60%;
}
```

### Change Font

**File**: `app/layout.tsx`

```typescript
import { Inter } from "next/font/google"; // Change this

const inter = Inter({
  // Change variable name if needed
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
```

**Other Google Fonts**:

```typescript
import { Poppins } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
```

### Adjust Spacing

In each section, change `py-20` to adjust vertical spacing:

```jsx
<section className="py-16">  {/* Tighter */}
<section className="py-20">  {/* Normal */}
<section className="py-24">  {/* Looser */}
<section className="py-32">  {/* Very loose */}
```

Change `px-4` to adjust horizontal padding:

```jsx
<div className="px-4">   {/* Mobile padding */}
<div className="px-6">   {/* More padding */}
<div className="px-8">   {/* Maximum padding */}
```

### Add More Section Backgrounds

Some sections have alternating backgrounds (`bg-muted/30`). To change this pattern:

**File**: Each section component

```jsx
<section className="bg-muted/30">  {/* Light background */}
<section>                           {/* No background */}
<section className="bg-primary/5"> {/* Colored background */}
```

---

## 📸 Adding Project Images

### Setup

1. Create folders in `public/`:

   ```
   public/
   ├── projects/
   │   ├── campaign-platform.png
   │   ├── socket-app.png
   │   └── portfolio.png
   └── ...
   ```

2. Add images to the project folders

### Update Components

**File**: `components/projects.tsx`

Modify the project card to show images:

```jsx
import Image from "next/image";

// In the featured project section:
<Image
  src="/projects/campaign-platform.png"
  alt={featuredProject.name}
  width={400}
  height={300}
  className="rounded-lg"
/>

// In the grid cards:
<Image
  src={`/projects/${project.name.toLowerCase().replace(/ /g, '-')}.png`}
  alt={project.name}
  width={300}
  height={200}
/>
```

---

## 🔗 Social Links

Make sure these are correct:

```typescript
github: "https://github.com/yourusername",
linkedin: "https://linkedin.com/in/yourusername",
email: "your.email@company.com",
```

**Tips**:

- Use direct profile URLs, not `linkedin.com/company/...`
- LinkedIn URL format: linkedin.com/in/your-profile-slug
- GitHub URL: github.com/yourusername (no trailing slash)

---

## 📄 Adding Your Resume

1. Create a PDF of your resume
2. Save as `resume.pdf` in the `public/` folder
3. The download buttons will automatically work

**Naming**: The file MUST be named `resume.pdf` to match the `resumeUrl` in `portfolio.ts`.

---

## 🌓 Dark Mode

Your portfolio automatically supports dark mode!

### Testing Dark Mode

- Click the moon icon in the navbar
- Preference is saved locally
- Also respects system preference (automatic)

### Customizing Dark Mode

**File**: `app/globals.css`

In the `.dark` section, adjust colors for dark mode:

```css
.dark {
  --background: 0 0% 3.6%; /* Very dark background */
  --foreground: 0 0% 98%; /* Light text */
  --primary: 262 80% 60%; /* Slightly lighter primary */
}
```

---

## 🔍 SEO Customization

**File**: `app/layout.tsx`

Update metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your 1-sentence pitch that appears in Google results",
  keywords: ["Frontend Engineer", "React", "Your location or focus area"],
  authors: [{ name: "Your Name", url: "https://yoursite.com" }],
  // ... rest of metadata
};
```

### Open Graph (for social sharing)

```typescript
openGraph: {
  title: "Your Name - Your Title",
  description: "Description when shared on social media",
  url: "https://yoursite.com",
  siteName: "Your Name Portfolio",
}
```

---

## ⚡ Performance Tips

### Keep File Sizes Small

- Resume PDF: < 2MB
- Project images: < 500KB each (optimize before uploading)

### Code Splitting

Already optimized! But you can add lazy loading if you want:

```typescript
import dynamic from "next/dynamic";

const Projects = dynamic(() => import("@/components/projects"), {
  loading: () => <p>Loading...</p>,
});
```

### Image Optimization

Always use Next.js Image component:

```jsx
import Image from "next/image";
<Image src="/path" alt="description" width={300} height={200} />;
```

---

## 🧪 Testing Your Changes

### Hot Reload

- Changes to `data/portfolio.ts` appear instantly
- CSS changes appear instantly
- Component changes may need a refresh

### Quick Refresh

```bash
Ctrl + Shift + R  # Windows/Linux
Cmd + Shift + R   # Mac
```

### Test Dark Mode

Click the moon icon in navbar

### Mobile Responsive

```
DevTools → Toggle device toolbar (Ctrl+Shift+M)
Test at: 375px, 768px, 1200px
```

---

## 📋 Final Checklist

Before going live:

- [ ] Updated name, title, email
- [ ] Updated about section
- [ ] Added 3-5 projects
- [ ] Added 2-3 work experiences
- [ ] Updated skills (removed irrelevant ones)
- [ ] Added resume.pdf to public/
- [ ] Tested dark mode
- [ ] Tested on mobile (use DevTools)
- [ ] Verified all social links
- [ ] Updated SEO description
- [ ] Tested all external links
- [ ] Ran `npm run build` successfully
- [ ] Deployed to Vercel or hosting

---

## 🆘 Troubleshooting

### Changes not showing?

```bash
# Hard refresh
Ctrl + Shift + R  # Windows/Linux
Cmd + Shift + R   # Mac

# Or restart dev server
Ctrl + C          # Stop server
npm run dev       # Start again
```

### Styling looks broken?

- Clear cache: `rm -rf .next/`
- Restart dev server
- Check Tailwind config is in root directory

### Images not loading?

- Place in `public/` folder
- Reference as `/image-name.png` (with leading slash)
- Check filename spelling

### Social links not working?

- Verify URLs are correct
- Test in new tab to check link

---

You're all set! Your portfolio is ready to be personalized. Happy customizing! 🎉
