"use client";

import { Linkedin } from "lucide-react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

export const LinkedinIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  function LinkedinIcon(
    { size = 24, className, disableHover: _disable, ...rest },
    ref
  ) {
    useImperativeHandle(ref, () => ({
      startAnimation: () => undefined,
      stopAnimation: () => undefined,
    }));

    return (
      <Linkedin
        size={size}
        strokeWidth={1.75}
        className={className}
        aria-hidden
        {...rest}
      />
    );
  }
);
