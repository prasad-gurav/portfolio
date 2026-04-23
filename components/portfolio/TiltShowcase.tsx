"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "motion/react";
import Link from "next/link";
import { type PointerEvent } from "react";

const spring = { stiffness: 280, damping: 30, mass: 0.4 };

function useTilt() {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, spring);
  const springY = useSpring(rotateY, spring);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rotateY.set(px * 18);
    rotateX.set(-py * 14);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const transform = useMotionTemplate`perspective(1100px) rotateX(${springX}deg) rotateY(${springY}deg)`;

  return { transform, onMove, onLeave };
}

const phoneFrame =
  "relative h-44 w-[6.75rem] rounded-[1.25rem] border sm:h-[12.5rem] sm:w-28 sm:rounded-[1.4rem]";

function LightPhoneStack() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-1.5 [transform:translateZ(40px)] sm:gap-2.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${phoneFrame} border-slate-200/90 bg-gradient-to-b from-white to-slate-100/95 shadow-md ring-1 ring-slate-200/50`}
          style={{ rotateZ: (i - 1) * 5 + 1.5 }}
          initial={false}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
        >
          <div className="absolute inset-2.5 rounded-xl bg-slate-50" />
          {/* status / notch */}
          <div className="absolute left-2.5 right-2.5 top-2.5 flex items-center justify-between">
            <span className="h-1.5 w-5 rounded-sm bg-slate-200/90" />
            <span className="h-1.5 w-8 rounded-full bg-slate-200/70" />
            <span className="h-1.5 w-4 rounded-sm bg-slate-200/80" />
          </div>
          {/* screen: list + media block */}
          <div className="absolute left-2.5 right-2.5 top-9 space-y-1.5">
            <div className="h-2.5 w-full rounded-md bg-slate-200/90" />
            <div className="h-1.5 w-11/12 rounded-full bg-slate-200" />
            <div className="h-1.5 w-4/5 rounded-full bg-slate-200/80" />
            <div className="h-9 w-full rounded-lg bg-slate-200/40" />
            <div className="h-1.5 w-full rounded-full bg-slate-200/70" />
            <div className="h-1.5 w-3/4 rounded-full bg-slate-200/60" />
          </div>
          {/* tab bar + home indicator */}
          <div className="absolute bottom-5 left-2.5 right-2.5 flex justify-center gap-1.5">
            <span className="h-1.5 w-4 rounded-sm bg-slate-300" />
            <span className="h-1.5 w-4 rounded-sm bg-slate-300" />
            <span className="h-1.5 w-4 rounded-sm bg-slate-300" />
            <span className="h-1.5 w-4 rounded-sm bg-slate-300" />
          </div>
          <div className="absolute bottom-2 left-1/2 h-1 w-9 -translate-x-1/2 rounded-full bg-slate-300/90" />
        </motion.div>
      ))}
    </div>
  );
}

function DarkPhoneStack() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-1.5 [transform:translateZ(40px)] sm:gap-2.5">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${phoneFrame} border-white/10 bg-gradient-to-b from-slate-800/90 to-slate-950 shadow-xl`}
          style={{ rotateZ: (i - 1) * 5 + 1.5 }}
          initial={false}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 360, damping: 24 }}
        >
          <div className="absolute inset-2.5 rounded-xl bg-slate-900/80" />
          <div className="absolute left-2.5 right-2.5 top-2.5 flex items-center justify-between">
            <span className="h-1.5 w-5 rounded-sm bg-white/12" />
            <span className="h-1.5 w-8 rounded-full bg-white/10" />
            <span className="h-1.5 w-4 rounded-sm bg-white/12" />
          </div>
          <div className="absolute left-2.5 right-2.5 top-9 space-y-1.5">
            <div className="h-2.5 w-full rounded-md bg-white/10" />
            <div className="h-1.5 w-11/12 rounded-full bg-white/10" />
            <div className="h-1.5 w-4/5 rounded-full bg-white/10" />
            <div className="h-9 w-full rounded-lg bg-white/10" />
            <div className="h-1.5 w-full rounded-full bg-white/10" />
            <div className="h-1.5 w-3/4 rounded-full bg-white/5" />
          </div>
          <div className="absolute bottom-5 left-2.5 right-2.5 flex justify-center gap-1.5">
            <span className="h-1.5 w-4 rounded-sm bg-white/12" />
            <span className="h-1.5 w-4 rounded-sm bg-white/12" />
            <span className="h-1.5 w-4 rounded-sm bg-white/12" />
            <span className="h-1.5 w-4 rounded-sm bg-white/12" />
          </div>
          <div className="absolute bottom-2 left-1/2 h-1 w-9 -translate-x-1/2 rounded-full bg-white/20" />
        </motion.div>
      ))}
    </div>
  );
}

function WindowStack() {
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-2 [transform:translateZ(40px)]">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="relative h-36 w-[7.5rem] rounded-lg border border-slate-300/80 bg-white shadow-lg"
          style={{ rotateZ: (i - 1) * 5 - 1 }}
          whileHover={{ y: -4, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
        >
          <div className="flex items-center gap-1.5 border-b border-slate-200/80 px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/90" />
          </div>
          <div className="space-y-2 p-2">
            <div className="h-1.5 rounded bg-slate-200" />
            <div className="h-1.5 w-4/5 rounded bg-slate-100" />
            <div className="h-16 rounded-md bg-gradient-to-br from-slate-100 to-slate-200/80" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function TiltShowcase({
  title,
  detail,
  surface,
  mockup,
  href,
}: {
  title: string;
  detail: string;
  /** Match the main page: light cards read as “day”; dark is a deliberate contrast tile. */
  surface: "light" | "dark";
  /** Phones: product / native framing; windows: web UI framing. */
  mockup: "phones" | "windows";
  /** When set, the whole card navigates to this route (e.g. filtered projects list). */
  href?: string;
}) {
  const { transform, onMove, onLeave } = useTilt();

  const isDark = surface === "dark";

  const cardShadow = isDark
    ? "shadow-[0_24px_80px_-32px_rgba(0,0,0,0.45)] hover:shadow-[0_32px_100px_-28px_rgba(0,0,0,0.5)]"
    : "shadow-[0_20px_60px_-24px_rgba(15,23,42,0.12)] hover:shadow-[0_24px_72px_-22px_rgba(15,23,42,0.16)]";

  const inner = (
    <motion.div
      className={`group relative block overflow-hidden rounded-2xl border border-foreground/10 p-6 transition-shadow duration-500 ${cardShadow} ${href ? "cursor-pointer" : ""}`}
      style={{ transformStyle: "preserve-3d", transform }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-60 transition-opacity duration-500 group-hover:opacity-80 ${
          isDark
            ? "bg-[radial-gradient(120%_80%_at_20%_0%,#1e293b_0%,#020617_55%,#000_100%)]"
            : "bg-[radial-gradient(120%_80%_at_80%_0%,#f8fafc_0%,#e2e8f0_45%,#cbd5e1_100%)]"
        }`}
      />
      <div className="relative z-10 flex min-h-[220px] flex-col justify-between gap-6 md:min-h-[260px]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/45">
            Proof of work
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
            {title}
          </h3>
          <p className="mt-2 max-w-prose text-sm leading-relaxed text-foreground/70">
            {detail}
          </p>
        </div>

        <div
          className={`relative mt-4 select-none ${
            mockup === "phones" ? "h-44 sm:h-[12.5rem]" : "h-32 md:h-40"
          }`}
        >
          {mockup === "windows" && <WindowStack />}
          {mockup === "phones" && (isDark ? <DarkPhoneStack /> : <LightPhoneStack />)}
        </div>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="block rounded-2xl no-underline outline-offset-2 focus-visible:outline-2 focus-visible:outline-emerald-500/60"
        scroll
      >
        {inner}
      </Link>
    );
  }

  return inner;
}
