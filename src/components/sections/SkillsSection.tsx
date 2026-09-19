"use client";

import React from "react";
import Reveal from "../motion/Reveal";
import TiltCard from "../motion/TiltCard";
import SectionHeading from "./SectionHeading";
import skillsCategories from "../data/SkillsData";

/** Names shown in the scrolling marquee above the grid. */
const marqueeItems = [
  "PySpark",
  "Kafka",
  "Snowflake",
  "Databricks",
  "Airflow",
  "dbt",
  "Delta Lake",
  "AWS EMR",
  "Redshift",
  "Azure Event Hubs",
  "Argo Workflows",
  "Kedro",
  "Terraform",
  "Kubernetes",
  "Python",
  "Advanced SQL",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section perspective py-24 sm:py-32">
      <SectionHeading
        index="02"
        eyebrow="Toolkit"
        title="The stack I reach for"
        description="Grouped the way I actually use them — what moves the data, what schedules it, what it runs on, and the practices that keep it correct."
      />

      {/* Marquee ribbon */}
      <Reveal dir="up" className="mt-12">
        <div className="marquee-mask relative overflow-hidden py-2">
          <div className="marquee-track flex w-max gap-3">
            {[...marqueeItems, ...marqueeItems].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="chip whitespace-nowrap !bg-secondary/50 text-muted-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {skillsCategories.map((category, i) => (
          <Reveal
            key={category.category}
            dir={i % 2 === 0 ? "left" : "right"}
            delay={(i % 2) * 80}
            className={
              // The two broadest groups get the full width on large screens.
              category.skills.length > 10 ? "lg:col-span-2" : undefined
            }
          >
            <TiltCard max={4} className="h-full">
              <div
                className="panel h-full overflow-hidden p-6 sm:p-7"
                style={
                  {
                    "--cat-accent": category.accent,
                  } as React.CSSProperties
                }
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ background: category.accent }}
                  />
                  <h3 className="text-base font-semibold tracking-tight sm:text-lg">
                    {category.category}
                  </h3>
                  <span className="ml-auto font-mono text-[11px] text-muted-foreground">
                    {String(category.skills.length).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-2 text-[13px] text-muted-foreground">
                  {category.blurb}
                </p>

                <div className="preserve-3d mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <span key={skill.name} className="chip">
                        {Icon && (
                          <Icon
                            className="h-3.5 w-3.5 flex-shrink-0"
                            style={{ color: skill.color }}
                            aria-hidden
                          />
                        )}
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
