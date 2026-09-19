"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import Reveal from "../motion/Reveal";
import TiltCard from "../motion/TiltCard";
import SectionHeading from "./SectionHeading";
import projects, { type Project } from "../data/ProjectData";
import { cn } from "@/lib/utils";

const FILTERS = [
  "All",
  "Data Engineering",
  "Cloud & DevOps",
  "AI",
  "Web3",
  "Web",
] as const;

function ProjectCard({ project }: { project: Project }) {
  const hasLinks = project.code.length > 1 || project.link.length > 1;

  return (
    <TiltCard max={5} className="h-full">
      <article className="panel flex h-full flex-col overflow-hidden">
        {project.img && (
          <div className="relative aspect-[16/9] overflow-hidden border-b border-border/70 bg-secondary/30">
            <Image
              src={`/Projects/${project.img}`}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover/tilt:scale-105"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold leading-snug tracking-tight">
              {project.heading}
            </h3>
            {project.featured && (
              <span
                className="flex-shrink-0 rounded-full bg-primary/10 p-1.5 text-primary"
                title="Featured project"
              >
                <Sparkles className="h-3.5 w-3.5" />
              </span>
            )}
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
            {project.summary}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border/70 bg-secondary/40 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {hasLinks && (
            <div className="mt-auto flex items-center gap-4 pt-6">
              {project.link.length > 1 && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
              {project.code.length > 1 && (
                <Link
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" /> Source
                </Link>
              )}
            </div>
          )}
        </div>
      </article>
    </TiltCard>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [expanded, setExpanded] = useState(false);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.domain === filter),
    [filter],
  );

  const visible = expanded ? filtered : filtered.slice(0, 6);

  return (
    <section id="projects" className="section perspective py-24 sm:py-32">
      <SectionHeading
        index="03"
        eyebrow="Work"
        title="Things I've built"
        description="Data platforms first, with a long tail of infrastructure, AI, and on-chain work from before I specialised."
      />

      {/* Filters */}
      <Reveal dir="up" className="mt-10">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => {
            const count =
              f === "All"
                ? projects.length
                : projects.filter((p) => p.domain === f).length;
            if (count === 0) return null;

            return (
              <button
                key={f}
                onClick={() => {
                  setFilter(f);
                  setExpanded(false);
                }}
                aria-pressed={filter === f}
                className={cn(
                  "chip cursor-pointer",
                  filter === f &&
                    "!border-primary/50 !bg-primary/10 text-primary",
                )}
              >
                {f}
                <span className="font-mono text-[10px] opacity-60">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal
            key={project.heading}
            dir="up"
            delay={(i % 2) * 90}
            className="h-full"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {filtered.length > 6 && (
        <Reveal dir="up" className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="panel px-6 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 hover:text-primary"
          >
            {expanded
              ? "Show less"
              : `Show all ${filtered.length} projects`}
          </button>
        </Reveal>
      )}
    </section>
  );
}
