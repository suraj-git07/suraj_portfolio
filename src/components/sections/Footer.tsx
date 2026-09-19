"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="section border-t border-border/70 py-10">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-foreground">Suraj Mishra</span>.
          Built with Next.js, React Three Fiber &amp; Tailwind.
        </p>

        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Back to top <ArrowUp className="h-3 w-3" />
        </button>
      </div>
    </footer>
  );
}
