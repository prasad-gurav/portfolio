"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SimpleIcon } from "simple-icons";
import { cn } from "@/lib/utils";

export type SimpleBrandIconProps = {
  icon: SimpleIcon;
  size?: number;
  className?: string;
  /** Extra class for the inner SVG (e.g. dark mode fix for black marks). */
  svgClassName?: string;
  animated?: boolean;
};

const needsDarkModeInvert = (hex: string) =>
  hex.toUpperCase() === "000000" || hex.toUpperCase() === "000";

export function SimpleBrandIcon({
  icon,
  size = 16,
  className,
  svgClassName,
  animated = true,
}: SimpleBrandIconProps) {
  const reduceMotion = useReducedMotion();
  const fill = `#${icon.hex}`;
  const invert = needsDarkModeInvert(icon.hex);

  const svg = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={cn(
        "shrink-0 overflow-visible",
        invert && "dark:invert",
        svgClassName
      )}
      aria-hidden
      focusable="false"
    >
      <path d={icon.path} fill={fill} />
    </svg>
  );

  if (!animated || reduceMotion) {
    return <span className={cn("inline-flex", className)}>{svg}</span>;
  }

  return (
    <motion.span
      className={cn("inline-flex shrink-0", className)}
      whileHover={{ y: -2, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 420, damping: 20 }}
    >
      {svg}
    </motion.span>
  );
}
