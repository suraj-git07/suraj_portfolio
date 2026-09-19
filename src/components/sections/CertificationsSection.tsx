"use client";

import React from "react";
import { BadgeCheck } from "lucide-react";
import Reveal from "../motion/Reveal";
import TiltCard from "../motion/TiltCard";
import SectionHeading from "./SectionHeading";
import { certifications } from "../data/CertData";

export default function CertificationsSection() {
  const featured = certifications.filter((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="section perspective py-24 sm:py-32">
      <SectionHeading
        index="05"
        eyebrow="Credentials"
        title="Certifications"
        description="Two professional data platform certifications, plus coursework from the years either side of them."
      />

      {/* Flagship certifications */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {featured.map((cert, i) => (
          <Reveal key={cert.name} dir="scale" delay={i * 110}>
            <TiltCard max={8} className="h-full">
              <div
                className="panel relative h-full overflow-hidden p-7 sm:p-8"
                style={
                  {
                    background: `radial-gradient(120% 100% at 0% 0%, ${cert.accent}1f, transparent 55%), linear-gradient(160deg, hsl(var(--surface-raised)/0.98), hsl(var(--surface)/0.94))`,
                  } as React.CSSProperties
                }
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-bold tracking-tight"
                  style={{
                    background: `${cert.accent}22`,
                    color: cert.accent,
                    boxShadow: `inset 0 0 0 1px ${cert.accent}55`,
                  }}
                >
                  {cert.initials}
                </div>

                <p className="mt-6 text-sm font-medium" style={{ color: cert.accent }}>
                  {cert.issuer}
                </p>
                <h3 className="mt-1.5 text-xl font-semibold leading-snug tracking-tight">
                  {cert.name}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                  <BadgeCheck
                    className="h-4 w-4"
                    style={{ color: cert.accent }}
                  />
                  Certified {cert.year}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Everything else */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((cert, i) => (
          <Reveal key={cert.name} dir="up" delay={(i % 3) * 80}>
            <div className="panel flex h-full items-start gap-4 p-5">
              <span
                className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-[11px] font-bold"
                style={{
                  background: `${cert.accent}1f`,
                  color: cert.accent,
                }}
              >
                {cert.initials}
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-medium leading-snug">
                  {cert.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
