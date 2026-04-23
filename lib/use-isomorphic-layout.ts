import { useEffect, useLayoutEffect } from "react";

/**
 * `useLayoutEffect` does not run on the server. This preserves SSR safety for GSAP in Next.js.
 */
export const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;
