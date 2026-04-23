export const profile = {
  name: "Prasad Gurav",
  title: "Software developer",
  tagline:
    "Shipping full-stack web applications — from planning to production — with React, Next.js, Node, and Django.",
  journey: {
    from: "from idea",
    to: "production",
  } as const,
  avatarInitials: "PG",
  bio: [
    "3+ years building production web: discovery, spec, and iteration with design and backend partners — Pune, India.",
    "Stack focus: TypeScript, React, Next.js, Node, and Django REST — plus PostgreSQL, MongoDB, AWS, and Docker in real deployments.",
  ],
} as const;

export const ossPartners = [
  { name: "Open Source", hint: "Your contributions" },
  { name: "Ecosystem", hint: "Docs & issues" },
  { name: "Community", hint: "Talks & PRs" },
] as const;

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Redux",
  "Motion",
  "GSAP",
  "Three.js",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "PostgreSQL",
  "MongoDB",
  "Git",
  "Docker",
  "AWS",
  "Jenkins",
  "Linux",
  "Jira",
  "Figma",
] as const;

export const work = [
  {
    company: "Mirana Innovation Pvt Ltd",
    location: "Pune, India",
    role: "Software Developer",
    range: "Apr 2024 – Present",
    highlights: [
      "Revamped miranatoys.com with React and Next.js, cutting page load time by ~40% and improving Core Web Vitals on key routes.",
      "Engineered the Level Map backend module to automate reward allocation and manage user level progression for 50k+ active users on the Mirana Toys app.",
      "Built an internal customer support panel so the team can log, track, and resolve consumer queries — ~30% faster average resolution time.",
    ],
  },
  {
    company: "Revvknew Media Pvt Ltd",
    location: "Pune, India",
    role: "Web Developer",
    range: "Feb 2022 – Jan 2024",
    highlights: [
      "Built a Lead Management System in Django REST and React handling 4M+ lead records with optimised APIs and query patterns.",
      "Developed a lead generation website with SEO, fast loads, and conversion-focused UX.",
    ],
  },
] as const;

export const projectShowcase = {
  mobile: {
    label: "Mobile & app-adjacent",
    detail: "Product flows, app backends, and interfaces that work great on the phone and at scale.",
    href: "/projects?category=mobile" as const,
  },
  web: {
    label: "Web & product builds",
    detail: "Full-stack and marketing web: Next.js, motion, and tight delivery from API to UI.",
    href: "/projects?category=web" as const,
  },
} as const;

export const hackathons = {
  count: 8,
  subline:
    "I enjoy shipping fast, learning with teams, and meeting builders at these events.",
} as const;

export const philosophy = {
  intro:
    "I do my best work when I can act as a partner across product, design, and engineering — turning ambiguity into shippable outcomes.",
} as const;

export const roles = [
  { id: "design", label: "Design engineer" },
  { id: "app", label: "App developer" },
  { id: "full", label: "Full-stack engineer" },
] as const;

export const education = [
  {
    school: "Dr. Babasaheb Ambedkar Marathwada University",
    program: "Bachelor of Computer Applications — Chhatrapati Sambhajinagar",
    range: "2024 – Present (expected 2027)",
  },
] as const;

export const contact = {
  name: "Prasad Gurav",
  phone: "+91 9561242048",
  email: "psgurav2001@gmail.com",
  website: "https://psgurav.in",
  x: "https://x.com",
  /** Full URL; floating dock and footer use this. */
  linkedin: "https://linkedin.com/in/psgurav04",
  github: "https://github.com/prasad-gurav",
  whatsapp: "https://wa.me/919561242048",
  facebook: "https://www.facebook.com",
  instagram: "https://www.instagram.com",
} as const;

export const quote = "Stay curious, stay kind.";
