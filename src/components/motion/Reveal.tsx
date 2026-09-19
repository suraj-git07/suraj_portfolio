"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type Direction = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Which way the element travels in from, in 3D space. */
  dir?: Direction;
  /** Stagger, in milliseconds. */
  delay?: number;
  /** Render as something other than a div. */
  as?: "div" | "section" | "li" | "article" | "span";
  /** Replay the animation each time the element re-enters the viewport. */
  once?: boolean;
}

/**
 * Reveals children on scroll with a depth-aware transform (see `.reveal` in
 * globals.css). Uses IntersectionObserver rather than a scroll listener, so
 * it costs nothing while idle.
 */
export default function Reveal({
  children,
  className,
  dir = "up",
  delay = 0,
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let fired = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        fired = true;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    // Safety net: a backgrounded or occluded tab throttles IntersectionObserver,
    // which would otherwise leave above-the-fold content stuck at opacity 0.
    // If nothing has been delivered shortly after mount, fall back to a plain
    // rect check so the page is never silently blank.
    const fallback = window.setTimeout(() => {
      if (fired) return;
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) setVisible(true);
    }, 1200);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, [once]);

  return (
    <Tag
      ref={ref as never}
      data-dir={dir}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn("reveal", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
