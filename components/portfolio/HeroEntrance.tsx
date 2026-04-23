"use client";

import { profile } from "@/data/content";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { useMemo } from "react";

const springSoft = { type: "spring" as const, stiffness: 380, damping: 28, mass: 0.6 };

const easeOutBrand = [0.22, 1, 0.36, 1] as const;

function useHeroVariants(reduce: boolean) {
  return useMemo(() => {
    if (reduce) {
      return {
        section: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.04 },
          },
        } satisfies Variants,
        item: {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.2 } },
        } satisfies Variants,
        list: {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.08 },
          },
        } satisfies Variants,
        bioLine: {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.2 } },
        } satisfies Variants,
        avatar: {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.2 } },
        } satisfies Variants,
      };
    }
    return {
      section: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.1 },
        },
      } satisfies Variants,
      item: {
        hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.52, ease: easeOutBrand },
        },
      } satisfies Variants,
      list: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.08, delayChildren: 0.12 },
        },
      } satisfies Variants,
      bioLine: {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: easeOutBrand },
        },
      } satisfies Variants,
      avatar: {
        hidden: { opacity: 0, scale: 0.88, rotate: -5 },
        visible: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          transition: springSoft,
        },
      } satisfies Variants,
    };
  }, [reduce]);
}

function HeroJourneyLine({
  reduce,
  from,
  to,
}: {
  reduce: boolean;
  from: string;
  to: string;
}) {
  return (
    <div
      className="mt-0.5 flex min-h-9 w-full min-w-0 flex-wrap items-center gap-y-1.5 sm:min-h-8"
      aria-label={`${from} to ${to}`}
    >
      <span className="shrink-0 font-mono text-sm text-foreground/55 sm:text-base">{from}</span>
      <div className="mx-1 flex min-w-[2.5rem] flex-1 items-center gap-0.5 sm:mx-1.5 sm:min-w-[4rem]">
        <div className="h-px min-w-[1.5rem] flex-1 overflow-hidden rounded-full bg-foreground/5">
          <motion.div
            className="h-full w-full origin-left bg-gradient-to-r from-emerald-500/55 via-foreground/30 to-foreground/10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={
              reduce
                ? { duration: 0.15 }
                : { duration: 0.75, delay: 0.4, ease: easeOutBrand }
            }
          />
        </div>
        <motion.span
          className="shrink-0 text-foreground/40"
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={
            reduce
              ? { duration: 0.1 }
              : { delay: 0.85, duration: 0.4, ease: easeOutBrand }
          }
          aria-hidden
        >
          →
        </motion.span>
      </div>
      <span className="shrink-0 text-base text-foreground/90 sm:text-lg">{to}</span>
    </div>
  );
}

const textCol =
  "min-w-0 min-[500px]:col-start-2 w-full self-start";

export function HeroEntrance() {
  const reduce = useReducedMotion() ?? false;
  const v = useHeroVariants(reduce);

  return (
    <motion.div
      id="about"
      className="flex flex-col gap-8"
      initial="hidden"
      animate="visible"
      variants={v.section}
    >
      <div className="grid grid-cols-1 items-start gap-x-0 gap-y-5 min-[500px]:grid-cols-[6rem_1fr] min-[500px]:gap-x-10 min-[500px]:gap-y-0">
        <motion.div
          className="hero-avatar row-start-1 flex h-19 w-19 min-[500px]:col-start-1 min-[500px]:row-span-4 min-[500px]:row-start-1 min-[500px]:h-22 min-[500px]:w-22 shrink-0 items-center justify-center self-start rounded-2xl border border-foreground/10 bg-foreground/5 text-2xl font-semibold tracking-tight shadow-sm transition-shadow will-change-transform min-[500px]:text-3xl hover:border-foreground/20 hover:shadow-md dark:bg-foreground/6"
          variants={v.avatar}
          whileHover={reduce ? undefined : { scale: 1.04, rotate: -1.5 }}
          whileTap={reduce ? undefined : { scale: 0.98 }}
        >
          {profile.avatarInitials}
        </motion.div>

        <motion.p
          className={`hero-kicker ${textCol} min-[500px]:row-start-1 max-w-prose text-[0.7rem] font-mono font-medium uppercase leading-none tracking-[0.2em] text-foreground/45 sm:text-xs`}
          variants={v.item}
        >
          {profile.title}
        </motion.p>

        <motion.h1
          className={`${textCol} min-[500px]:row-start-2 text-balance text-3xl font-bold leading-[1.1] tracking-[-0.02em] sm:text-4xl md:text-[2.5rem]`}
          variants={v.item}
        >
          {profile.name}
        </motion.h1>

        <motion.p
          className={`${textCol} min-[500px]:row-start-3 max-w-prose text-pretty text-base leading-snug text-foreground/80 sm:text-lg`}
          variants={v.item}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className={`${textCol} min-[500px]:row-start-4 max-w-xl`}
          variants={v.item}
        >
          <HeroJourneyLine reduce={reduce} from={profile.journey.from} to={profile.journey.to} />
        </motion.div>
      </div>

      <motion.ul
        className="m-0 w-full list-none space-y-3.5 border-t border-foreground/5 pt-4 pl-0 text-[0.94rem] leading-relaxed text-foreground/80 min-[500px]:max-w-2xl"
        variants={v.list}
      >
        {profile.bio.map((line) => (
          <motion.li
            key={line}
            className="group hero-line -mx-1 flex cursor-default gap-3 rounded-r-md px-1 py-0.5 transition-colors hover:bg-foreground/3"
            variants={v.bioLine}
            whileHover={reduce ? undefined : { x: 3 }}
            transition={springSoft}
          >
            <span className="mt-[0.45rem] flex h-1.5 w-1.5 shrink-0 items-center justify-center">
              <span className="block h-1.5 w-1.5 scale-100 rounded-full bg-emerald-500/85 shadow-[0_0_0_1px] shadow-emerald-500/20 transition-transform duration-200 group-hover:scale-125" />
            </span>
            <span className="min-w-0 text-pretty">{line}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
