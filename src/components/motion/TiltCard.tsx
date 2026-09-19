"use client";

import React, { useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  /** Maximum rotation in degrees. */
  max?: number;
  /** Adds a cursor-tracking sheen over the surface. */
  glare?: boolean;
}

/**
 * Pointer-tracked 3D tilt.
 *
 * Writes directly to style on a rAF tick rather than through React state —
 * a card re-rendering on every mousemove would be far more expensive than the
 * transform itself. Skipped entirely on touch, where there is no hover to track.
 */
export default function TiltCard({
  children,
  className,
  max = 7,
  glare = true,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  const handleMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== "mouse") return;
      const node = ref.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        node.style.transform = `perspective(1000px) rotateX(${(0.5 - py) * max * 2}deg) rotateY(${(px - 0.5) * max * 2}deg) translateZ(10px)`;
        node.style.setProperty("--glare-x", `${px * 100}%`);
        node.style.setProperty("--glare-y", `${py * 100}%`);
      });
    },
    [max],
  );

  const handleLeave = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    cancelAnimationFrame(frame.current);
    node.style.transform = "";
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={cn(
        "group/tilt relative transition-transform duration-500 ease-out will-change-transform motion-reduce:!transform-none",
        className,
      )}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--glare-x, 50%) var(--glare-y, 50%), hsl(var(--glow-a) / 0.12), transparent 60%)",
          }}
        />
      )}
    </div>
  );
}
