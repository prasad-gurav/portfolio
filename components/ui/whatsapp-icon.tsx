"use client";

import { forwardRef, useImperativeHandle } from "react";
import type { AnimatedIconHandle, AnimatedIconProps } from "./types";

/**
 * Lucide has no official WhatsApp mark; this is a small brand-style glyph.
 * Swap for `npx shadcn@latest add` generated icon or replace href in data when ready.
 */
export const WhatsappIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>(
  function WhatsappIcon(
    { size = 24, className, disableHover: _disable, ...rest },
    ref
  ) {
    useImperativeHandle(ref, () => ({
      startAnimation: () => undefined,
      stopAnimation: () => undefined,
    }));

    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        className={className}
        fill="currentColor"
        aria-hidden
        {...rest}
      >
        <path d="M20.5 3.5A10.1 10.1 0 0 0 3.2 20.1L2.5 22l2.1-.5a10.1 10.1 0 0 0 16-12ZM12.1 3.6a8.4 8.4 0 0 1 8.4 8.4c0 4.6-3.7 8.3-8.3 8.3a8.2 8.2 0 0 1-4-1.1l-.3-.1-2.3.5.5-2.2-.1-.3a8.2 8.2 0 0 1-1-4 0 8.3 8.3 0 0 1 8.1-8.1Zm4.4 10.1c.2-.1.3-.2.3-.3v-.1c.1-.2 0-.4-.1-.5-.1-.2-1.1-.5-1.5-.6-.1 0-.3-.1-.4 0a.4.4 0 0 0-.2.1l-.6.7c-.1.1-.2.1-.3 0l-.1-.1-1-1-1-1.1a.2.2 0 0 0-.1-.1c-.1-.1-.1-.2 0-.3l.3-.5.1-.1c.1-.1.1-.2.1-.3l.2-.2c.1-.1.1-.1.1-.2s-.6-1.4-.6-1.5c0-.1-.1-.1-.2-.1h-.2l-.3-.1H14c-.1 0-.2 0-.2.1l-.2.1a3.1 3.1 0 0 0-1.4 1.1 1.1 1.1 0 0 0-.2.6c0 .3-.1.6.2 1.1.4.8 1 1.4 1.4 1.8l.2.1c.2.2.3.2.4.1l.1-.1a8 8 0 0 0 .5-.4l.1-.1c.1-.1.1-.1.2 0a15 15 0 0 0 1.1 1c.1.1.1.1.1.1Z" />
      </svg>
    );
  }
);
