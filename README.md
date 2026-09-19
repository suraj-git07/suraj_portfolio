# Suraj Mishra — Portfolio

A 3D, scroll-driven portfolio for a data engineer. Built with Next.js App Router,
React Three Fiber, and Tailwind.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## How it's put together

```
src/
  app/layout.tsx              Fonts, metadata, theme provider
  components/
    home.tsx                  Composes the sections
    navbar.tsx                Scroll-spy nav + progress bar
    data/                     All content lives here — edit these, not the sections
      ExpData.tsx             Work history (companies, roles, highlights)
      ProjectData.tsx         Projects, with tags and a domain used by the filters
      SkillsData.tsx          Skill groups; icons come from react-icons/si
      CertData.tsx            Certifications, education, and the hero stat tiles
    sections/                 One file per page section
    motion/                   Reveal (scroll-in), TiltCard (3D hover), SmoothScroll
    three/                    WebGL background scene
```

To change any content on the site, edit a file under `components/data/` — the
sections render whatever is in there.

## The 3D layer

`three/PipelineScene.tsx` renders a drifting particle field and a node
constellation, both reacting to scroll position and cursor. All particle motion
runs in the vertex shader, so scrolling never touches the position buffer.

`three/SceneBackground.tsx` decides how much of that to run:

| Condition | Result |
| --- | --- |
| `prefers-reduced-motion`, or no WebGL | No canvas — CSS gradient + grid only |
| Phone, touch pointer, or ≤ 4 CPU cores | `low` — fewer particles, capped DPR, no AA |
| Everything else | `high` |

three.js is dynamically imported and client-only, so it stays out of the initial
bundle (~166 kB first load for the page).

## Accessibility & motion

Every animation is gated behind `prefers-reduced-motion`: reveals render at
their final position, the marquee stops, and the WebGL canvas never mounts.
Smooth scrolling is also skipped on touch devices, where native momentum
scrolling feels better.

## Deploy

Deployed on Vercel. `npm run build` produces a fully static export of `/`.
