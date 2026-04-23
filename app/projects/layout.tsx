import { FloatingDock } from "@/components/portfolio/FloatingDock";
import { contact, profile } from "@/data/content";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      id="top"
      className="relative min-h-screen bg-background text-foreground selection:bg-emerald-500/20"
    >
      <div
        className="pointer-events-none fixed inset-0 grid-bg opacity-[0.65] dark:opacity-40"
        aria-hidden
      />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-40 bg-gradient-to-b from-background via-background/80 to-transparent dark:from-background" />
      {children}
      <footer className="relative z-10 border-t border-foreground/10 py-6 text-center text-xs text-foreground/45">
        {profile.name} · {new Date().getFullYear()} · {contact.website}
      </footer>
      <FloatingDock />
    </div>
  );
}
