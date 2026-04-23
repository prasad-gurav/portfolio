import Image from "next/image";
import { cn } from "@/lib/utils";
import { hashStringToHue } from "./project-hue";

export function ProjectCover({
  title,
  imageSrc,
  imageAlt,
  className,
}: {
  title: string;
  imageSrc?: string;
  imageAlt: string;
  className?: string;
}) {
  if (imageSrc) {
    return (
      <div
        className={cn("relative w-full overflow-hidden rounded-xl bg-foreground/5", className)}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={640}
          height={400}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    );
  }

  const hue = hashStringToHue(title);
  return (
    <div
      className={cn(
        "flex aspect-[16/10] w-full items-center justify-center rounded-xl text-2xl font-bold tracking-tight text-white/90 shadow-inner",
        className
      )}
      style={{
        background: `linear-gradient(135deg, oklch(0.35 0.12 ${hue}) 0%, oklch(0.22 0.06 ${hue}) 50%, oklch(0.16 0.04 ${(hue + 40) % 360}) 100%)`,
      }}
    >
      <span className="select-none">{(title.match(/\b\w/g) ?? [title[0]]).slice(0, 2).join("")}</span>
    </div>
  );
}
