import { ProjectsList } from "@/components/projects/projects-list";
import { Suspense } from "react";

export const metadata = {
  title: "Projects — Prasad Gurav",
  description: "Case studies: mobile, web, and full-stack work.",
};

function ProjectsLoading() {
  return (
    <div className="relative z-10 mx-auto max-w-2xl px-5 py-20 sm:px-6">
      <div className="h-6 w-40 animate-pulse rounded-md bg-foreground/10" />
      <div className="mt-4 h-10 w-2/3 animate-pulse rounded-md bg-foreground/10" />
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="aspect-[10/7] animate-pulse rounded-2xl bg-foreground/10" />
        <div className="aspect-[10/7] animate-pulse rounded-2xl bg-foreground/10" />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<ProjectsLoading />}>
      <ProjectsList />
    </Suspense>
  );
}
