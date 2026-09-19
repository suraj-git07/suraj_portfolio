"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // next-themes resolves the theme on the client only; rendering an icon before
  // that would mismatch the server HTML.
  React.useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        !mounted
          ? "Toggle theme"
          : isDark
            ? "Switch to light theme"
            : "Switch to dark theme"
      }
      className="flex h-full w-full items-center justify-center"
    >
      {mounted ? (
        isDark ? (
          <MoonIcon className="h-4 w-4" />
        ) : (
          <SunIcon className="h-4 w-4" />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </button>
  );
}
