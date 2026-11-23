"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, sectionIds, siteConfig } from "@/lib/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);
  const menuBtn = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    panel.current?.querySelector<HTMLElement>("a,button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); menuBtn.current?.focus(); }
      if (e.key === "Tab" && panel.current) {
        const f = panel.current.querySelectorAll<HTMLElement>("a,button");
        const a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
        else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; document.removeEventListener("keydown", onKey); };
  }, [open]);

  const link = (id: string) => `/#${id}`;
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md" style={{ paddingTop: "env(safe-area-inset-top)" }}>
      <nav aria-label="Primary" className="mx-auto flex h-16 w-full max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Pratiksha Shelke, Digital Marketing Portfolio, home">
          <span translate="no" className="font-serif text-2xl font-semibold leading-none">PS<span className="text-accent">.</span></span>
          <span className="hidden leading-tight sm:block">
            <span translate="no" className="block text-sm font-medium">{siteConfig.name}</span>
            <span className="label block text-[0.62rem] text-muted">{siteConfig.tagline}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <Link
                href={link(l.id)}
                aria-current={active === l.id ? "location" : undefined}
                className={cn("relative py-2 text-sm transition-colors hover:text-accent-text", active === l.id ? "text-fg" : "text-muted")}
              >
                {l.label}
                {active === l.id && <span aria-hidden className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-accent" />}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href={link("contact")} className="hidden min-h-11 items-center rounded-full bg-accent px-5 text-sm font-medium text-on-accent transition-colors hover:bg-fg hover:text-bg lg:inline-flex">
            Contact Me
          </Link>
          <ThemeToggle />
          <button
            ref={menuBtn}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto overscroll-contain bg-bg px-5 pb-[max(2rem,env(safe-area-inset-bottom))] pt-6 lg:hidden"
        >
          <ul className="divide-y divide-line border-y border-line">
            {navLinks.map((l) => (
              <li key={l.id}>
                <Link href={link(l.id)} onClick={() => setOpen(false)} className="flex min-h-14 items-center font-serif text-2xl">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={link("contact")} onClick={() => setOpen(false)} className="mt-8 flex min-h-12 w-full items-center justify-center rounded-full bg-accent text-sm font-medium text-on-accent">
            Contact Me
          </Link>
        </div>
      )}
    </header>
  );
}
