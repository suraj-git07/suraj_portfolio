"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Change from "./themeChange";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certs" },
  { id: "connect", label: "Connect" },
] as const;

/** Thin progress bar pinned to the very top of the viewport. */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="absolute inset-x-0 top-0 h-[2px] origin-left bg-gradient-to-r from-primary via-primary to-violet-400 transition-transform duration-150 ease-out"
      style={{ transform: `scaleX(${progress / 100})` }}
    />
  );
}

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Scroll-spy: mark the section currently closest to the top of the viewport. */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("modal-open", menuOpen);
    return () => document.body.classList.remove("modal-open");
  }, [menuOpen]);

  const go = useCallback((id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <ScrollProgress />

      <nav
        className={cn(
          "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
          scrolled ? "glass-strong shadow-lg shadow-black/5" : "border-transparent bg-transparent",
        )}
        style={{ width: "calc(100% - 1.5rem)" }}
      >
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2.5 text-sm font-bold tracking-tight"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-[13px] font-bold text-primary-foreground">
            SM
          </span>
          <span className="hidden sm:inline">Suraj Mishra</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              aria-current={active === id ? "true" : undefined}
              className={cn(
                "relative rounded-lg px-3 py-1.5 text-[13px] font-medium transition-colors",
                active === id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
              {active === id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-secondary/50 transition-colors hover:text-primary">
            <Change />
          </div>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/50 md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 top-0 z-[-1] md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={cn(
            "absolute inset-0 bg-background/70 backdrop-blur-sm transition-opacity duration-300",
            menuOpen ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "glass-strong absolute inset-x-3 top-[4.5rem] rounded-2xl p-2 transition-all duration-300",
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0",
          )}
        >
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={cn(
                "flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                active === id
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
              )}
            >
              {label}
              <span className="font-mono text-[10px] opacity-50">
                {String(SECTIONS.findIndex((s) => s.id === id) + 1).padStart(2, "0")}
              </span>
            </button>
          ))}

          <Link
            href="https://drive.google.com/file/d/1IvwfbvsqHBYrdxu1HA1iAQIGY768dsRc/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex w-full items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
          >
            Download résumé
          </Link>
        </div>
      </div>
    </header>
  );
}
