"use client";

import { X } from "lucide-react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

export const TwitterXIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  function TwitterXIcon(
    { size = 24, className, disableHover: _disable, ...rest },
    ref
  ) {
    useImperativeHandle(ref, () => ({
      startAnimation: () => undefined,
      stopAnimation: () => undefined,
    }));

    return (
      <X
        size={size}
        strokeWidth={1.75}
        className={className}
        aria-hidden
        {...rest}
      />
    );
  }
);
