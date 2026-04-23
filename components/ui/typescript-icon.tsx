"use client";

import { siTypescript } from "simple-icons";
import {
  SimpleBrandIcon,
  type SimpleBrandIconProps,
} from "@/components/ui/skill-icons/simple-brand-icon";

export type TypescriptIconProps = Omit<SimpleBrandIconProps, "icon">;

export function TypescriptIcon(props: TypescriptIconProps) {
  return <SimpleBrandIcon icon={siTypescript} {...props} />;
}
