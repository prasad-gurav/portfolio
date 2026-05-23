import type { ProjectVideo } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectVideoFigure({
	video,
	className,
}: {
	video: ProjectVideo;
	className?: string;
}) {
	return (
		<figure className={cn("mt-10", className)}>
			<h2 className="text-sm font-semibold text-foreground">Walkthrough</h2>
			<div className="mt-4 overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.02] ring-1 ring-foreground/5">
				<video
					src={video.src}
					autoPlay
					muted
					loop
					controls
					playsInline
					preload="auto"
					className="mx-auto h-auto max-h-[420px] w-full max-w-[240px] bg-black/40 object-contain sm:max-w-[280px]"
				/>
				{video.caption ? (
					<figcaption className="border-t border-foreground/10 px-4 py-3 text-xs leading-relaxed text-foreground/55">
						{video.caption}
					</figcaption>
				) : null}
			</div>
		</figure>
	);
}
