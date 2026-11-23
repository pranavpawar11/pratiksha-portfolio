"use client";

import { useRef, useState } from "react";
import { CampaignPlanner } from "@/components/marketing-lab/CampaignPlanner";
import { ContentCalendar } from "@/components/marketing-lab/ContentCalendar";
import { MarketingFunnel } from "@/components/marketing-lab/MarketingFunnel";
import { cn } from "@/lib/utils";

const modules = [
  { id: "planner", label: "Campaign Planner", blurb: "Plan a campaign from goal to call to action.", C: CampaignPlanner },
  { id: "calendar", label: "Content Calendar", blurb: "Inspect a week of content, day by day.", C: ContentCalendar },
  { id: "funnel", label: "Marketing Funnel", blurb: "See what each funnel stage asks of a brand.", C: MarketingFunnel },
] as const;

export function LabWorkspace() {
  const [i, setI] = useState(0);
  const refs = useRef<Array<HTMLButtonElement | null>>([]);
  const cur = modules[i];

  function onKey(e: React.KeyboardEvent, idx: number) {
    let n = idx;
    if (e.key === "ArrowRight") n = (idx + 1) % modules.length;
    else if (e.key === "ArrowLeft") n = (idx - 1 + modules.length) % modules.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = modules.length - 1;
    else return;
    e.preventDefault();
    setI(n);
    refs.current[n]?.focus();
  }

  return (
    <div className="mt-12 border border-lab-line bg-lab-card">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-lab-line px-4 py-3 sm:px-6">
        <p className="label text-lab-muted">Workspace · Food &amp; Spice Brand</p>
        <p className="label border border-accent px-2.5 py-1 text-accent">Illustrative marketing exercise</p>
      </div>
      <div role="tablist" aria-label="Marketing Lab modules" className="grid grid-cols-3 border-b border-lab-line">
        {modules.map((m, idx) => (
          <button key={m.id} ref={(el) => { refs.current[idx] = el; }} role="tab" id={`lab-tab-${m.id}`} aria-selected={i === idx} aria-controls={`lab-panel-${m.id}`} tabIndex={i === idx ? 0 : -1}
            onClick={() => setI(idx)} onKeyDown={(e) => onKey(e, idx)}
            className={cn("min-h-14 border-r border-lab-line px-2 py-3 text-sm transition-colors last:border-r-0 sm:px-5 sm:text-base", i === idx ? "bg-lab-fg text-lab" : "hover:bg-lab")}>
            {m.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`lab-panel-${cur.id}`} aria-labelledby={`lab-tab-${cur.id}`} tabIndex={0} className="p-5 sm:p-8">
        <p className="mb-6 text-lab-muted">{cur.blurb} All data is sample data. This is not a completed client campaign.</p>
        <cur.C />
      </div>
    </div>
  );
}
