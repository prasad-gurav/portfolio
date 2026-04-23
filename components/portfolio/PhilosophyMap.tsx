"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-setup";
import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout";
import { roles } from "@/data/content";
import { motion } from "motion/react";

const center = { x: 180, y: 48 };
const nodes: Record<string, { x: number; y: number }> = {
  design: { x: 32, y: 140 },
  app: { x: 180, y: 168 },
  full: { x: 328, y: 140 },
};

const pathD = (to: (typeof nodes)[keyof typeof nodes]) => {
  const c = 40;
  return `M ${center.x} ${center.y} C ${center.x} ${center.y + c}, ${to.x} ${to.y - c}, ${to.x} ${to.y}`;
};

export function PhilosophyMap() {
  const svgRef = useRef<SVGSVGElement>(null);

  useIsomorphicLayoutEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const paths = gsap.utils.toArray<SVGPathElement>(
      svg.querySelectorAll("path.line-path")
    );
    const ctx = gsap.context(() => {
      paths.forEach((path) => {
        const len = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: len,
          strokeDashoffset: len,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "power2.inOut",
          duration: 1.1,
          scrollTrigger: {
            trigger: svg,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        });
      });
    }, svg);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-8 rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-6">
      <svg
        ref={svgRef}
        viewBox="0 0 360 200"
        className="mx-auto w-full max-w-md overflow-visible"
        role="img"
        aria-label="How I work across roles as design engineer, app developer, and full-stack engineer"
      >
        {roles.map((r) => {
          const to = nodes[r.id as keyof typeof nodes];
          if (!to) return null;
          return (
            <path
              key={r.id}
              className="line-path text-foreground/25"
              d={pathD(to)}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          );
        })}

        <g>
          <rect
            x="108"
            y="16"
            width="144"
            height="64"
            rx="12"
            className="fill-foreground/5 stroke-foreground/15"
            strokeWidth="1"
          />
          <text
            x="180"
            y="44"
            textAnchor="middle"
            className="fill-foreground/80 text-[12px] font-medium"
            style={{ fontSize: 11 }}
          >
            I build my best work as
          </text>
        </g>

        {roles.map((r) => {
          const to = nodes[r.id as keyof typeof nodes];
          if (!to) return null;
          return (
            <g key={r.id}>
              <rect
                x={to.x - 64}
                y={to.y - 18}
                width="128"
                height="40"
                rx="999"
                className="fill-background stroke-foreground/15"
                strokeWidth="1"
              />
              <text
                x={to.x}
                y={to.y + 4}
                textAnchor="middle"
                className="fill-foreground/85"
                style={{ fontSize: 12 }}
              >
                {r.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div className="mt-4 flex flex-wrap justify-center gap-2 md:hidden" aria-hidden>
        {roles.map((r) => (
          <motion.span
            key={r.id}
            className="rounded-full border border-foreground/10 bg-foreground/[0.04] px-3 py-1 text-xs text-foreground/80"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 24 }}
          >
            {r.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
