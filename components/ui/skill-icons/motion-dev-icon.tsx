"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type MotionDevIconProps = {
  size?: number;
  className?: string;
  animated?: boolean;
};

/**
 * Custom glyph inspired by motion (motion.dev) — gradient orbits with Motion on hover.
 */
export function MotionDevIcon({
  size = 16,
  className,
  animated = true,
}: MotionDevIconProps) {
  const reduce = useReducedMotion();
  const s = size;
  const id = useId();
  const gid = `mdev-grad-${id.replace(/[:]/g, "")}`;
  const gUrl = `url(#${gid})`;

  const svg = (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      className="shrink-0 overflow-visible"
      aria-hidden
    >
      <defs>
        <linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="55%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <g>
        <circle cx="12" cy="8" r="3" fill={gUrl} />
        <circle cx="7" cy="16" r="2.5" fill={gUrl} />
        <circle cx="17" cy="16" r="2.5" fill={gUrl} />
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke={gUrl}
          strokeWidth="0.5"
          strokeOpacity={0.25}
        />
      </g>
    </svg>
  );

  if (!animated || reduce) {
    return <span className={cn("inline-flex", className)}>{svg}</span>;
  }

  return (
    <motion.span
      className={cn("inline-flex shrink-0", className)}
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: "spring", stiffness: 400, damping: 18 }}
    >
      {svg}
    </motion.span>
  );
}
