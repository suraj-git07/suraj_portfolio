"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  MapPin,
  Mail,
} from "lucide-react";
import Reveal from "../motion/Reveal";
import {
  EMAIL,
  GITHUB_URL,
  LEETCODE_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "@/lib/site";

const links = [
  {
    href: GITHUB_URL,
    label: "GitHub",
    handle: "suraj-git07",
    Icon: Github,
  },
  {
    href: LINKEDIN_URL,
    label: "LinkedIn",
    handle: "suraj-mishra07",
    Icon: Linkedin,
  },
  {
    href: RESUME_URL,
    label: "Résumé",
    handle: "Download PDF",
    Icon: FileText,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="section perspective relative flex min-h-[100svh] flex-col justify-center pb-10 pt-28 sm:pb-20 sm:pt-36"
    >
      <div className="preserve-3d grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* ---------------- Copy ---------------- */}
        <div>
          <Reveal dir="left">
            <div className="chip w-fit !rounded-full !bg-primary/10 !border-primary/30 text-primary">
              <span className="relative flex h-2 w-2">
                <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-primary" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to Data Engineering roles
            </div>
          </Reveal>

          <Reveal dir="left" delay={90}>
            <h1 className="mt-6 text-[2.75rem] font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Suraj
              <br />
              <span className="text-gradient">Mishra</span>
            </h1>
          </Reveal>

          <Reveal dir="left" delay={170}>
            <div className="mt-5 flex h-8 items-center text-lg font-medium text-primary sm:text-xl">
              <TypeAnimation
                sequence={[
                  "Data Engineer",
                  2200,
                  "PySpark & Streaming",
                  2000,
                  "Snowflake · dbt · Airflow",
                  2000,
                  "AWS & Azure Data Platforms",
                  2000,
                ]}
                wrapper="span"
                speed={65}
                deletionSpeed={85}
                repeat={Infinity}
                cursor
              />
            </div>
          </Reveal>

          <Reveal dir="left" delay={240}>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
              I build the robust data pipelines that enterprise reporting runs on, designing batch and streaming ETL, 
              metadata-driven data quality frameworks, and the observability layers that catch broken pipelines before anyone
              downstream notices. Currently an Associate Data Engineer at{" "}
              <span className="font-medium text-foreground">Nagarro</span>.
            </p>
          </Reveal>

          <Reveal dir="left" delay={310}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> New Delhi, India
              </span>
              <Link
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              >
                <Mail className="h-3.5 w-3.5" /> {EMAIL}
              </Link>
            </div>
          </Reveal>

          <Reveal dir="up" delay={380}>
            <div className="mt-8 flex flex-wrap gap-3">
              {links.map(({ href, label, handle, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="panel group flex items-center gap-3 px-4 py-2.5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-left leading-tight">
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block text-[11px] text-muted-foreground">
                      {handle}
                    </span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---------------- Portrait ---------------- */}
        <Reveal dir="scale" delay={220} className="preserve-3d">
          <div className="relative mx-auto w-full max-w-[340px] lg:max-w-none">
            <div className="animate-float preserve-3d relative">
              {/* Layered depth plates behind the portrait */}
              <div
                aria-hidden
                className="absolute inset-0 -rotate-6 rounded-[2rem] border border-primary/25 bg-primary/5"
                style={{ transform: "rotate(-6deg) translateZ(-40px)" }}
              />
              <div
                aria-hidden
                className="absolute inset-0 rotate-3 rounded-[2rem] border border-border bg-secondary/40"
                style={{ transform: "rotate(3deg) translateZ(-20px)" }}
              />

              <div className="panel relative overflow-hidden rounded-[2rem] p-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src="/profilep.png"
                    alt="Suraj Mishra"
                    fill
                    priority
                    sizes="(max-width: 1024px) 340px, 420px"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-xs font-medium text-muted-foreground">
                      B.Tech CSE &rsquo;25 · GGSIPU
                    </p>
                    <p className="text-sm font-semibold">
                      Databricks Professional · SnowPro Core
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating LeetCode badge */}
              <Link
                href={LEETCODE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode profile"
                className="absolute -bottom-3 -right-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFA116] shadow-lg shadow-[#FFA116]/25 transition-transform duration-300 hover:scale-110"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 fill-white"
                  aria-hidden
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-10 flex justify-center lg:mt-14">
        <ArrowDown className="animate-scroll-hint h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
}
