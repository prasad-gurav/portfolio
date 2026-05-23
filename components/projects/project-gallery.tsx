import Image from "next/image";
import type { ProjectGalleryItem } from "@/data/projects";
import { cn } from "@/lib/utils";

function isPortrait(fig: ProjectGalleryItem) {
	const w = fig.width ?? 1200;
	const h = fig.height ?? 756;
	return h > w;
}

function ScreenTile({ fig }: { fig: ProjectGalleryItem }) {
	return (
		<figure className="flex h-full flex-col">
			<div className="w-full overflow-hidden rounded-[1.35rem] border border-foreground/12 bg-black/80 p-1.5 shadow-sm ring-1 ring-foreground/5">
				<div className="overflow-hidden rounded-[1.05rem] bg-black">
					<Image
						src={fig.src}
						alt={fig.alt}
						width={fig.width ?? 720}
						height={fig.height ?? 1544}
						className="h-auto w-full object-contain object-top"
						sizes="(max-width: 640px) 42vw, 300px"
					/>
				</div>
			</div>
			{fig.caption ? (
				<figcaption className="mt-3 text-xs leading-relaxed text-foreground/55">
					{fig.caption}
				</figcaption>
			) : null}
		</figure>
	);
}

function DiagramTile({ fig }: { fig: ProjectGalleryItem }) {
	return (
		<figure className="overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.02] ring-1 ring-foreground/5">
			<Image
				src={fig.src}
				alt={fig.alt}
				width={fig.width ?? 1200}
				height={fig.height ?? 756}
				className="h-auto w-full object-contain"
				sizes="(max-width: 768px) 100vw, 42rem"
			/>
			{fig.caption ? (
				<figcaption className="border-t border-foreground/10 px-4 py-3 text-xs leading-relaxed text-foreground/55">
					{fig.caption}
				</figcaption>
			) : null}
		</figure>
	);
}

export function ProjectGallery({
	items,
	className,
}: {
	items: readonly ProjectGalleryItem[];
	className?: string;
}) {
	if (items.length === 0) return null;

	const screens = items.filter(isPortrait);
	const diagrams = items.filter((fig) => !isPortrait(fig));

	return (
		<div className={cn("mt-10", className)}>
			<h2 className="text-sm font-semibold text-foreground">Interface</h2>

			{screens.length > 0 ? (
				<ul className="mt-4 grid grid-cols-2 gap-4 sm:gap-5">
					{screens.map((fig, idx) => (
						<li key={`${fig.src}-${idx}`}>
							<ScreenTile fig={fig} />
						</li>
					))}
				</ul>
			) : null}

			{diagrams.length > 0 ? (
				<ul
					className={cn(
						"space-y-6",
						screens.length > 0 ? "mt-8 border-t border-foreground/10 pt-8" : "mt-4",
					)}
				>
					{diagrams.map((fig, idx) => (
						<li key={`${fig.src}-${idx}`}>
							<DiagramTile fig={fig} />
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}
