"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";

type Status = { kind: "idle" } | { kind: "success" } | { kind: "error"; text: string };

const field = "mt-2 rounded-lg block min-h-12 w-full border border-line bg-card px-4 py-3 text-fg placeholder:text-muted/70";

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "", website: "" },
  });

  async function onSubmit(values: ContactInput) {
    setStatus({ kind: "idle" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };
      if (res.ok && data.ok) { setStatus({ kind: "success" }); reset(); }
      else setStatus({ kind: "error", text: data.message ?? "The message could not be sent. Please use the email button instead." });
    } catch {
      setStatus({ kind: "error", text: "Network error. Check your connection, or use the email button instead." });
    }
  }

  const err = (k: keyof ContactInput) => errors[k]?.message as string | undefined;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-lg" aria-label="Contact form">
      <div className="hidden" aria-hidden><label>Website<input type="text" tabIndex={-1} autoComplete="off" {...register("website")} /></label></div>
      <div>
        <label htmlFor="cf-name" className="text-sm font-medium">Name</label>
        <input id="cf-name" autoComplete="name" placeholder="Your full name…" aria-invalid={!!errors.name} aria-describedby={errors.name ? "cf-name-err" : undefined} className={field} {...register("name")} />
        {err("name") && <p id="cf-name-err" className="mt-1.5 text-sm text-accent-text">{err("name")}</p>}
      </div>
      <div>
        <label htmlFor="cf-email" className="text-sm font-medium">Email</label>
        <input id="cf-email" type="email" inputMode="email" autoComplete="email" spellCheck={false} placeholder="name@company.com…" aria-invalid={!!errors.email} aria-describedby={errors.email ? "cf-email-err" : undefined} className={field} {...register("email")} />
        {err("email") && <p id="cf-email-err" className="mt-1.5 text-sm text-accent-text">{err("email")}</p>}
      </div>
      <div>
        <label htmlFor="cf-subject" className="text-sm font-medium">Subject</label>
        <input id="cf-subject" autoComplete="off" placeholder="Digital marketing opportunity…" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "cf-subject-err" : undefined} className={field} {...register("subject")} />
        {err("subject") && <p id="cf-subject-err" className="mt-1.5 text-sm text-accent-text">{err("subject")}</p>}
      </div>
      <div>
        <label htmlFor="cf-message" className="text-sm font-medium rounded-4xl">Message</label>
        <textarea id="cf-message" rows={3} autoComplete="off" placeholder="Tell me about the role or project…" aria-invalid={!!errors.message} aria-describedby={errors.message ? "cf-message-err" : undefined} className={field} {...register("message")} />
        {err("message") && <p id="cf-message-err" className="mt-1.5 text-sm text-accent-text">{err("message")}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 text-sm font-medium text-on-accent transition-colors hover:bg-fg hover:text-bg disabled:opacity-70 sm:w-auto">
        {isSubmitting && <Loader2 aria-hidden className="size-4 animate-spin" />}
        {isSubmitting ? "Sending…" : "Send Message"}
      </button>
      <div aria-live="polite" role="status">
        {status.kind === "success" && <p className="border-l-2 border-sage pl-4 text-sm">Message sent. Thank you, I will reply by email.</p>}
        {status.kind === "error" && <p className="border-l-2 border-accent pl-4 text-sm">{status.text}</p>}
      </div>
    </form>
  );
}
