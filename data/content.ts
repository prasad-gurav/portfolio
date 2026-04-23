export const profile = {
	name: "Prasad Gurav",
	title: "Product & frontend engineer",
	tagline: "Shipping polished web products .",
	/** Renders the “from → to” line with a Motion-animated bridge in the hero. */
	journey: {
		from: "from idea",
		to: "production",
	} as const,
	avatarInitials: "PG",
	bio: [
		"Clean, consumer-facing web experiences with care for performance and a11y.",
		"Product-minded: discovery, spec, and iteration with design and backend partners.",
		"Stack-agnostic, deep on TypeScript, React, and the modern full stack.",
	],
} as const;

export const ossPartners = [
	{ name: "Open Source", hint: "Your contributions" },
	{ name: "Ecosystem", hint: "Docs & issues" },
	{ name: "Community", hint: "Talks & PRs" },
] as const;

export const skills = [
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Tailwind CSS",
	"GraphQL",
	"PostgreSQL",
	"Redis",
	"Docker",
	"AWS",
	"Git",
	"Figma",
	"Framer",
	"Motion",
	"GSAP",
] as const;

export const work = [
	{
		company: "Product Studio",
		role: "Senior Product Engineer",
		range: "2024 – Present",
		blurb:
			"End-to-end ownership of new surfaces, from UX polish to API contracts and analytics.",
	},
	{
		company: "SaaS Startup",
		role: "Frontend Lead",
		range: "2021 – 2024",
		blurb:
			"Design systems, app performance, and mentoring — launched core revenue features.",
	},
] as const;

export const projectShowcase = {
	mobile: {
		label: "Mobile & native-adjacent",
		detail:
			"Shipped responsive apps and worked closely with iOS and Android when needed.",
	},
	web: {
		label: "Web & design systems",
		detail:
			"Complex dashboards, marketing sites, and token-driven UI with tight motion specs.",
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
		school: "Your University",
		program: "B.Tech, Computer Science",
		range: "20XX – 20XX",
	},
	{
		school: "High School",
		program: "Science",
		range: "20XX – 20XX",
	},
] as const;

export const contact = {
	email: "hello@dev.psgurav",
	x: "https://x.com",
	linkedin: "https://www.linkedin.com",
	github: "https://github.com",
	/** Replace with `https://wa.me/<number>` for a direct chat link. */
	whatsapp: "https://wa.me/",
	facebook: "https://www.facebook.com",
	instagram: "https://www.instagram.com",
} as const;

export const quote = "Stay curious, stay kind.";
