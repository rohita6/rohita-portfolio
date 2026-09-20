export const PROJECTS_DATA = [
  {
    id: "portfolio-meta",
    title: "Portfolio System Architecture",
    subtitle: "Apple-Inspired Interactive Showcase Engine",
    category: "META / SYSTEMS",
    tags: ["React", "JavaScript", "Tailwind CSS v4", "Vite", "Canvas API"],
    heroStat: "100/100 Lighthouse",
    gradient: "from-purple-900/50 via-indigo-950/70 to-black",
    previewType: "code",
    tagline: "The technical architecture, view engine, and graphics renderer powering this portfolio website.",
    impactRecruiter: "Built with zero heavy visual dependencies to deliver a 100/100 performance score and sub-100ms first paint.",
    impactEngManager: "Features a context-driven perspective state engine (Recruiter / Eng Lead / Overview) and custom 60fps Canvas particle system.",
    impactCasual: "Designed with custom glassmorphism styling, soft cubic-bezier transitions, and dynamic role perspectives.",
    problem: "Standard portfolio templates lack interactive role customization and can suffer from heavy visual package overhead.",
    solution: "Architected a lightweight React + Vite application with custom Canvas particle loops and state-bound role view engines.",
    demoType: "api-tester",
    architecture: [
        { id: "ui", name: "React 19 + Vite", type: "Core App", desc: "Modular component pipeline with hot module replacement." },
        { id: "engine", name: "Perspective Engine", type: "State", desc: "Re-binds content models dynamically without layout shifts." },
        { id: "canvas", name: "Particle Starfield", type: "Graphics", desc: "Native HTML5 Canvas requestAnimationFrame loop at 60fps." },
        { id: "style", name: "Tailwind CSS v4", type: "Styling", desc: "Utility-first design tokens with GPU-accelerated blur filters." }
    ],
    uiSnippet: {
        title: "ParticleBackground.jsx",
        previewText: "requestAnimationFrame(render); // 60fps native canvas loop"
    }
  },
  {
    id: "prepwise",
    title: "PrepWise",
    category: "FULL STACK",
    highlightBadge: "10x Ingestion Speed",
    tagline: "Smart recipe recommendation system with Express.js gateway & Python intelligence.",
    impactStats: {
      recruiter: "Delivers tailored recipe suggestions based on available user ingredients with sub-second latency.",
      engLead: "Express.js route gateway, Python recommendation engine, PostgreSQL DB, React frontend.",
      casual: "Helps you instantly discover recipes you can cook right now with what's in your pantry."
    },
    techStack: ["React", "Express.js", "Python", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    uiSnippet: {
      title: "recommendation_gateway.py",
      previewText: "def calculate_matching_score(user_pantry, recipe_db):"
    }
  },
  {
    id: "cosmic-portal",
    title: "Cosmic Portal",
    category: "TEAM project",
    heroStat: "Group Engineering",
    subtitle: "Enterprise Warehouse Management System & Software Component Design",
    tagline: "Collaborative enterprise UI component library & warehouse management portal.",
    problem: "Engineering a scalable, multi-user enterprise UI system with shared component standards across distributed frontend teams.",
    solution: "Co-developed modular React primitives (MenuDrawer, BrandHeader) and responsive UI workflows within a multi-developer component system.",
    impactStats: {
        recruiter: "Co-designed modular React component design patterns (MenuDrawer, BrandHeader) within a team engineering environment for an enterprise warehouse platform.",
        engLead: "Implemented reusable React UI primitives with strict prop interfaces, shared state contracts, and component modularity across team workflows.",
        overview: "Collaborative software design project delivering enterprise warehouse management interface components."
    },
    techStack: ["React", "JavaScript", "Tailwind CSS", "Figma", "Git"],
    tags: ["React", "JavaScript", "Tailwind CSS", "Figma"],
    githubUrl: "https://github.com/rohita6",
    liveUrl: null,
    uiSnippet: {
        title: "MenuDrawer.jsx",
        previewText: "export default function MenuDrawer({ isOpen, onClose }) {"
    }
  },
//   {
//     id: "house-of-miraya",
//     title: "House of Miraya",
//     category: "FRONTEND & UI",
//     highlightBadge: "Zero-Latency Sync",
//     tagline: "Curated fashion e-commerce showcase platform with high-fidelity UI design.",
//     impactStats: {
//       recruiter: "Architected modern fashion retail interface with streamlined browsing & checkout UI.",
//       engLead: "Next.js frontend, REST API service layers, responsive product gallery grids.",
//       casual: "A sleek online storefront designed for exploring curated fashion and apparel."
//     },
//     techStack: ["Next.js", "React", "Node.js", "Tailwind CSS"],
//     liveUrl: "#",
//     githubUrl: "#",
//     uiSnippet: {
//       title: "CatalogGrid.jsx",
//       previewText: "<ProductGrid items={featuredItems} layout='masonry' />"
//     }
//   }
];