"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { gsap } from "@/lib/gsap-setup";
import { useIsomorphicLayoutEffect } from "@/lib/use-isomorphic-layout";

type ScrollSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Slightly more aggressive reveal for dense blocks */
  variant?: "default" | "tight";
};

export function ScrollSection({
  children,
  className = "",
  id,
  variant = "default",
}: ScrollSectionProps) {
  const ref = useRef<HTMLElement | null>(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const y = variant === "tight" ? 32 : 56;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            end: "bottom 8%",
            toggleActions: "play none none none",
            fastScrollEnd: true,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [variant]);

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
}
