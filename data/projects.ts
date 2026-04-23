export type ProjectCategory = "mobile" | "web";

export type Project = {
  slug: string;
  category: ProjectCategory;
  title: string;
  /** Shown on list tiles */
  shortDescription: string;
  /** Optional: public URL for “open live” on cards and detail. */
  liveUrl?: string;
  imageSrc?: string;
  imageAlt: string;
  /** Detail page */
  role: string;
  stack: string[];
  overview: string;
  highlights: string[];
  links: { label: string; href: string }[];
};

export const projects = [
  {
    slug: "mirana-toys-app",
    category: "mobile" as const,
    title: "Mirana Toys",
    shortDescription:
      "Level map, rewards, and support tooling for a consumer play app at scale (50k+ actives).",
    liveUrl: "https://miranatoys.com",
    imageAlt: "Mirana Toys app preview",
    role: "Software Developer · full-stack and product support",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Django",
      "PostgreSQL",
    ],
    overview:
      "At Mirana Innovation I contributed to the consumer Mirana Toys experience and internal tooling. The Level Map module automates reward allocation and user progression, while the support panel centralises end-user issues for the team.",
    highlights: [
      "Engineered the Level Map backend to automate reward allocation and manage user level progression for 50k+ active app users.",
      "Partnered with product on flows that stay reliable under real usage and can evolve with new promos and campaigns.",
    ],
    links: [
      { label: "miranatoys.com", href: "https://miranatoys.com" },
    ],
  },
  {
    slug: "bewatcher",
    category: "web" as const,
    title: "BeWatcher",
    shortDescription:
      "End-to-end movie tickets: discovery, real-time seat holds, and booking.",
    imageAlt: "BeWatcher — movie tickets",
    role: "Solo · full-stack",
    stack: [
      "Next.js",
      "MongoDB",
      "TypeScript",
      "Motion",
      "REST",
    ],
    overview:
      "A full movie ticket experience from browsing to seat selection and purchase. Emphasis on clear flows, responsive UI, and up-to-date seat state so the buying path feels simple under load.",
    highlights: [
      "Built the full product surface: showtimes, seat maps, and checkout.",
      "Implemented real-time-style seat availability so customers always see the latest holds.",
    ],
    links: [],
  },
  {
    slug: "wexen-interior",
    category: "web" as const,
    title: "Wexen Interior",
    shortDescription:
      "Scroll-driven marketing site for an interior design studio — motion and lead conversion.",
    imageAlt: "Wexen Interior marketing site",
    role: "Freelance · frontend",
    stack: ["Next.js", "GSAP", "Tailwind CSS", "Locomotive Scroll"],
    overview:
      "A high-fidelity studio portfolio: scroll-driven storytelling, parallax, and crisp visuals. Tuned for fast loads on mobile and a calm path to inquiry.",
    highlights: [
      "Parallax and scroll choreography with GSAP and Locomotive-style motion.",
      "Image and font handling tuned to keep LCP and interaction latency in check for conversion.",
    ],
    links: [],
  },
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug) as Project | undefined;
}

export function getProjectsByCategory(category: ProjectCategory | "all"): Project[] {
  if (category === "all") return [...projects];
  return projects.filter((p) => p.category === category) as Project[];
}
