import { ProjectCover } from "@/components/projects/project-cover";
import { getProjectBySlug, projects, type ProjectCategory } from "@/data/projects";
import { contact, profile } from "@/data/content";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — Prasad Gurav`,
    description: project.shortDescription,
  };
}

function categoryPath(cat: ProjectCategory) {
  return cat === "mobile" ? "/projects?category=mobile" : "/projects?category=web";
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const hasLive =
    project.liveUrl &&
    (project.liveUrl.startsWith("https://") || project.liveUrl.startsWith("http://"));

  return (
    <article className="relative z-10 mx-auto max-w-2xl px-5 pb-36 pt-16 sm:px-6 md:pt-20">
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/40">
        {project.category === "mobile" ? "Mobile" : "Web"} · Case study
      </p>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="text-balance font-heading text-2xl font-bold tracking-[-0.02em] text-foreground sm:text-3xl">
          {project.title}
        </h1>
        {hasLive && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-foreground/10 bg-foreground/[0.03] px-3 py-1.5 text-sm font-medium text-foreground/85 transition hover:border-foreground/20"
          >
            Open live
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
      <p className="mt-2 text-sm text-foreground/55">{project.role}</p>

      <div className="mt-8">
        <ProjectCover
          title={project.title}
          imageSrc={project.imageSrc}
          imageAlt={project.imageAlt}
          className="ring-1 ring-foreground/5"
        />
      </div>

      <div className="mt-8 space-y-4 text-sm leading-relaxed text-foreground/80">
        <p>{project.overview}</p>
        <h2 className="pt-2 text-sm font-semibold text-foreground">Highlights</h2>
        <ul className="list-inside list-disc space-y-2 text-foreground/80">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-sm font-semibold text-foreground">Stack</h2>
        <ul className="mt-2 flex flex-wrap gap-2 text-sm text-foreground/75">
          {project.stack.map((s) => (
            <li
              key={s}
              className="rounded-md border border-foreground/10 bg-foreground/[0.03] px-2.5 py-0.5"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {project.links.length > 0 && (
        <div className="mt-8">
          <h2 className="text-sm font-semibold text-foreground">Links</h2>
          <ul className="mt-2 space-y-1.5 text-sm">
            {project.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-emerald-600 underline decoration-emerald-500/30 underline-offset-2 transition hover:decoration-emerald-500/50 dark:text-emerald-400"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-foreground/60">
        <Link
          href={categoryPath(project.category)}
          className="inline-flex items-center gap-1.5 font-medium text-foreground/80 transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          More in {project.category === "mobile" ? "Mobile" : "Web"}
        </Link>
        <span className="text-foreground/20">·</span>
        <Link
          href="/projects"
          className="font-medium text-foreground/80 transition hover:text-foreground"
        >
          All projects
        </Link>
        <span className="text-foreground/20">·</span>
        <Link
          href="/#proof"
          className="font-medium text-foreground/80 transition hover:text-foreground"
        >
          Home
        </Link>
      </div>

      <p className="mt-8 text-sm text-foreground/45">
        {profile.name} · {contact.email}
      </p>
    </article>
  );
}
