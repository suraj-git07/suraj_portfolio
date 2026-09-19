"use client";

/**
 * A tiny shared store for scroll + pointer state.
 *
 * The 3D scene reads these every frame inside useFrame. Keeping them in plain
 * mutable refs (instead of React state) means scrolling never triggers a React
 * re-render — only the WebGL frame loop reads the new values.
 */
export const viewState = {
  /** 0 at the top of the page, 1 at the bottom. */
  progress: 0,
  /** Normalised pointer position, -1..1 on both axes. */
  pointerX: 0,
  pointerY: 0,
  /** Scroll velocity in px/frame, smoothed — drives the "warp" on fast scroll. */
  velocity: 0,
};

let listening = false;

export function startViewTracking() {
  if (listening || typeof window === "undefined") return () => {};
  listening = true;

  let lastY = window.scrollY;

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    viewState.progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    const delta = window.scrollY - lastY;
    lastY = window.scrollY;
    viewState.velocity = Math.max(-60, Math.min(60, delta));
  };

  const onPointer = (e: PointerEvent) => {
    viewState.pointerX = (e.clientX / window.innerWidth) * 2 - 1;
    viewState.pointerY = (e.clientY / window.innerHeight) * 2 - 1;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("pointermove", onPointer, { passive: true });
  onScroll();

  return () => {
    listening = false;
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("pointermove", onPointer);
  };
}
