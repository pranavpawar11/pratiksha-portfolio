import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    return NextResponse.json({ ok: false, code: "not_configured", message: "The contact form is not set up yet. Please use the email button instead." }, { status: 503 });
  }
  let body: unknown;
  try { body = await req.json(); } catch { return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 }); }
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, message: "Please check the form fields and try again." }, { status: 422 });
  if (parsed.data.website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots

  const { name, email, subject, message } = parsed.data;
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio enquiry: ${subject}`,
      html: `<p><strong>${esc(name)}</strong> (${esc(email)})</p><p>${esc(message).replace(/\n/g, "<br>")}</p>`,
    }),
  });
  if (!res.ok) return NextResponse.json({ ok: false, message: "The message could not be sent. Please try again or use email." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
