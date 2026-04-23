"use client";

import { Instagram } from "lucide-react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

export const InstagramIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  function InstagramIcon(
    { size = 24, className, disableHover: _disable, ...rest },
    ref
  ) {
    useImperativeHandle(ref, () => ({
      startAnimation: () => undefined,
      stopAnimation: () => undefined,
    }));

    return (
      <Instagram
        size={size}
        strokeWidth={1.75}
        className={className}
        aria-hidden
        {...rest}
      />
    );
  }
);
