"use client";

import { FacebookIcon } from "@/components/ui/facebook-icon";
import { GithubIcon } from "@/components/ui/github-icon";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { TwitterXIcon } from "@/components/ui/twitter-x-icon";
import type { AnimatedIconHandle, AnimatedIconProps } from "@/components/ui/types";
import { WhatsappIcon } from "@/components/ui/whatsapp-icon";
import { contact } from "@/data/content";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import type { ComponentType, Ref } from "react";
import {
  getResolvedIsDark,
  getStoredTheme,
  setStoredTheme,
} from "@/lib/theme-storage";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

const dockItems = [
  { icon: TwitterXIcon, label: "X (Twitter)", href: contact.x },
  { icon: WhatsappIcon, label: "WhatsApp", href: contact.whatsapp },
  { icon: GithubIcon, label: "GitHub", href: contact.github },
  { icon: FacebookIcon, label: "Facebook", href: contact.facebook },
  { icon: LinkedinIcon, label: "LinkedIn", href: contact.linkedin },
  { icon: InstagramIcon, label: "Instagram", href: contact.instagram },
] as const;

type IconComponent = ComponentType<
  AnimatedIconProps & { ref?: Ref<AnimatedIconHandle> }
> & { displayName?: string };

interface DockItemProps {
  icon: IconComponent;
  label: string;
  href: string;
  isAnimated?: boolean;
}

const DockItem = ({
  icon: Icon,
  label,
  href,
  isAnimated = true,
}: DockItemProps) => {
  const iconRef = useRef<AnimatedIconHandle>(null);
  const [isHovered, setIsHovered] = useState(false);
  const external = href.startsWith("http");

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (isAnimated) {
      iconRef.current?.startAnimation();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (isAnimated) {
      iconRef.current?.stopAnimation();
    }
  };

  useEffect(() => {
    if (!isAnimated) {
      iconRef.current?.stopAnimation();
    }
  }, [isAnimated]);

  return (
    <motion.a
      layout
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="relative flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.2, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="sr-only">{label}</span>
      <div
        className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/10",
          "bg-background/90 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/75",
          "dark:border-foreground/15 dark:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.65)]"
        )}
      >
        <Icon
          ref={iconRef as never}
          size={28}
          className="text-foreground/80 dark:text-foreground/85"
          disableHover={!isAnimated}
        />
      </div>

      
    </motion.a>
  );
};

function useSystemColorScheme() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-color-scheme: dark)").matches,
    () => false
  );
}

function ThemeControl() {
  const systemDark = useSystemColorScheme();
  /** `null` = follow system. Persisted in localStorage so client navigations keep the same mode. */
  const [userDark, setUserDark] = useState<boolean | null>(null);
  const [themeReady, setThemeReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isDark = getResolvedIsDark(systemDark, userDark);

  useLayoutEffect(() => {
    const t = getStoredTheme();
    setUserDark(
      t === "dark" ? true : t === "light" ? false : null
    );
    setThemeReady(true);
  }, []);

  useLayoutEffect(() => {
    if (!themeReady) return;
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark, themeReady]);

  return (
    <motion.button
      type="button"
      layout
      aria-label={isDark ? "Use light mode" : "Use dark mode"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        const next = !getResolvedIsDark(systemDark, userDark);
        setStoredTheme(next ? "dark" : "light");
        setUserDark(next);
      }}
      className="relative flex shrink-0 items-center justify-center"
      whileHover={{ scale: 1.2, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div
        className={cn(
          "relative flex h-12 w-12 items-center justify-center rounded-2xl border border-foreground/10",
          "bg-background/90 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/75 cursor-pointer",
          "dark:border-foreground/15"
        )}
      >
        {isDark ? (
          <Sun
            className="h-[28px] w-[28px] text-foreground/80"
            strokeWidth={1.75}
            aria-hidden
          />
        ) : (
          <Moon
            className="h-[28px] w-[28px] text-foreground/80"
            strokeWidth={1.75}
            aria-hidden
          />
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 0 : 0,
          y: isHovered ? -50 : -40,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "pointer-events-none absolute rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shadow-xl",
          "bg-foreground/90 text-background dark:bg-foreground/85 dark:text-background"
        )}
      >
        {isDark ? "Light mode" : "Dark mode"}
      </motion.div>
    </motion.button>
  );
}

export function FloatingDock({ isAnimated = true }: { isAnimated?: boolean }) {
  const [barHovered, setBarHovered] = useState(false);

  return (
    <div className="pointer-events-auto fixed bottom-5 left-1/2 z-50 w-max max-w-[calc(100vw-1rem)] -translate-x-1/2 px-2">
      <motion.nav
        layout
        className="inline-flex max-w-full flex-nowrap items-end gap-2 overflow-x-auto overflow-y-visible rounded-2xl border border-foreground/10 bg-background/80 p-3 shadow-2xl backdrop-blur-xl supports-[backdrop-filter]:bg-background/65 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onMouseEnter={() => setBarHovered(true)}
        onMouseLeave={() => setBarHovered(false)}
        initial={{ y: 28, opacity: 0, filter: "blur(4px)" }}
        animate={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          paddingLeft: barHovered ? 40 : 12,
          paddingRight: barHovered ? 40 : 12,
          gap: barHovered ? 20 : 8,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
        aria-label="Social links and theme"
      >
        {dockItems.map((item) => (
          <DockItem
            key={item.label}
            icon={item.icon as IconComponent}
            label={item.label}
            href={item.href}
            isAnimated={isAnimated}
          />
        ))}

        <div
          className="h-10 w-px shrink-0 self-end bg-foreground/15"
          aria-hidden
        />

        <ThemeControl />
      </motion.nav>
    </div>
  );
}
