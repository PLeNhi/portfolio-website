export const portfolioData = {
  name: "Nhi Le",
  title: "Frontend Engineer",
  subtitle: "React, React Native, TypeScript",
  intro:
    "I'm a Frontend Engineer focused on building polished web and mobile experiences with React, React Native, and TypeScript. I enjoy solving complex UI flows, improving reliability, and designing frontend structures that scale in real production systems.",
  email: "ilenhi2710@gmail.com",
  github: "https://github.com/PLeNhi",
  linkedin: "https://linkedin.com/in/nhi-le-b47164352",
  resumeUrl: "/NhiLe_CV_FrontendEngineer.pdf",

  about: {
    title: "About",
    description:
      "I'm a Frontend Engineer with 3+ years of experience building and maintaining production-scale web and mobile applications using React, React Native, and TypeScript. I specialize in complex UI state management, navigation flows, cross-platform behavior consistency, and debugging production systems. I'm strong at improving stability, optimizing rendering performance, and delivering reliable user experiences.",
    stats: [
      {
        label: "Years Experience",
        value: "3+",
      },
      {
        label: "Web + Mobile",
        value: "Full Stack",
      },
      {
        label: "Production Systems",
        value: "Scale-up",
      },
      {
        label: "Tech Stack",
        value: "React/TS",
      },
    ],
  },

  skills: {
    title: "Skills",
    groups: [
      {
        name: "Frontend",
        skills: ["ReactJS", "Next.js", "React Native", "TypeScript", "JavaScript", "Tailwind CSS"],
      },
      {
        name: "State & Data",
        skills: ["Redux", "Zustand", "React Query", "REST API Integration"],
      },
      {
        name: "Performance & Engineering",
        skills: [
          "UI Performance Optimization",
          "Rendering Control",
          "Production Debugging",
          "Cross-Platform Consistency",
        ],
      },
      {
        name: "Backend Familiarity",
        skills: ["Node.js", "NestJS", "PostgreSQL"],
      },
      {
        name: "System & Workflow",
        skills: ["Git", "GitLab CI/CD", "Monorepo Architecture", "Agile/Scrum"],
      },
    ],
  },

  projects: [
    {
      id: 1,
      name: "Campaign Management System",
      summary:
        "A simplified end-to-end campaign platform with admin management, analytics, API integration, and mobile participation flow.",
      description:
        "A production-scale campaign management system with both admin and mobile ecosystem. Handles campaign creation, management, state rendering, and reward tracking across web and mobile interfaces using API-driven UI.",
      highlights: [
        "Admin + mobile ecosystem",
        "Campaign creation and management",
        "Campaign state rendering",
        "API-driven UI architecture",
        "Reusable component system",
      ],
      techStack: ["React", "React Native", "TypeScript", "Redux", "Node.js"],
      liveUrl: "https://campaign-demo.nhile.dev",
      githubUrl: "https://github.com/PLeNhi/campaign-platform",
      caseStudyUrl: "#case-studies",
      featured: true,
    },
    {
      id: 2,
      name: "Realtime Socket Web App",
      summary:
        "A polished realtime web app focused on live updates, event-driven UI, and socket-based state synchronization.",
      description:
        "A sophisticated realtime web application demonstrating advanced socket communication with seamless UI synchronization. Implements event-driven architecture for live data updates and state management.",
      highlights: [
        "Socket communication and live updates",
        "Event-driven UI architecture",
        "Live data synchronization",
        "Modern responsive design",
        "Scalable frontend structure",
      ],
      techStack: ["React", "TypeScript", "Socket.io", "Tailwind CSS"],
      liveUrl: "https://socket-app.nhile.dev",
      githubUrl: "https://github.com/PLeNhi/realtime-socket-app",
      caseStudyUrl: "#case-studies",
      featured: false,
    },
    {
      id: 3,
      name: "Portfolio Website",
      summary:
        "A recruiter-friendly portfolio website designed to present projects, experience, and engineering strengths with clarity and polish.",
      description:
        "A personal portfolio website showcasing production-level frontend work. Built with modern web technologies emphasizing clean design, excellent UX, responsive behavior, and technical excellence.",
      highlights: [
        "Recruiter-focused structure",
        "Professional responsive design",
        "Reusable component architecture",
        "Modern frontend stack",
        "SEO optimized",
      ],
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://nhile.dev",
      githubUrl: "https://github.com/PLeNhi/portfolio-website",
      caseStudyUrl: "#case-studies",
      featured: false,
    },
  ],

  experience: [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Yara Africa & Asia",
      period: "04/2025 - 03/2026",
      description:
        "Worked on a large-scale digital platform supporting farmers across multiple markets, including web and mobile applications. Owned and delivered frontend features end-to-end, built cross-platform experiences, and improved application stability.",
      highlights: [
        "Owned and delivered frontend features end-to-end",
        "Built and maintained cross-platform features using React, React Native, and TypeScript",
        "Designed and stabilized deep linking flows",
        "Improved post-login navigation reliability",
        "Diagnosed and resolved complex UI state and navigation issues",
        "Investigated issues across frontend, backend APIs, and microservices",
        "Collaborated with product and backend teams on business logic and edge cases",
        "Reduced navigation-related production issues",
        "Increased deep linking reliability",
      ],
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "ABC Digital",
      period: "08/2022 - 03/2025",
      description:
        "Developed scalable frontend applications using React, TypeScript, and Redux. Managed complex UI state and asynchronous data flows, integrated RESTful APIs, and worked in monorepo architecture.",
      highlights: [
        "Managed complex UI state and asynchronous data flows",
        "Integrated RESTful APIs with robust data consistency",
        "Worked in monorepo architecture",
        "Contributed to CI/CD pipelines",
        "Collaborated cross-functionally to deliver production-ready features",
        "Built reusable components and component systems",
      ],
    },
  ],

  caseStudies: [
    {
      id: 1,
      title: "Stabilizing Deep Link Flows in Production",
      summary:
        "How I debugged and fixed critical deep linking issues across web and mobile platforms.",
      description:
        "Deep linking complexity multiplies with multiple user states, session management, and platform-specific behaviors. This explores systematic debugging across the stack, identifying state inconsistencies, and implementing reliable solutions that reduced production issues.",
    },
    {
      id: 2,
      title: "Managing Complex UI State at Scale",
      summary:
        "Strategies for building scalable state management without over-engineering.",
      description:
        "State complexity grows with application features. This covers practical patterns for async data flows, optimistic updates, error handling, and side effects in production React/React Native applications serving real users.",
    },
    {
      id: 3,
      title: "Building Reusable Frontend Architecture",
      summary:
        "How to design frontend structures that grow with the team and product.",
      description:
        "Moving fast while maintaining quality requires good architecture decisions early. This covers component composition patterns, naming conventions, API design for scaling, and documentation strategies for monorepo collaboration.",
    },
  ],

  contact: {
    title: "Contact",
    description:
      "I'm open to frontend opportunities and collaboration. Feel free to reach out if you're building something meaningful or hiring.",
    cta: "Get in touch",
  },
};
