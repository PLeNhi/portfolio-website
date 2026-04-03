# Project Structure & Architecture

## 📊 Directory Overview

```
portfolio-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout wrapper with metadata & theme provider
│   ├── page.tsx           # Home page - main portfolio page
│   ├── globals.css        # Global styles and CSS variables
│   └── favicon.ico/       # Favicon route handler
│
├── components/            # React components
│   ├── ui/               # Base UI components (shadcn/ui)
│   │   └── button.tsx    # Reusable button component
│   │
│   ├── navbar.tsx        # Header with navigation & theme toggle
│   ├── hero.tsx          # Hero/banner section with introduction
│   ├── hero-visual.tsx   # Animated visual elements in hero
│   ├── about.tsx         # About section with stats
│   ├── skills.tsx        # Skills section organized by category
│   ├── projects.tsx      # Projects showcase (featured + grid)
│   ├── experience.tsx     # Work experience timeline
│   ├── case-studies.tsx   # Engineering mindset case studies
│   ├── contact.tsx       # Contact section with CTAs
│   ├── footer.tsx        # Footer with links
│   ├── scroll-fade-in.tsx # HOC for scroll animations
│   ├── theme-provider.tsx # Theme setup (next-themes)
│   └── theme-toggle.tsx  # Dark/light mode toggle
│
├── data/                  # Content & configuration
│   └── portfolio.ts      # Portfolio data object (SINGLE SOURCE OF TRUTH)
│
├── lib/                   # Utilities
│   └── utils.ts          # Helper functions (cn, clsx, twMerge)
│
├── public/                # Static assets
│   ├── favicon.svg       # Portfolio initial/logo
│   ├── Frontend_Developer_Le_Thi_Y_Nhi.docx.pdf        # Your resume (add this)
│   └── projects/         # Project screenshots (create this)
│
├── Configuration Files
├── .eslintrc.json        # ESLint rules for code quality
├── .prettierrc            # Code formatter configuration
├── .prettierignore        # Prettier ignore patterns
├── .gitignore            # Git ignore patterns
├── .nvmrc                # Node version specification
├── next.config.ts        # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.ts    # Tailwind CSS theme & plugins
├── postcss.config.js     # PostCSS with Tailwind
├── package.json          # Dependencies & scripts
│
└── Documentation
    ├── README.md         # Project overview & features
    ├── SETUP.md          # Getting started guide
    └── STRUCTURE.md      # This file
```

## 🔄 Data Flow

```
data/portfolio.ts
    └── Portfolio data object
        ├── Hero uses: name, title, intro, socials
        ├── About uses: description, stats
        ├── Skills uses: skill groups
        ├── Projects uses: project array
        ├── Experience uses: experience array
        ├── CaseStudies uses: caseStudy array
        └── Contact uses: email, socials, description
            └── Footer uses: name, links
```

## 🧩 Component Hierarchy

```
app/layout.tsx (Root)
├── ThemeProvider
│   └── app/page.tsx (Main Content)
│       ├── Navbar
│       ├── Hero
│       │   └── HeroVisual (animated cards)
│       ├── About
│       ├── Skills
│       ├── Projects
│       ├── Experience
│       ├── CaseStudies
│       ├── Contact
│       └── Footer
```

## 📝 Key Files Explained

### `app/page.tsx`

**Purpose**: Main homepage that orchestrates all sections

**What it does**:

- Imports all sections (Hero, About, Skills, etc.)
- Imports portfolio data from `data/portfolio.ts`
- Maps data to each component
- Renders the complete page

**When to edit**: Never directly edit sections here - update `data/portfolio.ts` instead

---

### `data/portfolio.ts`

**Purpose**: Single source of truth for all portfolio content

**Structure**:

```typescript
{
  name: string;
  title: string;
  subtitle: string;
  intro: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;

  about: {
    description: string;
    stats: Array<{ label; value }>;
  }

  skills: {
    groups: Array<{ name; skills: [] }>;
  }

  projects: Array<{
    id: number;
    name: string;
    summary: string;
    description: string;
    highlights: string[];
    techStack: string[];
    liveUrl: string;
    githubUrl: string;
    caseStudyUrl: string;
    featured: boolean;
  }>;

  experience: Array<{
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
    highlights: string[];
  }>;

  caseStudies: Array<{
    id: number;
    title: string;
    summary: string;
    description: string;
  }>;

  contact: {
    description: string;
  }
}
```

**When to edit**: Whenever you want to change any content

---

### `app/globals.css`

**Purpose**: Global styles and theme configuration

**Contains**:

- Tailwind directives (@tailwind)
- CSS variables for light/dark mode
- Custom animations (@keyframes fadeInUp)
- Scrollbar styling
- Base HTML styles

**When to edit**: When changing colors, fonts, or global styles

---

### `components/scroll-fade-in.tsx`

**Purpose**: Animation wrapper component using Framer Motion + Intersection Observer

**What it does**:

- Detects when element enters viewport
- Triggers fade-in animation on scroll
- Supports directional animations (up, down, left, right)
- `triggerOnce: true` ensures animation only happens once

**Used by**: Nearly every section uses this for scroll animations

---

### Components: Sections

Each section (Hero, About, Skills, etc.) follows the same pattern:

```typescript
function SectionName(props) {
  return (
    <section id="section-id" className="py-20">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn>
          // Content with ScrollFadeIn wrappers for individual elements
        </ScrollFadeIn>
      </div>
    </section>
  )
}
```

**Pattern**:

- Uses `id` for anchor navigation in navbar
- `max-w-6xl` for max width
- `py-20` for vertical padding
- `ScrollFadeIn` for animations
- Alternates `bg-muted/30` background for visual separation

---

## 🎨 Styling System

### Tailwind CSS Classes Used

**Layout**:

- `grid`, `flex`, `block`, `absolute`, `fixed`
- `max-w-6xl`, `w-full`, `h-96`
- `px-4`, `py-20`, `gap-8` (padding/margin)

**Colors** (from CSS variables):

- `text-primary`, `text-muted-foreground`
- `bg-card`, `bg-muted/30` (with opacity)
- `border-border`, `hover:text-primary`

**Typography**:

- `text-sm`, `text-lg`, `text-4xl`, `text-5xl`
- `font-bold`, `font-semibold`, `font-medium`
- `uppercase`, `tracking-wider`

**Effects**:

- `shadow-lg`, `rounded-lg`, `border`
- `transition-colors`, `hover:`, `active:`
- `dark:` for dark mode overrides

### CSS Variables

Located in `app/globals.css`:

```css
:root {
  --primary: 262 80% 50%; /* Main accent color (Indigo) */
  --accent: 262 80% 50%; /* Accent color (same as primary) */
  --background: 0 0% 100%; /* Page background (white) */
  --foreground: 0 0% 3.6%; /* Text color (dark gray) */
  --card: 0 0% 100%; /* Card background (white) */
  --muted: 0 0% 96.1%; /* Muted background (light gray) */
  --border: 0 0% 89.8%; /* Border color */
}

.dark {
  /* Dark mode overrides */
}
```

**To change the accent color**, edit the `--primary` and `--accent` values.

---

## 🔗 Linking & Navigation

### Internal Anchor Links

Navbar and CTA buttons use hash links:

```html
<Link href="#about">About</Link>
<Link href="#projects">View Projects</Link>
```

All major sections have `id` attributes:

- `<section id="about">`
- `<section id="projects">`
- `<section id="experience">`
- `<section id="contact">`

Navbar is `sticky` so links scroll the page smoothly.

### External Links

Projects and social links use proper target/rel:

```jsx
<a href={url} target="_blank" rel="noopener noreferrer">
```

Email links:

```jsx
<a href={`mailto:${email}`}>
```

---

## 🚀 Performance Optimizations

### Code Splitting

- Components are imported directly (no lazy loading needed for homepage)
- Tailwind CSS is tree-shaken for only used classes

### Images

- Uses Next.js Image component (automatic optimization)
- Placeholder illustrations are CSS rather than image files

### Fonts

- Uses `next/font` with Google Fonts (local hosting)
- Only Inter font loaded (minimal JS)

### Interactions

- Intersection Observer for scroll detection (efficient)
- Framer Motion handles animations (GPU-accelerated)

### Bundle Size

- ~200KB gzipped total
- ~50KB JavaScript
- ~50KB CSS

---

## 🧪 Testing Your Changes

### Hot Reloading

Save files and changes appear instantly at localhost:3000

### Dark Mode

Click the moon icon in navbar to toggle theme

### Mobile Responsive

- DevTools → Toggle device toolbar (Ctrl+Shift+M)
- Test at 375px (mobile), 768px (tablet), 1200px (desktop)

### Section Navigation

Click navbar links to jump to sections

---

## 🔧 Common Customizations

### Add a New Skill Group

In `data/portfolio.ts`:

```typescript
{
  name: "My New Category",
  skills: ["Skill 1", "Skill 2", "Skill 3"]
}
```

### Add a New Project

In `data/portfolio.ts`:

```typescript
{
  id: 4,
  name: "Project Name",
  summary: "One-liner",
  // ... rest of project object
}
```

### Change Accent Color

In `app/globals.css`, update `:root`:

```css
--primary: 217 91% 60%; /* Change to blue */
--accent: 217 91% 60%; /* Change to blue */
```

### Adjust Section Spacing

Edit `py-20` in section components:

```jsx
<section className="py-20">  {/* y-padding */}
<section className="py-16">  {/* tighter */}
<section className="py-32">  {/* looser */}
```

### Change Font

In `app/layout.tsx`:

```typescript
const inter = Inter({ ... })  // Change this import
```

---

## 📚 Dependencies

| Package         | Purpose     | Key Files                |
| --------------- | ----------- | ------------------------ |
| `next`          | Framework   | `app/`, `next.config.ts` |
| `react`         | UI library  | All components           |
| `typescript`    | Type safety | All `.tsx` files         |
| `tailwindcss`   | Styling     | `app/globals.css`        |
| `framer-motion` | Animations  | `scroll-fade-in.tsx`     |
| `next-themes`   | Dark mode   | `theme-provider.tsx`     |
| `lucide-react`  | Icons       | All components           |

---

## 🎯 Deployment Checklist

Before deploying:

- [ ] Update `data/portfolio.ts` with your info
- [ ] Add `Frontend_Developer_Le_Thi_Y_Nhi.docx.pdf` to `public/`
- [ ] Test dark mode (click moon icon)
- [ ] Test mobile responsive
- [ ] Check all external links work
- [ ] Update meta description in `app/layout.tsx`
- [ ] Verify social links
- [ ] Test email link
- [ ] Run `npm run build` successfully

---

This structure keeps your portfolio organized, maintainable, and easy to update! 🎉
