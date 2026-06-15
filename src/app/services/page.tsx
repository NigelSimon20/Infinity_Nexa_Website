import type { Metadata } from "next";
import { Calculator, Code2 } from "lucide-react";
import { Section, SectionHeading, Button } from "@/components/ui";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import PageHero from "@/components/PageHero";
import { pillars } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full catalogue of Infinity Nexa services across two pillars: Finance, Accounting & ZIMRA Compliance and IT, Web & Digital Services — with transparent USD pricing.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your business needs, transparently priced."
        intro="Two pillars, 30+ services, one trusted partner. Every price below is a real starting range in USD — no surprises, no hidden fees."
        breadcrumb="Services"
      />

      {/* Pillar quick-nav */}
      <div className="sticky top-16 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          <a
            href="#finance"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
          >
            <Calculator className="h-4 w-4" /> Finance &amp; Compliance
          </a>
          <a
            href="#it"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            <Code2 className="h-4 w-4" /> IT &amp; Digital
          </a>
        </div>
      </div>

      {pillars.map((p) => {
        const isFinance = p.id === "finance";
        const Icon = isFinance ? Calculator : Code2;
        return (
          <Section
            key={p.id}
            id={p.id}
            className={isFinance ? "scroll-mt-28 bg-white" : "scroll-mt-28 bg-slate-50"}
          >
            <div className="flex items-start gap-4">
              <span
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-soft ${
                  isFinance ? "bg-emerald-600" : "bg-brand-600"
                }`}
              >
                <Icon className="h-7 w-7" strokeWidth={1.75} />
              </span>
              <SectionHeading
                eyebrow={`Pillar ${p.letter}`}
                title={p.title}
                intro={p.blurb}
              />
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {p.services.map((s, i) => (
                <Reveal key={s.name} delay={(i % 3) * 80}>
                  <ServiceCard service={s} accent={isFinance ? "finance" : "brand"} />
                </Reveal>
              ))}
            </div>
          </Section>
        );
      })}

      {/* CTA */}
      <Section className="bg-white">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-14 text-center sm:px-12">
          <div className="hero-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-2xl font-bold text-white text-balance sm:text-3xl">
              Not sure which services you need?
            </h2>
            <p className="mt-3 text-slate-300">
              Book a free 30-minute consultation and we&apos;ll recommend the
              right mix — and a tailored quotation within 24 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact" withArrow>
                Get a Free Quote
              </Button>
              <Button
                href="/packages"
                variant="ghost"
                className="!border-white/20 !bg-white/5 !text-white hover:!bg-white/10"
              >
                See Retainer Packages
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
