"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { pillars, company } from "@/lib/data";

type Status = "idle" | "submitting" | "success" | "error";

const allServices = [
  "General enquiry",
  ...pillars.flatMap((p) => p.services.map((s) => s.name)),
  "Retainer package",
];

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate(data: FormData) {
    const next: Record<string, string> = {};
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";
    if (message.length < 10)
      next.message = "Tell us a little more (10+ characters).";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const v = validate(data);
    setErrors(v);
    if (Object.keys(v).length > 0) {
      const firstField = form.querySelector(
        `[name="${Object.keys(v)[0]}"]`,
      ) as HTMLElement | null;
      firstField?.focus();
      return;
    }

    setStatus("submitting");

    // No backend yet: build a mailto so the message is never lost, then
    // show success. Replace this block with a POST to your API/Formspree.
    try {
      const subject = encodeURIComponent(
        `Website enquiry — ${String(data.get("service") || "General")}`,
      );
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${
          data.get("phone") || "—"
        }\nService: ${data.get("service")}\n\n${data.get("message")}`,
      );
      // Open the user's mail client as a reliable fallback.
      window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-emerald-600" />
        <h3 className="mt-4 font-display text-xl font-bold text-slate-900">
          Thank you — message ready to send!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-slate-600">
          Your email client should have opened with your enquiry. We respond
          with a tailored quotation within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Send another
        </button>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100";
  const labelCls = "mb-1.5 block text-sm font-medium text-slate-700";
  const errCls = "mt-1 text-xs font-medium text-red-600";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelCls}>
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Jane Moyo"
            className={field}
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className={errCls}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.co.zw"
            className={field}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+263 ..."
            className={field}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelCls}>
            Service of interest
          </label>
          <select id="service" name="service" defaultValue="General enquiry" className={field}>
            {allServices.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className={labelCls}>
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your business and what you need..."
          className={field}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className={errCls}>{errors.message}</p>}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-600">
          Something went wrong. Please email us directly at {company.email}.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-card disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
