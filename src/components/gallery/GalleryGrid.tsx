"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryCategories, type GalleryCategory, type GalleryItem } from "@/data/gallery";
import { ImageLightbox } from "./ImageLightbox";
import { cn } from "@/lib/utils";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [cat, setCat] = useState<GalleryCategory>("All");
  const [open, setOpen] = useState<number | null>(null);
  const shown = cat === "All" ? items : items.filter((i) => i.category === cat);

  return (
    <div className="mt-12">
      <div role="group" aria-label="Filter gallery by category" className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
        {galleryCategories.map((c) => (
          <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)}
            className={cn("min-h-11 shrink-0 border px-4 text-sm transition-colors", cat === c ? "border-fg bg-fg text-bg" : "border-line hover:bg-sand")}>
            {c}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{shown.length} {shown.length === 1 ? "design" : "designs"} shown</p>

      {shown.length === 0 ? (
        <div className="grain mt-8 border border-dashed border-muted/60 bg-sand/50 p-8 sm:p-12">
          <p className="label text-accent-text">{items.length === 0 ? "Gallery in progress" : "Nothing here yet"}</p>
          <p className="h-card mt-3 max-w-xl">{items.length === 0 ? "Original designs are being added." : `No designs in “${cat}” yet.`}</p>
          <p className="mt-3 max-w-xl text-muted">Only work I have designed myself will appear in this gallery, starting with the Canva posts for the Raje Masale project.</p>
        </div>
      ) : (
        <ul className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4 [&>li]:break-inside-avoid">
          {shown.map((it) => (
            <li key={it.id}>
              <button type="button" onClick={() => setOpen(items.indexOf(it))} className="group block w-full text-left" aria-label={`Preview ${it.title}`}>
                <Image src={it.src} alt={it.alt} width={it.width} height={it.height} loading="lazy" sizes="(min-width:1024px) 380px, (min-width:640px) 45vw, 100vw" className="h-auto w-full border border-line" />
                <span className="mt-2 flex items-baseline justify-between gap-3 text-sm"><span className="font-medium group-hover:text-accent-text">{it.title}</span><span className="label text-muted">{it.category}</span></span>
              </button>
            </li>
          ))}
        </ul>
      )}
      <ImageLightbox items={items} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </div>
  );
}
