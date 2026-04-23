"use client";

import {
  siDocker,
  siFigma,
  siFramer,
  siGit,
  siGraphql,
  siGsap,
  siPostgresql,
  siRedis,
  siTailwindcss,
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
  TypeScript: { kind: "shadcn", variant: "ts" },
  React: { kind: "shadcn", variant: "react" },
  "Next.js": { kind: "shadcn", variant: "next" },
  "Node.js": { kind: "shadcn", variant: "node" },
  "Tailwind CSS": { kind: "simple", icon: siTailwindcss },
  GraphQL: { kind: "simple", icon: siGraphql },
  PostgreSQL: { kind: "simple", icon: siPostgresql },
  Redis: { kind: "simple", icon: siRedis },
  Docker: { kind: "simple", icon: siDocker },
  AWS: { kind: "aws" },
  Git: { kind: "simple", icon: siGit },
  Figma: { kind: "simple", icon: siFigma },
  Framer: { kind: "simple", icon: siFramer },
  Motion: { kind: "motion" },
  GSAP: { kind: "simple", icon: siGsap },
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
