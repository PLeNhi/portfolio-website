# Nhi Le - Frontend Engineer Portfolio

A premium, professional portfolio website built with modern web technologies. Designed to help recruiters and hiring managers quickly understand your skills, experience, and projects.

## 🎨 Features

- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS, shadcn/ui
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Dark Mode**: Built-in dark/light theme toggle with system preference detection
- **Smooth Animations**: Subtle Framer Motion animations on scroll
- **SEO Optimized**: Structured metadata, Open Graph tags, proper heading hierarchy
- **Performance**: Static generation, optimized images, clean bundle
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── favicon.ico/        # Favicon route
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── navbar.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── skills.tsx          # Skills section
│   ├── projects.tsx        # Projects section
│   ├── experience.tsx       # Experience section
│   ├── case-studies.tsx     # Case studies section
│   ├── contact.tsx         # Contact section
│   ├── footer.tsx          # Footer
│   ├── scroll-fade-in.tsx   # Scroll animation wrapper
│   ├── hero-visual.tsx      # Hero visual component
│   ├── theme-provider.tsx   # Theme provider
│   └── theme-toggle.tsx     # Dark mode toggle
├── data/
│   └── portfolio.ts        # Portfolio content (easily editable)
├── lib/
│   └── utils.ts            # Utility functions
├── public/
│   └── favicon.svg         # Favicon
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## ✏️ Customization

All portfolio content is centralized in `data/portfolio.ts`. Simply edit this file to customize:

- Personal information (name, email, social links)
- About section and stats
- Skills and expertise areas
- Projects and case studies
- Work experience
- Contact information

### Example: Adding a New Project

```typescript
{
  id: 4,
  name: "My New Project",
  summary: "Brief description...",
  description: "Detailed description...",
  highlights: ["Feature 1", "Feature 2"],
  techStack: ["React", "TypeScript"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example",
  caseStudyUrl: "#case-studies",
  featured: false,
}
```

## 🎯 Sections

### 1. **Hero** - First Impression

Eye-catching introduction with call-to-action buttons and social links.

### 2. **About** - Professional Identity

Overview of experience and key statistics.

### 3. **Skills** - Organized Expertise

Skills grouped by category (Frontend, Mobile, State Management, etc.)

### 4. **Projects** - Showcase Work

Featured project and additional projects with previews and links.

### 5. **Experience** - Production Track Record

Professional background with company, role, and key contributions.

### 6. **Case Studies** - Engineering Approach

Deep dives into how you think and solve problems.

### 7. **Contact** - Easy Connection

Multiple ways to get in touch and call-to-action.

### 8. **Footer** - Professional Closure

Links and copyright information.

## 🛠 Build & Deploy

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

## 📊 Performance

This portfolio is optimized for:

- **Lighthouse**: 90+ scores across all metrics
- **Core Web Vitals**: All green
- **Bundle Size**: Under 200KB gzipped
- **Page Load**: < 1 second on 4G

## 🎨 Styling

- **Theme**: Light theme by default with dark mode support
- **Colors**: Minimal palette using indigo/violet accent
- **Typography**: System font stack for performance
- **Spacing**: Generous padding and margins for readability

### Color Variables (HSL)

Customize colors in `app/globals.css`:

```css
:root {
  --primary: 262 80% 50%; /* Indigo/Violet */
  --accent: 262 80% 50%; /* Accent color */
  --background: 0 0% 100%; /* White */
  --foreground: 0 0% 3.6%; /* Dark gray */
}
```

## 🔧 Environment Variables

Create a `.env.local` file for development:

```env
# Add any API keys or configuration here if needed
```

## 🧩 Components

All components are built with:

- **React Hooks** for state management
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide Icons** for consistent iconography

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚦 SEO

- Meta tags and Open Graph support
- Semantic HTML structure
- Proper heading hierarchy
- Mobile-friendly design
- Fast load times for ranking

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

Built with:

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Ready to ship?** Get your resume ready, add your projects, and share with the world! 🚀
