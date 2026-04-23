import { cn } from "@/lib/utils";
import type { ComponentType, SVGProps } from "react";

type LucideLike = ComponentType<SVGProps<SVGSVGElement> & { size?: number }>;

type IconProps = SVGProps<SVGSVGElement> & {
  icon: LucideLike;
  size?: number;
};

/**
 * Composes any Lucide (or similar) icon with shared sizing. Aligns with shadcn/ui + Lucide usage.
 * You can also run `npx shadcn@latest add icon` to sync the upstream registry file when it changes.
 */
export function Icon({ icon: Comp, className, size = 16, ...rest }: IconProps) {
  return <Comp className={cn("shrink-0", className)} size={size} {...rest} />;
}
