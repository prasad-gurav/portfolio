export type ProjectCategory = "mobile" | "web";

export type ProjectGalleryItem = { src: string; alt: string; caption?: string };

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
	/** Extra figures on case study detail (beyond hero cover). */
	caseStudyGallery?: readonly ProjectGalleryItem[];
	/** Detail page */
	role: string;
	stack: string[];
	overview: string;
	highlights: string[];
	links: { label: string; href: string }[];
};

export const projects = [
	{
		slug: "bewatcher",
		category: "web" as const,
		title: "BeWatcher",
		shortDescription:
			"End-to-end movie tickets: discovery, real-time seat holds, and booking.",
		liveUrl: "https://bewatcher-movie-ticket-booking.vercel.app/",
		imageSrc: "/projects/bewatcher-movie-detail.png",
		imageAlt:
			"BeWatcher now showing grid — posters with ratings, titles, and top navigation",
		caseStudyGallery: [
			{
				src: "/projects/bewatcher-now-showing.png",
				alt: "BeWatcher movie detail with poster, synopsis, metadata, and book tickets",
				caption:
					"Film detail: hero backdrop, synopsis, genres, runtime, ratings, and primary booking actions.",
			},
			{
				src: "/projects/bewatcher-showtimes.png",
				alt: "BeWatcher cinema selection with dates, filters, cinema cards, and showtime chips",
				caption:
					"Showtimes: city and date pivots, venue list with amenities, and slot-level availability cues.",
			},
			{
				src: "/projects/bewatcher-seat-selection.png",
				alt: "BeWatcher auditorium map with tiers, legend, summary bar, and pay CTA",
				caption:
					"Seat map: row layout, tiered pricing, legend for sold/available/selected, and checkout summary.",
			},
		],
		role: "Solo · full-stack",
		stack: ["Next.js", "MongoDB", "TypeScript", "Motion", "REST"],
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
		liveUrl: "https://www.wexeninterior.com/",
		imageSrc: "/projects/wexen-interior-hero.png",
		imageAlt:
			"Wexen Interior hero — teal interior scene, navigation, and Crafting Your Unique Interior Design headline",
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
	{
		slug: "neoedge",
		category: "web" as const,
		title: "Neoedge",
		shortDescription:
			"Multi-account money movement demo: MongoDB transactions, balanced double-entry postings, idempotent transfers, and a React 19 + RTK Query dashboard.",
		liveUrl: "https://neoedge.vercel.app/",
		imageSrc: "/projects/neoedge-login.png",
		imageAlt:
			"Neoedge sign-in screen with split-layout branding and authenticated dashboard entry",
		caseStudyGallery: [
			{
				src: "/projects/neoedge-accounts.png",
				alt: "Neoedge Accounts view with sidebar, multi-currency account cards, and open-account form",
				caption:
					"Accounts: ledger-derived balances, per-user uniqueness on (userId, currency, accountType), and open-account flow against the REST API.",
			},
		],
		role: "Solo · full-stack",
		stack: [
			"React 19",
			"Vite 8",
			"TypeScript",
			"React Router 7",
			"Redux Toolkit",
			"RTK Query",
			"Express 5",
			"Mongoose 9",
			"MongoDB",
			"bcryptjs",
		],
		overview:
			"Neoedge models bank-style correctness in a compact stack: money never updates as balance += amount. Every movement posts paired debit/credit lines under a journalId with a service-layer invariant so debits net to credits (minor-unit arithmetic, validated before insert). Balances aggregate those signed postings. Peer transfers and treasury funding both run inside MongoDB multi-document sessions (withTransaction) so ledger rows, transaction state, and idempotency decisions commit or roll back together. The SPA uses RTK Query with tag-based invalidation so successful transfers reconcile accounts, histories, and entry lists client-side.",
		highlights: [
			"Idempotent transfer handler: lookup by unique idempotencyKey inside the DB transaction and replay identical HTTP semantics on retry—standard pattern against at-least-once retries.",
			"Explicit failure bookkeeping: rejects like insufficient funds finalize the transaction row as FAILED with a structured reason rather than emitting partial journals.",
			"API surface hardened with versioned /api/v1 routers, capped JSON payloads, correlated request IDs on success and structured AppError payloads, duplicate-key → 409, CORS pinned to configured origins, and health reporting DB readiness.",
			"Operational domain guards: transfers require same currency, both accounts ACTIVE, distinct legs, positive minor-unit amounts; admin treasury debits treasury and credits the user through the same double-entry pathway.",
			"Portfolio note: SPA session is persisted client-side suitable for demos; production would migrate to HttpOnly/JWT/session rotation/CSRF and tighter authZ attestations.",
		],
		links: [],
	},
] as const satisfies readonly Project[];

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug) as Project | undefined;
}

export function getProjectsByCategory(
	category: ProjectCategory | "all",
): Project[] {
	if (category === "all") return [...projects];
	return projects.filter((p) => p.category === category) as Project[];
}
