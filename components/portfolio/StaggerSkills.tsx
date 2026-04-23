"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap-setup";
import { motion } from "motion/react";
import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout";
import { skills } from "@/data/content";
import { SkillPillIcon } from "@/components/ui/skill-icons/skill-pill-icon";

type Skill = (typeof skills)[number];

export function StaggerSkills({ items }: { items: readonly Skill[] }) {
  const root = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const el = root.current;
    if (!el) return;

    const pills = gsap.utils.toArray<HTMLElement>(el.querySelectorAll("[data-skill]"));

    const ctx = gsap.context(() => {
      gsap.fromTo(
        pills,
        { autoAlpha: 0, y: 14, scale: 0.96 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          stagger: 0.035,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [items.length]);

  return (
    <div
      ref={root}
      className="flex flex-wrap gap-2.5"
      aria-label="Skills and technologies"
    >
      {items.map((s) => (
        <motion.span
          data-skill
          key={s}
          className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] px-3.5 py-1.5 text-sm text-foreground/90 shadow-sm backdrop-blur-sm transition-colors"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <SkillPillIcon name={s} size={16} />
          {s}
        </motion.span>
      ))}
    </div>
  );
}
