"use client";

import { Github } from "lucide-react";
import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

export const GithubIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  function GithubIcon(
    { size = 24, className, disableHover: _disable, ...rest },
    ref
  ) {
    useImperativeHandle(ref, () => ({
      startAnimation: () => undefined,
      stopAnimation: () => undefined,
    }));

    return (
      <Github
        size={size}
        strokeWidth={1.75}
        className={className}
        aria-hidden
        {...rest}
      />
    );
  }
);
