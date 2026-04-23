"use client";

import {
  contact,
  education,
  profile,
  projectShowcase,
  quote,
  skills,
  work
} from "@/data/content";
import { FloatingDock } from "./FloatingDock";
import { HeroEntrance } from "./HeroEntrance";
import { ScrollSection } from "./ScrollSection";
import { StaggerSkills } from "./StaggerSkills";
import { TiltShowcase } from "./TiltShowcase";

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="mb-7">
      {kicker && (
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
          {kicker}
        </p>
      )}
      <h2 className="mt-1.5 text-balance font-heading text-xl font-bold tracking-[-0.02em] text-foreground md:text-2xl">
        {title}
      </h2>
    </div>
  );
}

export function PortfolioPage() {
  return (
    <div
      id="top"
      className="relative min-h-screen bg-background text-foreground selection:bg-emerald-500/20"
    >
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-[0.65] dark:opacity-40" aria-hidden />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent dark:from-background" />

      <main className="relative z-10 mx-auto max-w-2xl px-5 pb-36 pt-16 sm:px-6 md:pt-24">
        <HeroEntrance />

        {/* <ScrollSection className="mt-24" id="oss">
          <SectionTitle kicker="Community" title="OSS & ecosystem" />
          <div className="flex flex-wrap items-center gap-6 md:gap-10">
            {ossPartners.map((p) => (
              <motion.div
                key={p.name}
                className="group flex min-w-[7rem] flex-col gap-1"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.03] text-sm font-semibold text-foreground/50 transition-colors group-hover:border-foreground/20 group-hover:text-foreground/80">
                  {p.name[0]}
                </div>
                <span className="text-sm font-medium text-foreground/85">{p.name}</span>
                <span className="text-xs text-foreground/45">{p.hint}</span>
              </motion.div>
            ))}
          </div>
        </ScrollSection> */}

        <ScrollSection className="mt-24" id="skills" variant="tight">
          <SectionTitle kicker="Stack" title="Skills & tools" />
          <StaggerSkills items={skills} />
        </ScrollSection>

        <ScrollSection className="mt-24" id="work">
          <SectionTitle kicker="Timeline" title="Work experience" />
          <ol className="space-y-8 border-l border-foreground/10 pl-6">
            {work.map((job) => (
              <li key={job.company} className="relative">
                <span className="absolute -left-[26px] top-1.5 h-2.5 w-2.5 rounded-full border border-background bg-foreground/25 shadow-[0_0_0_3px] shadow-background" />
                <p className="text-xs font-medium uppercase tracking-wider text-foreground/45">
                  {job.range}
                </p>
                <p className="mt-1 text-lg font-semibold">{job.company}</p>
                <p className="text-sm text-foreground/60">
                  {job.role}
                  {"location" in job && job.location ? ` · ${job.location}` : ""}
                </p>
                <ul className="mt-3 list-inside list-disc space-y-1.5 pl-0.5 text-sm leading-relaxed text-foreground/75">
                  {job.highlights.map((h) => (
                    <li key={h} className="pl-0">
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </ScrollSection>

        <ScrollSection className="mt-24" id="proof" variant="tight">
          <SectionTitle kicker="Builds" title="Proof of work" />
          <div className="grid gap-6">
            <TiltShowcase
              title={projectShowcase.mobile.label}
              detail={projectShowcase.mobile.detail}
              surface="light"
              mockup="phones"
              href={projectShowcase.mobile.href}
            />
            <TiltShowcase
              title={projectShowcase.web.label}
              detail={projectShowcase.web.detail}
              surface="light"
              mockup="windows"
              href={projectShowcase.web.href}
            />
          </div>
        </ScrollSection>

        {/* <ScrollSection className="mt-24" id="hacks" variant="tight">
          <SectionTitle kicker="Events" title="Hackathons" />
          <p className="text-sm text-foreground/70">
            I&apos;ve been a part of {hackathons.count}+ hackathons. {hackathons.subline}
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <motion.div
                key={i}
                className="aspect-[4/3] overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.06] to-foreground/[0.02] shadow-sm"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
              >
                <div className="flex h-full w-full items-end justify-center bg-[radial-gradient(90%_80%_at_30%_20%,#22c55e26,transparent_55%),repeating-linear-gradient(45deg,transparent,transparent_8px,oklch(0.5_0.02_250_/_0.04)_8px,oklch(0.5_0.02_250_/_0.04)_9px)] p-2">
                  <span className="mb-1 text-[10px] font-medium text-foreground/30">
                    {i + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollSection> */}

        {/* <ScrollSection className="mt-24" id="hire">
          <SectionTitle kicker="How I work" title="Hire & collaborate" />
          <p className="text-sm leading-relaxed text-foreground/75 md:text-base">
            {philosophy.intro}
          </p>
          <PhilosophyMap />
        </ScrollSection> */}

        <ScrollSection className="mt-24" id="edu" variant="tight">
          <SectionTitle kicker="Background" title="Education" />
          <ul className="space-y-5">
            {education.map((e) => (
              <li
                key={e.school}
                className="flex items-baseline justify-between gap-3 border-b border-foreground/10 pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">{e.school}</p>
                  <p className="text-sm text-foreground/60">{e.program}</p>
                </div>
                <p className="shrink-0 text-xs text-foreground/45">{e.range}</p>
              </li>
            ))}
          </ul>
        </ScrollSection>

        <ScrollSection className="mt-24" id="contact" variant="tight">
          <SectionTitle title="Get in touch" />
          <p className="text-sm leading-relaxed text-foreground/75">
            {contact.name} · {contact.phone} · Pune, MH
          </p>
          <p className="mt-3 text-sm text-foreground/75">
            <a
              className="font-medium text-foreground underline decoration-foreground/25 underline-offset-2 transition hover:decoration-foreground/50"
              href={`mailto:${contact.email}`}
            >
              {contact.email}
            </a>{" "}
            ·{" "}
            <a
              className="font-medium text-foreground underline decoration-foreground/25 underline-offset-2 transition hover:decoration-foreground/50"
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              className="font-medium text-foreground underline decoration-foreground/25 underline-offset-2 transition hover:decoration-foreground/50"
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              className="font-medium text-foreground underline decoration-foreground/25 underline-offset-2 transition hover:decoration-foreground/50"
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              psgurav.in
            </a>
            .
          </p>
          <p className="mt-4 text-sm italic text-foreground/55">&ldquo;{quote}&rdquo;</p>
        </ScrollSection>
      </main>

      <footer className="relative z-10 border-t border-foreground/10 py-6 text-center text-xs text-foreground/45">
        {profile.name} · {new Date().getFullYear()}
      </footer>

      <FloatingDock />
    </div>
  );
}
