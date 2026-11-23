"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";

export function SkillExplorer({ categories }: { categories: SkillCategory[] }) {
  const [i, setI] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const cur = categories[i];

  function onKey(e: React.KeyboardEvent, idx: number) {
    const n = categories.length;
    let next = idx;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (idx + 1) % n;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (idx - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    setI(next);
    tabs.current[next]?.focus();
  }

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[320px_1fr] lg:gap-14">
      <div role="tablist" aria-label="Skill categories" aria-orientation="vertical" className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:border-y lg:border-line lg:px-0">
        {categories.map((c, idx) => (
          <button
            key={c.id}
            ref={(el) => { tabs.current[idx] = el; }}
            role="tab"
            id={`tab-${c.id}`}
            aria-selected={i === idx}
            aria-controls={`panel-${c.id}`}
            tabIndex={i === idx ? 0 : -1}
            onClick={() => setI(idx)}
            onKeyDown={(e) => onKey(e, idx)}
            className={cn(
              "min-h-12 shrink-0 whitespace-nowrap border px-5 py-3 text-left font-serif text-lg transition-colors lg:whitespace-normal lg:border-0 lg:border-b lg:border-line lg:px-4 lg:py-5 lg:text-2xl last:lg:border-b-0",
              i === idx ? "border-fg bg-fg text-bg" : "border-line hover:bg-sand",
            )}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${cur.id}`} aria-labelledby={`tab-${cur.id}`} tabIndex={0} className="min-h-[22rem]">
        <h3 className="h-project">{cur.title}</h3>
        <p className="mt-4 max-w-2xl text-muted">{cur.summary}</p>
        <dl className="mt-8 grid gap-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <dt className="label text-accent-text">Related skills</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {cur.skills.map((s) => <span key={s} className="border border-line px-3 py-1.5 text-sm">{s}</span>)}
            </dd>
          </div>
          <div>
            <dt className="label text-accent-text">Tools</dt>
            <dd className="mt-3 text-sm">{cur.tools.join(" · ")}</dd>
          </div>
          <div>
            <dt className="label text-accent-text">Where I practised it</dt>
            <dd className="mt-3">
              <Link href={cur.output.href} className="inline-flex min-h-11 items-center gap-1 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-text">
                {cur.output.label}<ArrowUpRight aria-hidden className="size-4" />
              </Link>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
