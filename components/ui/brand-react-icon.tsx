"use client";

import { siReact } from "simple-icons";
import {
  SimpleBrandIcon,
  type SimpleBrandIconProps,
} from "@/components/ui/skill-icons/simple-brand-icon";

export type BrandReactIconProps = Omit<SimpleBrandIconProps, "icon">;

export function BrandReactIcon(props: BrandReactIconProps) {
  return <SimpleBrandIcon icon={siReact} {...props} />;
}
