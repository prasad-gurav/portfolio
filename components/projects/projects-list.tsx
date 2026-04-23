"use client";

import {
  getProjectsByCategory,
  type ProjectCategory,
} from "@/data/projects";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "./project-card";

function normalizeCategory(value: string | null): ProjectCategory | "all" {
  if (value === "mobile" || value === "web") return value;
  return "all";
}

const tabs: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
];

export function ProjectsList() {
  const search = useSearchParams();
  const category = useMemo(
    () => normalizeCategory(search.get("category")),
    [search]
  );
  const list = useMemo(
    () => getProjectsByCategory(category),
    [category]
  );

  const hrefFor = useCallback((id: (typeof tabs)[number]["id"]) => {
    if (id === "all") return "/projects";
    return `/projects?category=${id}`;
  }, []);

  return (
    <div className="relative z-10 mx-auto max-w-2xl px-5 pb-36 pt-16 sm:px-6 md:pt-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
        Builds
      </p>
      <h1 className="mt-1.5 text-balance font-heading text-2xl font-bold tracking-[-0.02em] text-foreground md:text-3xl">
        Projects
      </h1>
      <p className="mt-2 max-w-prose text-sm leading-relaxed text-foreground/70">
        Case studies and shipped work. Open a card for the full write-up; some entries include
        a public link when available.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-2">
        {tabs.map((t) => {
          const active = t.id === category;
          return (
            <Link
              key={t.id}
              href={hrefFor(t.id)}
              scroll={false}
              className={[
                "inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-medium transition",
                active
                  ? "border-emerald-500/40 bg-emerald-500/10 text-foreground"
                  : "border-foreground/10 bg-foreground/[0.02] text-foreground/70 hover:border-foreground/20",
              ].join(" ")}
            >
              {t.label}
            </Link>
          );
        })}
      </div>

      <div className="mt-3">
        <Link
          href="/#proof"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/55 transition hover:text-foreground/85"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to proof of work
        </Link>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {list.map((p, i) => (
          <ProjectCard
            key={p.slug}
            project={p}
            transitionDelay={i * 0.05}
          />
        ))}
      </div>

      {list.length === 0 && (
        <p className="mt-8 text-sm text-foreground/55">No projects in this view yet.</p>
      )}
    </div>
  );
}
