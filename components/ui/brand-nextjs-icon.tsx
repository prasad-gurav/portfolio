"use client";

import { siNextdotjs } from "simple-icons";
import {
  SimpleBrandIcon,
  type SimpleBrandIconProps,
} from "@/components/ui/skill-icons/simple-brand-icon";

export type BrandNextjsIconProps = Omit<SimpleBrandIconProps, "icon">;

export function BrandNextjsIcon(props: BrandNextjsIconProps) {
  return <SimpleBrandIcon icon={siNextdotjs} {...props} />;
}
