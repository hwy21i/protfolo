export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  developmentProcess: string;
  challenges: string;
  whatILearned: string;
  liveUrl?: string;
  githubUrl?: string;
  isFlagship?: boolean;
  image?: string;
  secondaryImage?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; tag: string }[];
}

export interface CSFundamental {
  id: string;
  title: string;
  concept: string;
  description: string;
  codeSnippet?: string;
}

export interface JourneyMilestone {
  period: string;
  role: string;
  institution: string;
  summary: string;
  highlights: string[];
}

export const DEVELOPER_PROFILE = {
  name: "Hawariya Yohannes",
  role: "Computer Science Student & Software Engineer",
  institution: "Unity University",
  degree: "B.Sc. in Computer Science",
  headline: "Engineering ideas into digital experiences.",
  summary:
    "Computer Science student and software engineer driven by architectural discipline, systems thinking, and elegant user-facing craft. Specializing in full-stack web applications, resilient backend services, and clean component systems.",
  location: "Addis Ababa, Ethiopia",
  email: "hawariyayohannes52@gmail.com",
  phone: "0900053956",
  github: "https://github.com/hwy21i",
  linkedin: "https://www.linkedin.com/in/hawariya-yohannes-364649430",
  metrics: [
    { label: "Verified Production Projects", value: "4" },
    { label: "Core CS Discipline", value: "Unity University" },
    { label: "Active Code Repositories", value: "20+" },
    { label: "Design System Philosophy", value: "Obsidian Atelier" },
  ],
};

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "construction-erp",
    number: "Project #01 — Flagship Architecture",
    title: "Construction Project Management & ERP",
    category: "ENTERPRISE SYSTEMS & RESOURCE PLANNING",
    tagline:
      "An integrated construction management platform unifying operations, schedules, materials, budgets, and automated reporting.",
    description:
      "A comprehensive enterprise construction operations and project management system (Apex Developments). Unifies 8 core operational domains: project milestones, task assignments, procurement and materials tracking, budget variance analytics, role-based access control, reporting, and automated alerts.",
    overview:
      "Commercial construction operations require real-time synchronization between on-site field engineers, procurement supervisors, and financial managers. This enterprise platform consolidates fragmented operations into an interconnected digital command center.",
    problem:
      "Construction projects frequently suffer from schedule delays, unbudgeted material costs, and fragmented communication across disconnected spreadsheets and messaging channels.",
    solution:
      "Engineered a full-stack Next.js and MongoDB ERP system featuring role-scoped access control, HTTP-only session cookies, dynamic dashboard metrics, Excel/PDF export utilities, and atomic database transactions.",
    keyFeatures: [
      "8 Interconnected Core Modules (Projects, Tasks, Materials, Budgets, Progress, Roles, Reports, Alerts)",
      "Secure HTTP-only session cookie authentication with role-based permission matrix",
      "Dynamic project dashboards with real-time budget burn-down & schedule timelines",
      "Automated PDF and Excel report compilation using PDFKit and XLSX pipelines",
      "Strict data schemas and input validation powered by Zod and Mongoose",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB / Mongoose",
      "Tailwind CSS",
      "PDFKit",
      "XLSX",
      "Zod",
      "Bcrypt",
    ],
    developmentProcess:
      "Architected relational schemas on top of MongoDB using Mongoose models, implemented role-permission middleware guards, designed responsive modular dashboards, and seeded operational workflows.",
    challenges:
      "Designing a unified permission matrix where project managers, site engineers, and financial auditors each have tailored, secure views without compromising data integrity.",
    whatILearned:
      "Advanced full-stack system architecture, session cookie security, complex aggregate database queries, and building production-grade enterprise software systems.",
    liveUrl: "https://apex-develoment.vercel.app/",
    githubUrl: "https://github.com/hwy21i/Apex-development",
    isFlagship: true,
    image: "/construction-site.jpg",
    secondaryImage: "/architecture-facade.jpg",
  },
  {
    id: "wedding-invitation",
    number: "Project #02",
    title: "Wedding Invitation Web Experience",
    category: "INTERACTIVE WEB APPLICATION",
    tagline:
      "A bespoke, modern wedding celebration platform with interactive guest RSVP and dynamic event guidance.",
    description:
      "A tailored, interactive digital invitation experience crafted to celebrate Liya's wedding. Features animated typography, location directions, interactive guest RSVPs, and smooth multimedia presentation.",
    overview:
      "Modern couples need an interactive, sustainable, and personalized alternative to static paper invitations. This project replaces one-way stationery with a responsive, dynamic web experience.",
    problem:
      "Traditional invitations lack instant RSVP confirmation, fail to provide live ceremony coordinates, and can be easily misplaced by attending guests.",
    solution:
      "Engineered a polished, accessible web application featuring dynamic event schedules, responsive guest response forms, interactive maps, and audio-visual celebration aesthetics.",
    keyFeatures: [
      "Dynamic interactive RSVP workflow with validation",
      "Event schedule countdown & ceremonial timeline",
      "Integrated location guidance & digital directions",
      "Mobile-optimized responsive celebration layout",
      "Smooth micro-interactions and audio backdrop",
    ],
    technologies: ["JavaScript", "HTML5 Canvas", "Modern CSS", "Vercel Cloud", "Responsive UI"],
    developmentProcess:
      "Iterated through initial typography pairings and layout wireframes to capture celebration elegance, followed by validation of the guest registration flow.",
    challenges:
      "Ensuring seamless cross-device mobile rendering and fast load times across unpredictable cellular networks for attending guests.",
    whatILearned:
      "Refined aesthetic precision in typography hierarchies, micro-animations, and building intuitive interfaces for non-technical event guests.",
    liveUrl: "https://wedding-invitation-blue-six.vercel.app/",
    githubUrl: "https://github.com/hwy21i/wedding-invitation",
    isFlagship: false,
  },
  {
    id: "afro-trade",
    number: "Project #03",
    title: "Afro Trade E-Commerce Marketplace",
    category: "COMMERCE & MARKETPLACE PLATFORM",
    tagline:
      "A modern digital marketplace connecting buyers and sellers with an authentic African trade focus.",
    description:
      "An e-commerce marketplace platform designed to empower African commerce and authentic trade. Features comprehensive product catalogs, dynamic filtering, structured cart state management, and modern responsive design.",
    overview:
      "Afro Trade establishes an online hub for authentic regional goods, crafted wares, and cross-border commercial trade with a contemporary digital shopping experience.",
    problem:
      "Local artisans and regional vendors frequently face high entry barriers and lack intuitive, dedicated platforms to showcase their catalogs with localized currency and category structures.",
    solution:
      "Architected a scalable marketplace frontend with high-performance product browsing, search indexing, responsive product detail pages, and order flow interfaces.",
    keyFeatures: [
      "Product catalog with category & price filtering",
      "Cart management with real-time state persistence",
      "Dynamic product inspection modals & galleries",
      "Clean, modern African commerce branding",
      "Optimized performance with zero layout shift",
    ],
    technologies: ["JavaScript", "React / Next.js Patterns", "CSS Modules", "Vercel", "REST APIs"],
    developmentProcess:
      "Designed data models for merchants and catalog items, built responsive product card grids, and integrated reactive state containers for shopping cart logic.",
    challenges:
      "Organizing multifaceted product categories while preserving ultra-fast client-side search and filter performance.",
    whatILearned:
      "Deeper mastery over client state architecture, component modularity, and designing commercial user flows with minimal friction.",
    liveUrl: "https://afro-trade.vercel.app/",
    githubUrl: "https://github.com/hwy21i/afro-trade",
    isFlagship: false,
  },
  {
    id: "authentication-system",
    number: "Project #04",
    title: "Authentication & Identity System",
    category: "SECURITY & AUTHENTICATION PROTOCOL",
    tagline:
      "A dedicated security-focused web application emphasizing credential sanitization and clean session flow.",
    description:
      "A dedicated authentication system implementing robust user validation, secure credentials handling, registration/login workflows, error boundaries, and protected access patterns.",
    overview:
      "Authentication and authorization form the bedrock of production software engineering. This project demonstrates foundational identity verification mechanics, token storage principles, and protected routes.",
    problem:
      "Poorly implemented authentication leaves user credentials vulnerable to injection attacks, leaks sensitive tokens, and frustrates users with ambiguous validation errors.",
    solution:
      "Implemented a structured authentication interface with strict client-side validation schemas, masked credentials input, session state handling, and clear feedback alerts.",
    keyFeatures: [
      "Secure user registration and credential login",
      "Client-side input sanitization & password policy enforcement",
      "State-driven session tokens & persistence simulation",
      "Comprehensive error feedback and success states",
      "Clean, distraction-free security interface",
    ],
    technologies: ["JavaScript", "HTML5 Security Attributes", "REST API Integration", "CSS3", "Vercel"],
    developmentProcess:
      "Drafted security state diagrams mapping login, signup, token validation, and logout transitions before implementing reactive form handlers.",
    challenges:
      "Balancing rigorous security validations with an intuitive, reassuring user experience that prevents user error.",
    whatILearned:
      "Thorough understanding of credential security workflows, session lifetimes, sanitization patterns, and HTTP request headers.",
    liveUrl: "https://authentication-17k5.vercel.app/",
    githubUrl: "https://github.com/hwy21i/Authentication-",
    isFlagship: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core compiled and dynamic languages utilized across academic and applied engineering.",
    skills: [
      { name: "JavaScript", tag: "ES6+ / Async" },
      { name: "TypeScript", tag: "Strict Types" },
      { name: "Python", tag: "Algorithms / Scripts" },
      { name: "C++", tag: "Systems / Memory" },
      { name: "Java", tag: "OOP / Architecture" },
      { name: "SQL", tag: "Relational Queries" },
    ],
  },
  {
    title: "Frontend Engineering",
    description: "Architectural component design, reactive state management, and modern browser standards.",
    skills: [
      { name: "React", tag: "Component Trees" },
      { name: "Next.js", tag: "App Router / SSR" },
      { name: "Tailwind CSS", tag: "Utility Systems" },
      { name: "HTML5 & Semantic Web", tag: "Accessibility" },
      { name: "Modern CSS / CSS Modules", tag: "Layout / Flex / Grid" },
      { name: "Motion", tag: "Cinematic Interaction" },
    ],
  },
  {
    title: "Backend & Services",
    description: "Server architecture, API design, authentication flows, and data serialization.",
    skills: [
      { name: "Node.js", tag: "Runtime Environment" },
      { name: "Express", tag: "Routing & Middleware" },
      { name: "RESTful APIs", tag: "Resource Design" },
      { name: "Authentication & JWT", tag: "Session Security" },
      { name: "HTTP-Only Cookies", tag: "CSRF & Token Defense" },
      { name: "Server Middleware", tag: "Guards & Validators" },
    ],
  },
  {
    title: "Databases & Persistence",
    description: "Relational normalization, document storage, and schema integrity validation.",
    skills: [
      { name: "MongoDB", tag: "Document Models" },
      { name: "Mongoose", tag: "Schema Validation" },
      { name: "PostgreSQL", tag: "Relational Systems" },
      { name: "MySQL", tag: "Transactions & ACID" },
      { name: "Schema Modeling", tag: "Indexing & Normalization" },
    ],
  },
  {
    title: "Workflow & Engineering Tools",
    description: "Modern developer tooling, version control workflows, and cloud deployments.",
    skills: [
      { name: "Git & GitHub", tag: "Version Control" },
      { name: "Vercel", tag: "Edge & Serverless Deployment" },
      { name: "Vite", tag: "Build Tooling" },
      { name: "Postman", tag: "API Inspection" },
      { name: "VS Code", tag: "Environment" },
      { name: "Linux / Bash", tag: "Shell Execution" },
    ],
  },
  {
    title: "Computer Science Foundations",
    description: "Theoretical grounding and analytical rigor practiced at Unity University.",
    skills: [
      { name: "Data Structures", tag: "Trees / Graphs / Hashes" },
      { name: "Algorithms", tag: "Asymptotic Complexity" },
      { name: "OOP Principles", tag: "SOLID / Design Patterns" },
      { name: "Computer Networks", tag: "TCP/IP & HTTP Specs" },
      { name: "Operating Systems", tag: "Processes & Memory" },
      { name: "Defensive Coding", tag: "Input Sanitization" },
    ],
  },
];

export const CS_FUNDAMENTALS: CSFundamental[] = [
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    concept: "Asymptotic Runtime & Memory Tradeoffs",
    description:
      "Evaluating computational time and space bounds using Big-O notation. Implementing hash tables, binary trees, directed graphs, heaps, and divide-and-conquer sorting strategies.",
    codeSnippet: "O(1) amortized hash lookup · O(n log n) merge sort · O(V + E) BFS/DFS",
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    concept: "Encapsulation, Polymorphism & Modularity",
    description:
      "Designing clean class hierarchies, abstract contracts, and composition-over-inheritance patterns across typed systems including Java and C++.",
    codeSnippet: "Interface segregation · Open/Closed principle · Encapsulated invariants",
  },
  {
    id: "dbms",
    title: "Database Systems & ACID",
    concept: "Relational Modeling & Schema Integrity",
    description:
      "Structuring databases across 1NF through 3NF relational forms, managing atomic transactions, foreign key constraints, primary indexing, and document-oriented models.",
    codeSnippet: "Atomicity · Consistency · Isolation · Durability · Composite indexing",
  },
  {
    id: "networks",
    title: "Computer Networks & Protocols",
    concept: "Transport Layer & Client-Server Architectures",
    description:
      "Tracing the network stack from socket connections, DNS resolution, and TCP three-way handshakes through HTTP/1.1 and HTTP/2 headers and REST conventions.",
    codeSnippet: "TCP/IP stack · TLS handshake · REST idempotency · Request/Response cycle",
  },
  {
    id: "os",
    title: "Operating Systems & Concurrency",
    concept: "Process Scheduling & Memory Management",
    description:
      "Understanding OS scheduling algorithms, multi-threaded execution, race condition prevention via mutex locks, virtual memory paging, and system call boundaries.",
    codeSnippet: "Process isolation · Thread synchronization · Virtual memory · Syscalls",
  },
  {
    id: "swe",
    title: "Software Engineering & Architecture",
    concept: "Separation of Concerns & Maintainability",
    description:
      "Architecting modular software with isolated boundaries, defensive input validation, automated linting, atomic git commits, and systematic error handling.",
    codeSnippet: "Decoupled layers · Single Responsibility · Defensive validation · CI/CD",
  },
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    period: "ACADEMIC FOUNDATION",
    role: "Computer Science Undergraduate",
    institution: "Unity University",
    summary:
      "Studying computing theory, discrete mathematics, digital logic, and foundational software engineering from first principles.",
    highlights: [
      "Rigorous coursework in Data Structures, Algorithms, and Operating Systems",
      "Systematic problem solving using compiled languages (C++, Java)",
      "Database design, normalization forms, and relational query optimization",
    ],
  },
  {
    period: "APPLIED PRACTICE",
    role: "Core Programming & Systems Logic",
    institution: "C++, Java, Python & JavaScript",
    summary:
      "Transitioning theoretical computational models into algorithmic implementations across diverse language paradigms.",
    highlights: [
      "Building algorithmic problem solvers in C++ and Java",
      "Scripting automation and data parsing routines in Python",
      "Deepening understanding of memory lifecycles and runtime execution",
    ],
  },
  {
    period: "WEB ENGINEERING",
    role: "Full-Stack Web Development",
    institution: "Production Deployments",
    summary:
      "Creating modern, accessible, and high-performance digital products deployed to cloud infrastructures.",
    highlights: [
      "Engineered Wedding Invitation Web Experience with dynamic RSVP workflow",
      "Architected Afro Trade e-commerce marketplace frontend with reactive state",
      "Built dedicated security & credential authentication protocols",
    ],
  },
  {
    period: "ENTERPRISE SYSTEMS",
    role: "Flagship Architecture & Systems Engineering",
    institution: "Apex Developments ERP",
    summary:
      "Designing an 8-module Construction Project Management ERP system unifying operations, materials, budgets, and reporting.",
    highlights: [
      "Full-stack Next.js, TypeScript, and MongoDB Mongoose architecture",
      "Role-based permission matrix with secure HTTP-only cookies",
      "Real-time schedule burn-down, budget variance, and automated export pipelines",
    ],
  },
  {
    period: "PRESENT & FUTURE",
    role: "Continuous Evolution & Engineering Readiness",
    institution: "Professional Software Engineering",
    summary:
      "Actively maintaining 20+ GitHub repositories, exploring scalable distributed systems, and preparing for high-impact software engineering roles.",
    highlights: [
      "Pursuing architectural excellence and clean code craftsmanship",
      "Continuous exploration of modern frontend and distributed backend frameworks",
      "Available for software engineering opportunities and technical collaboration",
    ],
  },
];

