import { NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/lib/data";

// Email sending needs the Node runtime (not edge).
export const runtime = "nodejs";

// Sender must be on a domain you've verified in Resend.
// Until your domain is verified, Resend allows "onboarding@resend.dev".
const FROM = process.env.CONTACT_FROM_EMAIL || "Infinity Nexa <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL || company.email;

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 },
    );
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const service = String(data.service ?? "General enquiry").trim();
  const message = String(data.message ?? "").trim();
  const honeypot = String(data.company ?? "").trim(); // bot trap

  // Silently accept bots (they filled the hidden field) — don't email.
  if (honeypot) return NextResponse.json({ ok: true });

  if (name.length < 2 || !isEmail(email) || message.length < 10) {
    return NextResponse.json({ error: "Please check your details." }, { status: 400 });
  }

  const rows = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
    ["Service", service],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
      <div style="background:#0a1733;padding:20px 24px;border-radius:12px 12px 0 0">
        <h1 style="margin:0;color:#fff;font-size:18px">New website enquiry</h1>
        <p style="margin:4px 0 0;color:#93add3;font-size:13px">Infinity Nexa — ${esc(service)}</p>
      </div>
      <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:24px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:6px 0;color:#64748b;width:90px">${k}</td><td style="padding:6px 0;font-weight:600">${esc(v)}</td></tr>`,
            )
            .join("")}
        </table>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0" />
        <p style="margin:0 0 6px;color:#64748b;font-size:13px">Message</p>
        <p style="margin:0;white-space:pre-wrap;line-height:1.6">${esc(message)}</p>
      </div>
    </div>`;

  const text = `New website enquiry (${service})

Name: ${name}
Email: ${email}
Phone: ${phone || "—"}
Service: ${service}

${message}`;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `New enquiry — ${service} (${name})`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please email us directly." },
        { status: 502 },
      );
    }

    // Best-effort confirmation email to the person who enquired.
    // (Requires a verified sending domain — the resend.dev sandbox only
    // delivers to your own account email.) A failure here must not fail
    // the request, since the team has already been notified above.
    try {
      const confirmHtml = `
        <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#0f172a">
          <div style="background:#0a1733;padding:24px;border-radius:12px 12px 0 0;text-align:center">
            <h1 style="margin:0;color:#fff;font-size:20px">Thank you, ${esc(name.split(" ")[0])}!</h1>
            <p style="margin:6px 0 0;color:#93add3;font-size:13px">${esc(company.tagline)}</p>
          </div>
          <div style="border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;padding:24px;line-height:1.6;font-size:14px">
            <p style="margin:0 0 14px">
              We've received your enquiry about <strong>${esc(service)}</strong> and a
              member of our team will get back to you with a tailored quotation
              <strong>within 24 hours</strong>.
            </p>
            <p style="margin:0 0 6px;color:#64748b;font-size:13px">Your message</p>
            <blockquote style="margin:0 0 16px;padding:12px 16px;background:#f8fafc;border-left:3px solid #1e40af;white-space:pre-wrap">${esc(message)}</blockquote>
            <p style="margin:0 0 4px">Need us sooner? Just reply to this email or reach us at
              <a href="mailto:${esc(company.email)}" style="color:#1e40af">${esc(company.email)}</a>.</p>
            <p style="margin:18px 0 0;color:#94a3b8;font-size:12px">${esc(company.legalName)} · ${esc(company.location)}</p>
          </div>
        </div>`;

      const confirmText = `Thank you, ${name.split(" ")[0]}!

We've received your enquiry about ${service} and will get back to you with a tailored quotation within 24 hours.

Your message:
${message}

Need us sooner? Reply to this email or contact ${company.email}.

${company.legalName} · ${company.location}`;

      await resend.emails.send({
        from: FROM,
        to: [email],
        replyTo: TO,
        subject: "We've received your enquiry — Infinity Nexa",
        html: confirmHtml,
        text: confirmText,
      });
    } catch (confirmErr) {
      console.error("Confirmation email failed (non-fatal):", confirmErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
