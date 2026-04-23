"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

/** AWS brand orange — Simple Icons dropped the main AWS mark in recent versions. */
const AWS_ORANGE = "#FF9900";

type AwsSkillIconProps = {
  size?: number;
  className?: string;
  animated?: boolean;
};

export function AwsSkillIcon({
  size = 16,
  className,
  animated = true,
}: AwsSkillIconProps) {
  const reduce = useReducedMotion();

  const svg = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="shrink-0 overflow-visible"
      aria-hidden
    >
      <path
        fill={AWS_ORANGE}
        d="M6.75 10.2c0 1.05.12 1.95.33 2.88.09.39.48.66.87.57a.68.68 0 0 0 .48-.84c-.18-.81-.27-1.65-.27-2.52 0-2.52 1.38-3.84 3.36-3.84 1.74 0 2.79 1.11 2.79 2.91 0 1.89-.87 3.18-2.13 3.18-.87 0-1.47-.69-1.26-1.56.24-1.02.69-2.13.69-2.88 0-.66-.36-1.2-1.11-1.2-.87 0-1.56.9-1.56 2.1 0 .75.24 1.59.36 2.16.12.63-.27 1.17-.9 1.17-1.05 0-1.89-1.14-1.89-2.97 0-2.79 1.47-4.77 4.17-4.77 2.19 0 3.78 1.56 3.78 3.87 0 2.52-1.59 4.35-3.96 4.35-1.23 0-2.28-.63-2.67-1.38l-.72 2.58c-.27.96-1.02 2.16-1.5 2.88a.68.68 0 0 0 .03.75c.21.3.63.39.96.21 1.26-.66 2.22-2.01 2.91-3.84l1.38-4.05c.42.75 1.59 1.38 2.85 1.38 2.82 0 4.86-2.55 4.86-5.82 0-2.97-2.37-5.25-5.46-5.25-3.36 0-5.82 2.52-5.82 6.21Z"
      />
    </svg>
  );

  if (!animated || reduce) {
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
