import Image from "next/image";
import { cn } from "@/lib/utils";
import { hashStringToHue } from "./project-hue";

export function ProjectCover({
  title,
  imageSrc,
  imageAlt,
  className,
  variant = "default",
  mobileLayout = "hero",
}: {
  title: string;
  imageSrc?: string;
  imageAlt: string;
  className?: string;
  variant?: "default" | "mobile";
  /** Compact phone frame for horizontal list cards. */
  mobileLayout?: "hero" | "inline";
}) {
  if (imageSrc) {
    if (variant === "mobile") {
      const isInline = mobileLayout === "inline";

      return (
        <div
          className={cn(
            "flex shrink-0 items-center justify-center bg-foreground/[0.02]",
            isInline ? "px-3 py-4" : "justify-center rounded-xl py-6",
            className,
          )}
        >
          <div
            className={cn(
              "overflow-hidden rounded-[1.1rem] border border-foreground/12 bg-black/80 p-1 shadow-sm ring-1 ring-foreground/5",
              isInline ? "w-[88px]" : "w-full max-w-[180px] p-1.5 sm:max-w-[200px] rounded-[1.25rem]",
            )}
          >
            <div className={cn("overflow-hidden bg-black", isInline ? "rounded-[0.8rem]" : "rounded-[1rem]")}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={720}
                height={1544}
                className="h-auto w-full object-contain object-top"
                sizes={isInline ? "88px" : "(max-width: 768px) 45vw, 200px"}
              />
            </div>
          </div>
        </div>
      );
    }

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
