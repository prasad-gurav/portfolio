"use client";

import { Facebook } from "lucide-react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

export const FacebookIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  function FacebookIcon(
    { size = 24, className, disableHover: _disable, ...rest },
    ref
  ) {
    useImperativeHandle(ref, () => ({
      startAnimation: () => undefined,
      stopAnimation: () => undefined,
    }));

    return (
      <Facebook
        size={size}
        strokeWidth={1.75}
        className={className}
        aria-hidden
        {...rest}
      />
    );
  }
);
