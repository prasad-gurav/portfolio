import Image from "next/image";
import type { ProjectGalleryItem } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectGallery({
  items,
  className,
}: {
  items: readonly ProjectGalleryItem[];
  className?: string;
}) {
  if (items.length === 0) return null;

  return (
    <div className={cn("mt-10", className)}>
      <h2 className="text-sm font-semibold text-foreground">Interface</h2>
      <ul className="mt-4 space-y-8">
        {items.map((fig, idx) => (
          <li key={`${fig.src}-${idx}`} className="space-y-2">
            <figure className="overflow-hidden rounded-xl border border-foreground/10 bg-foreground/[0.02] ring-1 ring-foreground/5">
              <Image
                src={fig.src}
                alt={fig.alt}
                width={1200}
                height={756}
                className="h-auto w-full object-cover object-top"
                sizes="(max-width: 768px) 100vw, 42rem"
              />
              {fig.caption ? (
                <figcaption className="border-t border-foreground/10 px-4 py-3 text-xs leading-relaxed text-foreground/55">
                  {fig.caption}
                </figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}
