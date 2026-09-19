"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { startViewTracking } from "./scrollStore";

// three.js is ~600 KB — keep it out of the initial bundle and off the server.
const PipelineScene = dynamic(() => import("./PipelineScene"), { ssr: false });

type Quality = "high" | "low" | "off";

/**
 * Decides how much WebGL this device should be asked to run.
 *
 * Phones and low-core machines get a reduced particle count; anyone who has
 * asked for reduced motion, or whose browser has no WebGL, gets no canvas at
 * all and falls back to the CSS gradient + grid underneath.
 */
function useQuality(): Quality {
  const [quality, setQuality] = useState<Quality>("off");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const decide = () => {
      if (reduced.matches) return setQuality("off");

      // Bail out if WebGL is unavailable (older browsers, blocked GPU).
      try {
        const canvas = document.createElement("canvas");
        const gl =
          canvas.getContext("webgl2") ?? canvas.getContext("webgl");
        if (!gl) return setQuality("off");
      } catch {
        return setQuality("off");
      }

      const cores = navigator.hardwareConcurrency ?? 4;
      const smallScreen = window.innerWidth < 768;
      const coarse = window.matchMedia("(pointer: coarse)").matches;

      setQuality(smallScreen || coarse || cores <= 4 ? "low" : "high");
    };

    decide();
    reduced.addEventListener("change", decide);
    return () => reduced.removeEventListener("change", decide);
  }, []);

  return quality;
}

export default function SceneBackground() {
  const quality = useQuality();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => startViewTracking(), []);

  const isDark = resolvedTheme !== "light";

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Base wash — always present, so the page looks finished even with no canvas. */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,hsl(var(--glow-a)/0.16),transparent_60%),radial-gradient(ellipse_70%_50%_at_85%_20%,hsl(var(--glow-b)/0.12),transparent_60%)]" />
      <div className="bg-grid absolute inset-0 opacity-70" />

      {mounted && quality !== "off" && (
        <div className="absolute inset-0 opacity-90">
          <PipelineScene isDark={isDark} quality={quality} />
        </div>
      )}

      {/* Readability scrim: keeps body copy legible over the moving scene
          without flattening the depth entirely. */}
      <div className="absolute inset-0 bg-background/55" />

      {/* Fade the scene out towards the bottom so text stays readable. */}
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
