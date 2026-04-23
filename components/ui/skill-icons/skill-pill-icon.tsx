"use client";

import {
  siDjango,
  siDocker,
  siExpress,
  siFigma,
  siGit,
  siGsap,
  siJenkins,
  siJira,
  siJavascript,
  siLinux,
  siMongodb,
  siPostgresql,
  siPython,
  siRedux,
  siTailwindcss,
  siThreedotjs,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import type { skills } from "@/data/content";
import { BrandNextjsIcon } from "@/components/ui/brand-nextjs-icon";
import { BrandReactIcon } from "@/components/ui/brand-react-icon";
import { NodejsIcon } from "@/components/ui/nodejs-icon";
import { TypescriptIcon } from "@/components/ui/typescript-icon";
import { AwsSkillIcon } from "./aws-skill-icon";
import { MotionDevIcon } from "./motion-dev-icon";
import { SimpleBrandIcon } from "./simple-brand-icon";

type SkillName = (typeof skills)[number];

const brandBySkill: Record<
  SkillName,
  | { kind: "shadcn"; variant: "ts" | "react" | "next" | "node" }
  | { kind: "simple"; icon: SimpleIcon }
  | { kind: "motion" }
  | { kind: "aws" }
> = {
  JavaScript: { kind: "simple", icon: siJavascript },
  TypeScript: { kind: "shadcn", variant: "ts" },
  React: { kind: "shadcn", variant: "react" },
  "Next.js": { kind: "shadcn", variant: "next" },
  "Tailwind CSS": { kind: "simple", icon: siTailwindcss },
  Redux: { kind: "simple", icon: siRedux },
  Motion: { kind: "motion" },
  GSAP: { kind: "simple", icon: siGsap },
  "Three.js": { kind: "simple", icon: siThreedotjs },
  "Node.js": { kind: "shadcn", variant: "node" },
  Express: { kind: "simple", icon: siExpress },
  Python: { kind: "simple", icon: siPython },
  Django: { kind: "simple", icon: siDjango },
  PostgreSQL: { kind: "simple", icon: siPostgresql },
  MongoDB: { kind: "simple", icon: siMongodb },
  Git: { kind: "simple", icon: siGit },
  Docker: { kind: "simple", icon: siDocker },
  AWS: { kind: "aws" },
  Jenkins: { kind: "simple", icon: siJenkins },
  Linux: { kind: "simple", icon: siLinux },
  Jira: { kind: "simple", icon: siJira },
  Figma: { kind: "simple", icon: siFigma },
};

export function SkillPillIcon({
  name,
  size = 16,
}: {
  name: SkillName;
  size?: number;
}) {
  const entry = brandBySkill[name];
  if (entry.kind === "shadcn") {
    if (entry.variant === "ts") return <TypescriptIcon size={size} />;
    if (entry.variant === "react") return <BrandReactIcon size={size} />;
    if (entry.variant === "next") return <BrandNextjsIcon size={size} />;
    return <NodejsIcon size={size} />;
  }
  if (entry.kind === "motion") {
    return <MotionDevIcon size={size} />;
  }
  if (entry.kind === "aws") {
    return <AwsSkillIcon size={size} />;
  }
  return <SimpleBrandIcon icon={entry.icon} size={size} />;
}
