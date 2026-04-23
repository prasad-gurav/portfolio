"use client";

import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCover } from "./project-cover";

export function ProjectCard({
  project,
  className,
  transitionDelay = 0,
}: {
  project: Project;
  className?: string;
  /** Stagger in seconds */
  transitionDelay?: number;
}) {
  const hasLive =
    project.liveUrl &&
    (project.liveUrl.startsWith("https://") || project.liveUrl.startsWith("http://"));

  return (
    <motion.article
      layout
      className={cn("group h-full", className)}
      initial={{ opacity: 0, y: 20, scale: 0.97, filter: "blur(3px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 32,
        delay: transitionDelay,
      }}
    >
      <div
        className={cn(
          "relative flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/[0.02] shadow-sm transition-[box-shadow,transform,background] duration-300",
          "hover:-translate-y-0.5 hover:border-foreground/15 hover:shadow-md"
        )}
      >
        <Link
          href={`/projects/${project.slug}`}
          className="absolute inset-0 z-0 block rounded-2xl"
          aria-label={`View ${project.title} case study`}
        />
        <div className="pointer-events-none relative z-10 flex h-full min-h-0 flex-1 flex-col">
          <ProjectCover
            title={project.title}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            className="shrink-0"
          />
          <div className="flex min-h-0 flex-1 flex-col gap-2 p-4">
            <h2 className="text-balance text-lg font-semibold tracking-tight text-foreground">
              {project.title}
            </h2>
            <p className="line-clamp-2 text-pretty text-sm leading-relaxed text-foreground/65">
              {project.shortDescription}
            </p>
            <div className="mt-auto flex items-center justify-between gap-2 pt-1">
              <span className="text-xs font-medium text-emerald-600/90 dark:text-emerald-400/90">
                View case study
              </span>
            </div>
          </div>
        </div>
        {hasLive && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-0.5 rounded-md border border-foreground/10 bg-background/80 px-2 py-1 text-xs font-medium text-foreground/85 shadow-sm backdrop-blur transition hover:bg-background"
          >
            Open live
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </div>
    </motion.article>
  );
}
