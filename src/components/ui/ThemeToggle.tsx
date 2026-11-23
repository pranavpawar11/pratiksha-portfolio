"use client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  }
  // Both icons render on the server; CSS shows the right one via [data-theme], so there is no hydration mismatch.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:bg-fg hover:text-bg"
    >
      <Sun aria-hidden className="size-[18px] [[data-theme=dark]_&]:hidden" />
      <Moon aria-hidden className="hidden size-[18px] [[data-theme=dark]_&]:block" />
    </button>
  );
}
