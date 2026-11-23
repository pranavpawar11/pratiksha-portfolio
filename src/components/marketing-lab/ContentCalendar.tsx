"use client";

import { useState } from "react";
import { calendarDays } from "@/data/lab";
import { cn } from "@/lib/utils";

export function ContentCalendar() {
  const [sel, setSel] = useState(0);
  const cur = calendarDays[sel];
  return (
    <div>
      <p className="label text-lab-muted">Select a day to inspect the post</p>
      <div role="group" aria-label="Weekly content calendar" className="mt-3 grid grid-cols-7 gap-1.5 sm:gap-2">
        {calendarDays.map((d, i) => {
          const planned = !!d.content;
          return (
            <button key={d.day} type="button" aria-pressed={sel === i} aria-label={`${d.day}: ${planned ? `${d.content}, ${d.objective}` : "no post planned"}`} onClick={() => setSel(i)}
              className={cn("flex min-h-20 flex-col items-center justify-between border p-1.5 text-center transition-colors sm:min-h-24 sm:p-3",
                sel === i ? "border-accent bg-accent text-on-accent" : planned ? "border-lab-line hover:border-lab-fg" : "border-dashed border-lab-line text-lab-muted hover:border-lab-fg")}>
              <span className="label !text-[0.65rem]">{d.day.slice(0, 3)}</span>
              <span aria-hidden className="hidden text-xs leading-tight sm:block">{planned ? d.content : "Rest"}</span>
              <span aria-hidden className={cn("size-2 rounded-full", planned ? (sel === i ? "bg-on-accent" : "bg-accent") : "bg-lab-line")} />
            </button>
          );
        })}
      </div>
      <div className="mt-6 border-t border-lab-line pt-6" aria-live="polite">
        <h4 className="font-serif text-2xl">{cur.day}</h4>
        {cur.content ? (
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div><dt className="label text-accent">Content</dt><dd className="mt-1">{cur.content}: {cur.idea}</dd></div>
            <div><dt className="label text-accent">Format</dt><dd className="mt-1">{cur.format}</dd></div>
            <div><dt className="label text-accent">Objective</dt><dd className="mt-1">{cur.objective}</dd></div>
            <div><dt className="label text-accent">Suggested CTA</dt><dd className="mt-1">“{cur.cta}”</dd></div>
          </dl>
        ) : (
          <p className="mt-3 text-lab-muted">No post planned. Rest days keep the schedule realistic for one person.</p>
        )}
      </div>
    </div>
  );
}
