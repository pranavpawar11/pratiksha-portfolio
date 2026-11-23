"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email, className = "" }: { email: string; className?: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");
  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    setTimeout(() => setState("idle"), 2500);
  }
  return (
    <>
      <button type="button" onClick={copy} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors ${className}`}>
        {state === "copied" ? <Check aria-hidden className="size-4" /> : <Copy aria-hidden className="size-4" />}
        {state === "copied" ? "Email Copied" : "Copy Email"}
      </button>
      <span aria-live="polite" className="sr-only">
        {state === "copied" ? "Email address copied to clipboard" : state === "failed" ? "Copy failed. Select the address and copy it manually." : ""}
      </span>
    </>
  );
}
