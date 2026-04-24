/** Persisted in localStorage; keeps theme consistent across client navigations. */
export const THEME_STORAGE_KEY = "portfolio-color-scheme" as const;

export type ThemePreference = "light" | "dark" | "system";

export function getStoredTheme(): ThemePreference {
  if (typeof window === "undefined") return "system";
  try {
    const s = localStorage.getItem(THEME_STORAGE_KEY);
    if (s === "light" || s === "dark" || s === "system") return s;
  } catch {
    /* ignore */
  }
  return "system";
}

export function setStoredTheme(t: "light" | "dark" | "system") {
  try {
    if (t === "system") {
      localStorage.removeItem(THEME_STORAGE_KEY);
    } else {
      localStorage.setItem(THEME_STORAGE_KEY, t);
    }
  } catch {
    /* ignore */
  }
}

export function getResolvedIsDark(
  systemDark: boolean,
  userOverride: boolean | null
): boolean {
  if (userOverride === null) return systemDark;
  return userOverride;
}
