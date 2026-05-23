"use client";

import {
  siAppwrite,
  siClerk,
  siDjango,
  siExpo,
  siExpress,
  siGsap,
  siMongodb,
  siMongoose,
  siPostgresql,
  siReactrouter,
  siRedux,
  siTailwindcss,
  siTanstack,
  siThemoviedatabase,
  siVite,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { Globe, LayoutGrid, Shield, type LucideIcon } from "lucide-react";
import { BrandNextjsIcon } from "@/components/ui/brand-nextjs-icon";
import { BrandReactIcon } from "@/components/ui/brand-react-icon";
import { NodejsIcon } from "@/components/ui/nodejs-icon";
import { TypescriptIcon } from "@/components/ui/typescript-icon";
import { MotionDevIcon } from "@/components/ui/skill-icons/motion-dev-icon";
import { SimpleBrandIcon } from "@/components/ui/skill-icons/simple-brand-icon";
import { cn } from "@/lib/utils";

type IconEntry =
  | { kind: "shadcn"; variant: "ts" | "react" | "next" | "node" }
  | { kind: "simple"; icon: SimpleIcon }
  | { kind: "motion" }
  | { kind: "lucide"; Icon: LucideIcon };

/** Strip trailing version tokens (e.g. "React 19" → "react"). */
function stackLookupKey(label: string): string {
  return label
    .toLowerCase()
    .trim()
    .replace(/\s+v?\d+(\.\d+)*$/i, "")
    .trim();
}

const stackIconByKey: Record<string, IconEntry> = {
  react: { kind: "shadcn", variant: "react" },
  "next.js": { kind: "shadcn", variant: "next" },
  typescript: { kind: "shadcn", variant: "ts" },
  "node.js": { kind: "shadcn", variant: "node" },
  django: { kind: "simple", icon: siDjango },
  postgresql: { kind: "simple", icon: siPostgresql },
  mongodb: { kind: "simple", icon: siMongodb },
  motion: { kind: "motion" },
  gsap: { kind: "simple", icon: siGsap },
  "tailwind css": { kind: "simple", icon: siTailwindcss },
  "locomotive scroll": { kind: "lucide", Icon: LayoutGrid },
  vite: { kind: "simple", icon: siVite },
  "react router": { kind: "simple", icon: siReactrouter },
  "redux toolkit": { kind: "simple", icon: siRedux },
  "rtk query": { kind: "simple", icon: siRedux },
  express: { kind: "simple", icon: siExpress },
  mongoose: { kind: "simple", icon: siMongoose },
  bcryptjs: { kind: "lucide", Icon: Shield },
  rest: { kind: "lucide", Icon: Globe },
  expo: { kind: "simple", icon: siExpo },
  "react native": { kind: "shadcn", variant: "react" },
  "expo router": { kind: "simple", icon: siReactrouter },
  "tanstack query": { kind: "simple", icon: siTanstack },
  tmdb: { kind: "simple", icon: siThemoviedatabase },
  clerk: { kind: "simple", icon: siClerk },
  appwrite: { kind: "simple", icon: siAppwrite },
  eas: { kind: "simple", icon: siExpo },
};

function resolveStackEntry(label: string): IconEntry {
  const k = stackLookupKey(label);
  return stackIconByKey[k] ?? stackIconByKey[label.toLowerCase().trim()] ?? { kind: "lucide", Icon: LayoutGrid };
}

function StackGlyph({
  label,
  size = 16,
  className,
}: {
  label: string;
  size?: number;
  className?: string;
}) {
  const entry = resolveStackEntry(label);

  if (entry.kind === "shadcn") {
    const common = { size, className, animated: false as const };
    if (entry.variant === "ts") return <TypescriptIcon {...common} />;
    if (entry.variant === "react") return <BrandReactIcon {...common} />;
    if (entry.variant === "next") return <BrandNextjsIcon {...common} />;
    return <NodejsIcon {...common} />;
  }
  if (entry.kind === "motion") {
    return <MotionDevIcon size={size} className={className} animated={false} />;
  }
  if (entry.kind === "lucide") {
    const Icon = entry.Icon;
    return (
      <Icon
        size={size}
        className={cn("shrink-0 text-foreground/70", className)}
        aria-hidden
        strokeWidth={1.75}
      />
    );
  }
  return (
    <SimpleBrandIcon
      icon={entry.icon}
      size={size}
      className={className}
      animated={false}
    />
  );
}

export function ProjectStack({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="mt-2 flex flex-wrap gap-2 text-sm text-foreground/75">
      {stack.map((s) => (
        <li
          key={s}
          className="inline-flex items-center gap-2 rounded-md border border-foreground/10 bg-foreground/[0.03] py-0.5 pl-2 pr-2.5"
        >
          <StackGlyph label={s} size={16} className="shrink-0" />
          <span className="font-medium text-foreground/85">{s}</span>
        </li>
      ))}
    </ul>
  );
}
