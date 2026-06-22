import type { Metadata } from "next";
import { Section, Button } from "@/components/ui";
import PageHero from "@/components/PageHero";
import ServicesExplorer from "@/components/ServicesExplorer";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Full catalogue of Infinity Nexa services across two pillars: Finance, Accounting & ZIMRA Compliance and IT, Web & Digital Services — with transparent Bronze, Silver and Premium USD pricing.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services & Pricing | Infinity Nexa",
    description:
      "40+ accounting, ZIMRA compliance and IT services with transparent tiered USD pricing for Zimbabwean businesses.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your business needs, transparently priced."
        intro="Two pillars, 40+ services, one trusted partner. Pick your business size to see Bronze, Silver or Premium pricing — all in USD, no hidden fees."
        breadcrumb="Services"
      />

      {/* Tabbed pillar explorer */}
      <Section className="scroll-mt-24 bg-slate-50">
        <ServicesExplorer />
      </Section>

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
