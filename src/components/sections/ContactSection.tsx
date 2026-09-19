"use client";

import Link from "next/link";
import React from "react";
import { ArrowUpRight, FileText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Reveal from "../motion/Reveal";
import SectionHeading from "./SectionHeading";
import {
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
  TWITTER_URL,
} from "@/lib/site";

const channels = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}?subject=Hello%20Suraj`,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "suraj-mishra07",
    href: LINKEDIN_URL,
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "suraj-git07",
    href: GITHUB_URL,
    Icon: Github,
  },
  {
    label: "X",
    value: "Suraj_Mishra7",
    href: TWITTER_URL,
    Icon: Twitter,
  },
];

export default function ContactSection() {
  return (
    <section id="connect" className="section perspective py-24 sm:py-32">
      <SectionHeading
        index="06"
        eyebrow="Contact"
        title="Let's build something"
        description="Open to Data Engineering roles and interesting pipeline problems. The fastest way to reach me is email."
        align="center"
      />

      <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-2">
        {channels.map((c, i) => (
          <Reveal key={c.label} dir="up" delay={i * 80}>
            <Link
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="panel group flex items-center gap-4 p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <c.Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs text-muted-foreground">
                  {c.label}
                </span>
                <span className="block truncate text-sm font-medium">
                  {c.value}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal dir="up" delay={340} className="mt-10 flex justify-center">
        <Link
          href={RESUME_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/25"
        >
          <FileText className="h-4 w-4" />
          Download résumé
        </Link>
      </Reveal>
    </section>
  );
}
