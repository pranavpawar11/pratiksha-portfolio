"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/data/gallery";

export function ImageLightbox({ items, index, onClose, onChange }: { items: GalleryItem[]; index: number | null; onClose: () => void; onChange: (i: number) => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const item = index !== null ? items[index] : null;

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (item && !d.open) d.showModal();
    if (!item && d.open) d.close();
  }, [item]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onChange]);

  return (
    <dialog ref={ref} onClose={onClose} aria-labelledby="lightbox-title" className="m-auto max-h-[94dvh] w-[min(1000px,94vw)] overflow-y-auto overscroll-contain border border-line bg-bg p-0 text-fg backdrop:bg-black/80">
      {item && (
        <div className="grid md:grid-cols-[1.2fr_1fr]">
          <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(min-width:768px) 560px, 94vw" className="h-auto max-h-[80dvh] w-full bg-sand object-contain" />
          <div className="flex flex-col gap-4 p-6">
            <div className="flex items-start justify-between gap-4">
              <h3 id="lightbox-title" className="h-card">{item.title}</h3>
              <button type="button" onClick={onClose} aria-label="Close preview" className="inline-flex size-11 shrink-0 items-center justify-center border border-line hover:bg-sand"><X aria-hidden className="size-5" /></button>
            </div>
            <p className="label text-accent-text">{item.category}</p>
            <p className="text-muted">{item.description}</p>
            {item.project && <p className="text-sm">Project: <Link href={item.project.href} className="underline decoration-accent decoration-2 underline-offset-4">{item.project.label}</Link></p>}
            <div className="mt-auto flex gap-2 pt-4">
              <button type="button" aria-label="Previous image" onClick={() => onChange((index! - 1 + items.length) % items.length)} className="inline-flex size-11 items-center justify-center border border-line hover:bg-sand"><ChevronLeft aria-hidden className="size-5" /></button>
              <button type="button" aria-label="Next image" onClick={() => onChange((index! + 1) % items.length)} className="inline-flex size-11 items-center justify-center border border-line hover:bg-sand"><ChevronRight aria-hidden className="size-5" /></button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
