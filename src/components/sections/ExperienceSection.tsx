"use client";

import Image from "next/image";
import React, { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import Reveal from "../motion/Reveal";
import SectionHeading from "./SectionHeading";
import expData, { type Experience } from "../data/ExpData";
import { cn } from "@/lib/utils";

function ExperienceEntry({
  exp,
  defaultOpen,
}: {
  exp: Experience;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const expandable = Boolean(
    (exp.positions && exp.positions.length) ||
      (exp.highlights && exp.highlights.length),
  );

  return (
    <div className="relative pl-12 sm:pl-16">
      {/* Timeline node */}
      <span className="absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background sm:h-12 sm:w-12">
        <Image
          src={exp.img}
          alt=""
          width={48}
          height={48}
          className="h-full w-full rounded-full object-cover p-0.5"
        />
      </span>

      <div className="panel overflow-hidden">
        <button
          onClick={() => expandable && setOpen((v) => !v)}
          aria-expanded={expandable ? open : undefined}
          disabled={!expandable}
          className={cn(
            "flex w-full items-start gap-4 p-5 text-left sm:p-6",
            expandable && "cursor-pointer",
          )}
        >
          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold tracking-tight sm:text-lg">
              {exp.companyName}
            </h3>
            <p className="mt-0.5 text-sm font-medium text-primary">
              {exp.role}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[11px] text-muted-foreground">
              <span>{exp.timePeriod}</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {exp.location}
              </span>
            </div>
          </div>

          {expandable && (
            <ChevronDown
              className={cn(
                "mt-1 h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300",
                open && "rotate-180 text-primary",
              )}
            />
          )}
        </button>

        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            {exp.description}
          </p>

          {exp.stack && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border/70 bg-secondary/40 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Expanded detail */}
          <div
            className={cn(
              "grid transition-[grid-template-rows,opacity] duration-500 ease-out",
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
            )}
          >
            <div className="overflow-hidden">
              {exp.highlights && !exp.positions && (
                <ul className="mt-5 space-y-2.5 border-t border-border/70 pt-5">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[13px] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {exp.positions && (
                <div className="mt-5 space-y-4 border-t border-border/70 pt-5">
                  {exp.positions.map((pos) => (
                    <div
                      key={pos.role + pos.timePeriod}
                      className="rounded-xl border border-border/70 bg-secondary/25 p-4 sm:p-5"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-semibold text-primary">
                          {pos.role}
                        </h4>
                        <span className="rounded-full border border-border bg-background/60 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                          {pos.type}
                        </span>
                        <span className="ml-auto font-mono text-[11px] text-muted-foreground">
                          {pos.timePeriod}
                        </span>
                      </div>

                      <p className="mt-2.5 text-[13px] leading-relaxed text-muted-foreground">
                        {pos.description}
                      </p>

                      {pos.highlights && (
                        <ul className="mt-3 space-y-2">
                          {pos.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-[13px] leading-relaxed text-muted-foreground"
                            >
                              <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-primary/70" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? expData : expData.slice(0, 3);

  return (
    <section id="experience" className="section perspective py-24 sm:py-32">
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title="Where I've worked"
        description="Four years from Web3 developer to Data Engineer — expand any role for the detail."
      />

      <div className="relative mt-14">
        {/* Timeline spine */}
        <span
          aria-hidden
          className="absolute bottom-6 left-4 top-6 w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:left-6"
        />

        <div className="space-y-6">
          {visible.map((exp, i) => (
            <Reveal key={exp.companyName} dir="right" delay={i * 80}>
              <ExperienceEntry exp={exp} defaultOpen={i === 0} />
            </Reveal>
          ))}
        </div>
      </div>

      {expData.length > 3 && (
        <Reveal dir="up" className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="panel px-6 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 hover:text-primary"
          >
            {showAll
              ? "Show recent only"
              : `Show all ${expData.length} roles`}
          </button>
        </Reveal>
      )}
    </section>
  );
}
