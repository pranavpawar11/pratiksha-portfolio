"use client";

import { useState } from "react";
import { plannerObjectives } from "@/data/lab";
import { cn } from "@/lib/utils";

export function CampaignPlanner() {
  const [id, setId] = useState<string>(plannerObjectives[0].id);
  const cur = plannerObjectives.find((o) => o.id === id)!;
  const rows: Array<[string, React.ReactNode]> = [
    ["Campaign objective", cur.objective],
    ["Target audience", cur.audience],
    ["Marketing channels", cur.channels.join(" · ")],
    ["Content direction", cur.content],
    ["Campaign CTA", `“${cur.cta}”`],
  ];
  return (
    <div>
      <p className="label text-lab-muted">Choose a campaign goal</p>
      <div role="radiogroup" aria-label="Campaign goal" className="mt-3 flex flex-wrap gap-2">
        {plannerObjectives.map((o) => (
          <button key={o.id} type="button" role="radio" aria-checked={id === o.id} onClick={() => setId(o.id)}
            className={cn("min-h-11 border px-5 text-sm transition-colors", id === o.id ? "border-accent bg-accent text-on-accent" : "border-lab-line hover:border-lab-fg")}>
            {o.label}
          </button>
        ))}
      </div>
      <dl className="mt-8 divide-y divide-lab-line border-y border-lab-line" aria-live="polite">
        {rows.map(([k, v]) => (
          <div key={k} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
            <dt className="label text-accent">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
