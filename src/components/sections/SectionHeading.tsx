"use client";

import React from "react";
import Reveal from "../motion/Reveal";

interface SectionHeadingProps {
  /** Small monospaced marker, e.g. "02". */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      <Reveal dir={centered ? "up" : "left"}>
        <div
          className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span className="font-mono text-xs text-primary">{index}</span>
          <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>

      <Reveal dir="up" delay={80}>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal dir="up" delay={160}>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
