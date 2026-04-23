"use client";

import { siNodedotjs } from "simple-icons";
import {
  SimpleBrandIcon,
  type SimpleBrandIconProps,
} from "@/components/ui/skill-icons/simple-brand-icon";

export type NodejsIconProps = Omit<SimpleBrandIconProps, "icon">;

export function NodejsIcon(props: NodejsIconProps) {
  return <SimpleBrandIcon icon={siNodedotjs} {...props} />;
}
