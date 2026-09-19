"use client";

import Image from "next/image";
import React from "react";
import { Database, GitBranch, Radio, ShieldCheck } from "lucide-react";
import Reveal from "../motion/Reveal";
import TiltCard from "../motion/TiltCard";
import SectionHeading from "./SectionHeading";
import { education } from "../data/CertData";

const focusAreas = [
  {
    Icon: Database,
    title: "Batch ETL at scale",
    body: "PySpark pipelines across multiple source systems into Redshift and Snowflake, tuned with partition pruning, broadcast joins, and skew mitigation.",
  },
  {
    Icon: Radio,
    title: "Streaming pipelines",
    body: "Kafka and Azure Event Hubs into Delta Lake with Structured Streaming — checkpointed offsets, idempotent MERGE writes, dead-letter handling.",
  },
  {
    Icon: ShieldCheck,
    title: "Data quality & governance",
    body: "Metadata-driven validation frameworks that enforce schema, completeness, and business rules before anything reaches a dashboard.",
  },
  {
    Icon: GitBranch,
    title: "Orchestration & observability",
    body: "Airflow, Argo Workflows, and Kedro with SLA tracking, freshness monitoring, and automated incident creation through ServiceNow.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section perspective py-24 sm:py-32">
      <SectionHeading
        index="01"
        eyebrow="About"
        title="Pipelines people can trust"
        description="I'm a Computer Science graduate working as a Data Engineer at Nagarro, where I build the frameworks that keep enterprise data correct, fresh, and on time. Before data, I spent four years building on-chain — which is where I learned to care about determinism, idempotency, and failure modes long before I met a Spark job."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {focusAreas.map((area, i) => (
          <Reveal key={area.title} dir="up" delay={i * 90}>
            <TiltCard className="h-full">
              <div className="panel h-full p-6 sm:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <area.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.body}
                </p>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* ---------------- Narrative + education ---------------- */}
      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          <Reveal dir="left">
            <p>
              My day job is the rule-configuration layer and validation engine of
              a metadata-driven data quality framework that governs{" "}
              <span className="font-medium text-foreground">
                60 GB of enterprise data daily
              </span>{" "}
              across 12 production pipelines. The interesting part is not the
              checks themselves — it&apos;s designing them so that consuming
              teams can add their own rules without touching Spark code.
            </p>
          </Reveal>
          <Reveal dir="left" delay={90}>
            <p>
              Alongside that I tune the pipelines that feed it. Rewriting joins
              and partitioning strategy on one set of Redshift loads took the
              run from three hours to forty-five minutes and cut billed EMR
              hours by 75% — same cluster, better plan.
            </p>
          </Reveal>
          <Reveal dir="left" delay={180}>
            <p>
              Outside of work I&apos;ve mentored 100+ students through Developer
              Relations at SDC and GDSC, run technical workshops, and competed in
              national hackathons. I&apos;ve also spent years on stage in
              theatre, which turns out to be unreasonably good training for
              explaining a failed DAG to a room of non-engineers.
            </p>
          </Reveal>
        </div>

        <div>
          <Reveal dir="right">
            <h3 className="eyebrow mb-5">Education</h3>
          </Reveal>
          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.school} dir="right" delay={i * 110}>
                <div className="panel flex items-start gap-4 p-5">
                  <Image
                    src={e.logo}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 flex-shrink-0 rounded-xl border border-border bg-background object-contain p-1.5"
                  />
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-snug">
                      {e.school}
                    </p>
                    <p className="mt-1 text-[13px] text-primary">{e.degree}</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {e.detail}
                    </p>
                    <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                      {e.period}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
