import type { Metadata } from "next";
import Link from "next/link";
import { Check, Star, CreditCard, Banknote, Smartphone, ShieldCheck } from "lucide-react";
import { Section, SectionHeading, Button, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import { packages, payment, faqs, tierMeta, tierOrder } from "@/lib/data";

export const metadata: Metadata = {
  title: "Retainer Packages",
  description:
    "Affordable monthly retainer packages bundling ZIMRA compliance, bookkeeping, payroll, website maintenance and design — from $55/mo, tiered by company size.",
};

const methodIcons = [Banknote, Smartphone, CreditCard];

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Retainer Packages"
        title="Predictable monthly support, bundled to save you money."
        intro="Combine finance and IT into one fixed monthly fee. Cancel or change tiers as your business grows — no long lock-ins."
        breadcrumb="Packages"
      />

      <Section className="bg-slate-50">
        <div className="grid items-stretch gap-6 lg:grid-cols-4">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 90} className="h-full">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  pkg.highlight
                    ? "border-transparent bg-ink text-white shadow-card"
                    : "border-slate-200 bg-white text-slate-900 shadow-soft hover:shadow-card"
                }`}
              >
                {pkg.highlight && (
                  <>
                    <div className="hero-grid pointer-events-none absolute inset-0 rounded-3xl opacity-40" />
                    <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-sky px-3 py-1 text-xs font-bold text-ink">
                      <Star className="h-3 w-3 fill-ink" /> Popular
                    </span>
                  </>
                )}

                <div className="relative">
                  <h3
                    className={`font-display text-lg font-bold ${
                      pkg.highlight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      pkg.highlight ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {pkg.tagline}
                  </p>

                  <div className="mt-5 flex items-end gap-1">
                    {pkg.from && (
                      <span
                        className={`mb-1.5 mr-0.5 text-xs font-semibold uppercase tracking-wide ${
                          pkg.highlight ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        from
                      </span>
                    )}
                    <span
                      className={`font-display text-4xl font-extrabold ${
                        pkg.highlight ? "text-sky" : "text-slate-900"
                      }`}
                    >
                      {pkg.fee}
                    </span>
                    <span
                      className={`mb-1 text-sm ${
                        pkg.highlight ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {pkg.period}
                    </span>
                  </div>

                  <span
                    className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      pkg.highlight
                        ? "bg-white/10 text-slate-200"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {pkg.size}
                  </span>

                  <Link
                    href="/contact"
                    className={`mt-6 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all ${
                      pkg.highlight
                        ? "bg-brand-600 text-white hover:shadow-card"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    Choose {pkg.name}
                  </Link>

                  <ul className="mt-7 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            pkg.highlight ? "text-sky" : "text-emerald-500"
                          }`}
                        />
                        <span
                          className={
                            pkg.highlight ? "text-slate-200" : "text-slate-600"
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Need something bespoke? Every package can be tailored.{" "}
          <Link href="/contact" className="font-semibold text-brand-600 hover:underline">
            Talk to us
          </Link>
          .
        </p>
      </Section>

      {/* Tier definitions */}
      <Section className="bg-white">
        <SectionHeading
          center
          eyebrow="Pricing Tiers"
          title="Priced to match your business size"
          intro="Every service and package is tiered, so you only pay for what fits your stage of growth."
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {tierOrder.map((t, i) => {
            const meta = tierMeta[t];
            const badge = [
              "bg-amber-50 text-amber-700",
              "bg-slate-100 text-slate-700",
              "bg-brand-50 text-brand-700",
            ][i];
            return (
              <Reveal key={t} delay={i * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
                  <span
                    className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${badge}`}
                  >
                    {meta.name}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
                    {meta.size}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {meta.profile}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Payment & terms */}
      <Section className="bg-white">
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-soft sm:p-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Eyebrow>Payment &amp; Terms</Eyebrow>
            <h2 className="mt-4 font-display text-2xl font-bold text-slate-900 sm:text-3xl">
              Simple, fair and flexible.
            </h2>
            <p className="mt-4 text-slate-600">
              We keep billing straightforward so you can focus on your business.
              Project work starts with a deposit; retainers are billed monthly.
            </p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-600" />
              <p className="text-sm font-medium text-slate-700">
                Terms: {payment.terms}.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
              Accepted payment methods
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {payment.methods.map((m, i) => {
                const Icon = methodIcons[i] ?? CreditCard;
                return (
                  <div
                    key={m}
                    className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-soft"
                  >
                    <Icon className="h-7 w-7 text-brand-600" strokeWidth={1.75} />
                    <span className="text-sm font-semibold text-slate-800">
                      {m}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-slate-50">
        <SectionHeading
          center
          eyebrow="FAQ"
          title="Questions about packages"
          intro="Everything you need to know about how our retainers and pricing work."
        />
        <div className="mx-auto mt-12 max-w-3xl">
          <FaqAccordion faqs={faqs} />
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact" withArrow>
            Get Started Today
          </Button>
        </div>
      </Section>
    </>
  );
}
