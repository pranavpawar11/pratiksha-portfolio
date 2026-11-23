"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 900);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}
      className="fixed right-4 z-40 inline-flex size-12 items-center justify-center rounded-full bg-fg text-bg transition-colors hover:bg-accent hover:text-on-accent"
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
    >
      <ArrowUp aria-hidden className="size-5" />
    </button>
  );
}
