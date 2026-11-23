"use client";

import { useState } from "react";
import { funnelStages } from "@/data/lab";
import { cn } from "@/lib/utils";

const widths = ["w-full", "w-[82%]", "w-[64%]"];

export function MarketingFunnel() {
  const [i, setI] = useState(0);
  const cur = funnelStages[i];
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:gap-12">
      <div role="group" aria-label="Marketing funnel stages" className="flex flex-col items-center gap-1.5">
        {funnelStages.map((s, idx) => (
          <button key={s.id} type="button" aria-pressed={i === idx} onClick={() => setI(idx)}
            className={cn("min-h-14 border px-4 text-center text-sm transition-colors", widths[idx], i === idx ? "border-accent bg-accent text-on-accent" : "border-lab-line hover:border-lab-fg")}>
            <span className="label">{s.label}</span>
          </button>
        ))}
      </div>
      <div aria-live="polite">
        <h4 className="font-serif text-2xl">{cur.label}</h4>
        <p className="mt-2 text-lab-muted">{cur.goal}</p>
        <ul className="mt-5 divide-y divide-lab-line border-y border-lab-line">
          {cur.activities.map((a) => <li key={a} className="py-3">{a}</li>)}
        </ul>
      </div>
    </div>
  );
}
