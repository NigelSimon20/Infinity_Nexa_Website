import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calculator,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Users,
  MapPin,
  Clock,
  BadgeDollarSign,
} from "lucide-react";
import { Section, SectionHeading, Button, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";
import {
  company,
  pillars,
  stats,
  whyChooseUs,
  process,
  faqs,
} from "@/lib/data";

const industries = [
  "SMEs",
  "Corporates",
  "Start-ups",
  "Individuals",
  "Retail",
  "NGOs",
];

const whyIcons = [Users, Users, BadgeDollarSign, MapPin, ShieldCheck, Calculator];

const featuredFinance = pillars[0].services.slice(0, 3);
const featuredIT = pillars[1].services.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="hero-grid absolute inset-0" />
        <div className="absolute -right-16 top-1/2 hidden -translate-y-1/2 lg:block">
          <Image
            src="/logo-mark.png"
            alt=""
            width={527}
            height={254}
            aria-hidden
            className="h-auto w-130 animate-float-slow opacity-[0.16]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-sky" />
                {company.location}
              </span>
            </div>

            <h1 className="animate-fade-up delay-1 mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Where business meets{" "}
              <span className="text-sky">technology</span>.
            </h1>

            <p className="animate-fade-up delay-2 mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {company.legalName} brings accounting &amp; ZIMRA compliance
              together with web, software and IT solutions — one trusted partner
              for SMEs, corporates and start-ups across Zimbabwe.
            </p>

            <div className="animate-fade-up delay-3 mt-9 flex flex-wrap gap-3">
              <Button href="/contact" withArrow>
                Get a Free Quote
              </Button>
              <Button
                href="/services"
                variant="ghost"
                className="!border-white/20 !bg-white/5 !text-white hover:!bg-white/10"
              >
                Explore Services
              </Button>
            </div>

            <dl className="animate-fade-up delay-4 mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-bold text-white">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs font-medium text-slate-400">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Industries marquee strip */}
        <div className="relative overflow-hidden border-t border-white/10 bg-white/3 py-5 backdrop-blur">
          <div className="marquee-track gap-12">
            {[...industries, ...industries, ...industries, ...industries].map(
              (ind, i) => (
                <span
                  key={i}
                  className="flex items-center gap-12 whitespace-nowrap text-sm font-medium uppercase tracking-wider text-slate-400"
                >
                  {ind}
                  <span className="h-1 w-1 rounded-full bg-sky/60" />
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ===================== TWO PILLARS ===================== */}
      <Section id="pillars" className="bg-white">
        <div className="text-center">
          <SectionHeading
            center
            eyebrow="Our Two Pillars"
            title="One firm. Two specialities."
            intro="Most businesses juggle separate accountants and IT providers. We combine both under one roof — so your finances and your technology finally talk to each other."
          />
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {pillars.map((p, i) => {
            const Icon = p.id === "finance" ? Calculator : Code2;
            const isFinance = p.id === "finance";
            return (
              <Reveal key={p.id} delay={i * 120} direction={i === 0 ? "left" : "right"}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition-all duration-300 hover:shadow-card sm:p-10">
                  <div
                    className={`absolute right-0 top-0 -mr-10 -mt-10 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 ${
                      isFinance
                        ? "bg-emerald-100 opacity-60"
                        : "bg-brand-100 opacity-60"
                    }`}
                  />
                  <div className="relative flex items-center gap-4">
                    <span
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-soft ${
                        isFinance ? "bg-emerald-600" : "bg-brand-600"
                      }`}
                    >
                      <Icon className="h-7 w-7" strokeWidth={1.75} />
                    </span>
                    <div>
                      <span
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isFinance ? "text-emerald-600" : "text-brand-600"
                        }`}
                      >
                        Pillar {p.letter}
                      </span>
                      <h3 className="font-display text-xl font-bold text-slate-900">
                        {p.short}
                      </h3>
                    </div>
                  </div>

                  <p className="relative mt-5 text-slate-600">{p.blurb}</p>

                  <ul className="relative mt-6 grid gap-2.5 sm:grid-cols-2">
                    {p.services.slice(0, 6).map((s) => (
                      <li
                        key={s.name}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          className={`h-4 w-4 shrink-0 ${
                            isFinance ? "text-emerald-500" : "text-brand-500"
                          }`}
                        />
                        {s.name}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-8 pt-2">
                    <Link
                      href={`/services#${p.id}`}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3 ${
                        isFinance ? "text-emerald-600" : "text-brand-600"
                      }`}
                    >
                      View all {p.services.length} services
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* ===================== FEATURED SERVICES ===================== */}
      <Section className="bg-slate-50">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Popular Services"
            title="What we help businesses with"
            intro="A snapshot from both pillars — explore the full catalogue for transparent USD pricing on every service."
          />
          <Button href="/services" variant="ghost" withArrow className="shrink-0">
            All Services
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredFinance.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <ServiceCard service={s} accent="finance" />
            </Reveal>
          ))}
          {featuredIT.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <ServiceCard service={s} accent="brand" />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeading
              eyebrow="Why Infinity Nexa"
              title="Built for Zimbabwean businesses that want to grow."
              intro="Affordable, SME-focused and genuinely dual-skilled. Here's what sets us apart."
            />
            <div className="mt-8">
              <Button href="/about" variant="secondary" withArrow>
                Meet the Team
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {whyChooseUs.map((item, i) => {
              const Icon = whyIcons[i] ?? CheckCircle2;
              return (
                <Reveal key={item.title} delay={i * 70}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 font-display text-base font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* ===================== STATS BAND ===================== */}
      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
        <div className="hero-grid absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: Users, value: 6, suffix: "", label: "Expert directors across both pillars" },
            { icon: BadgeDollarSign, value: 32, suffix: "+", label: "Affordable services in USD" },
            { icon: Clock, value: 24, suffix: "h", label: "Tailored quotation turnaround" },
            { icon: ShieldCheck, value: 100, suffix: "%", label: "Focused on ZIMRA compliance" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto h-7 w-7 text-sky" strokeWidth={1.75} />
              <div className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mx-auto mt-2 max-w-[14rem] text-sm text-slate-400">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <Section className="bg-slate-50">
        <SectionHeading
          center
          eyebrow="How to Get Started"
          title="A simple, transparent process"
          intro="From first contact to delivery, you always know what happens next."
        />
        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent lg:block" />
          <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal
                as="li"
                key={p.step}
                delay={i * 90}
                className="relative text-center"
              >
                <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 font-display text-lg font-bold text-white shadow-card">
                  {p.step}
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-slate-600">
                  {p.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* ===================== FAQ ===================== */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 text-balance sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-slate-600">
              Can&apos;t find what you&apos;re looking for? Reach out and
              we&apos;ll respond personally.
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="ghost" withArrow>
                Contact Us
              </Button>
            </div>
          </div>
          <FaqAccordion faqs={faqs} />
        </div>
      </Section>
    </>
  );
}
