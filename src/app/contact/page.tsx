import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Section } from "@/components/ui";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { company, process } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Infinity Nexa in Harare, Zimbabwe. Free 30-minute consultation and a tailored quotation within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Infinity Nexa",
    description:
      "Talk to Infinity Nexa in Harare. Free 30-minute consultation, tailored quote within 24 hours.",
    url: "/contact",
  },
};

const details = [
  { icon: MapPin, label: "Location", value: company.location, href: undefined },
  { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us anytime",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your business."
        intro="Reach out via the form, email or WhatsApp. You'll get a free 30-minute consultation and a tailored quotation within 24 hours."
        breadcrumb="Contact"
      />

      <Section className="bg-slate-50">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left: details */}
          <div className="space-y-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {details.map((d) => {
                const inner = (
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <d.icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {d.label}
                      </p>
                      <p className="mt-1 break-words font-medium text-slate-800">
                        {d.value}
                      </p>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={d.label}>{inner}</div>
                );
              })}
            </div>

            {/* Hours */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-brand-600" />
                <h3 className="font-display font-semibold text-slate-900">
                  Office Hours
                </h3>
              </div>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-slate-500">Monday – Friday</dt>
                  <dd className="font-medium text-slate-800">8:00 – 17:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Saturday</dt>
                  <dd className="font-medium text-slate-800">9:00 – 13:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-slate-500">Sunday</dt>
                  <dd className="font-medium text-slate-800">Closed</dd>
                </div>
              </dl>
            </div>

            {/* Mini process */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="font-display font-semibold text-slate-900">
                What happens next
              </h3>
              <ol className="mt-4 space-y-3">
                {process.slice(0, 3).map((p) => (
                  <li key={p.step} className="flex gap-3 text-sm">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                      {p.step}
                    </span>
                    <span className="text-slate-600">
                      <span className="font-medium text-slate-800">
                        {p.title}.
                      </span>{" "}
                      {p.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Right: form */}
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
