import type { Metadata } from "next";
import {
  Calculator,
  Code2,
  Target,
  HeartHandshake,
  Sparkles,
  Mail,
} from "lucide-react";
import { Linkedin } from "@/components/SocialIcons";
import { Section, SectionHeading, Button, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import PageHero from "@/components/PageHero";
import { company, team, pillars, whyChooseUs } from "@/lib/data";

export const metadata: Metadata = {
  title: "About & Team",
  description:
    "Meet Infinity Nexa — a dual-service firm combining accounting & ZIMRA compliance with IT solutions, led by six expert directors in Harare, Zimbabwe.",
};

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

const values = [
  {
    icon: Target,
    title: "Clarity",
    text: "Transparent USD pricing and plain-language advice. You always know what you're paying for and why.",
  },
  {
    icon: HeartHandshake,
    title: "Partnership",
    text: "We treat your business like our own — same-day responses on retainer and directors you can actually reach.",
  },
  {
    icon: Sparkles,
    title: "Dual expertise",
    text: "Finance and technology rarely live together. We bring both, so nothing falls through the cracks.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A dual-service firm where finance and technology work as one."
        intro={company.intro}
        breadcrumb="About"
      />

      {/* Who we are + pillars */}
      <Section className="bg-white">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="One partner for your books and your technology."
              intro="Infinity Nexa was built on a simple idea: SMEs shouldn't have to choose between getting their compliance right and building a modern digital presence. We do both — under one roof, with one accountable team."
            />
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { v: 6, s: "", l: "Directors" },
                { v: 2, s: "", l: "Pillars" },
                { v: 32, s: "+", l: "Services" },
              ].map((x) => (
                <div key={x.l}>
                  <div className="font-display text-3xl font-bold text-brand-600">
                    <Counter value={x.v} suffix={x.s} />
                  </div>
                  <div className="mt-1 text-sm text-slate-500">{x.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            {pillars.map((p) => {
              const isFinance = p.id === "finance";
              const Icon = isFinance ? Calculator : Code2;
              return (
                <div
                  key={p.id}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${
                      isFinance ? "bg-emerald-600" : "bg-brand-600"
                    }`}
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span
                      className={`text-xs font-bold uppercase tracking-wider ${
                        isFinance ? "text-emerald-600" : "text-brand-600"
                      }`}
                    >
                      Pillar {p.letter}
                    </span>
                    <h3 className="font-display font-semibold text-slate-900">
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {p.blurb}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-slate-50">
        <SectionHeading
          center
          eyebrow="What We Stand For"
          title="The values behind every engagement"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <v.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section className="bg-white">
        <SectionHeading
          center
          eyebrow="Our Team"
          title="Six directors. Two specialities. One mission."
          intro="The people personally invested in getting your finance and IT right."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => {
            const isFinance = m.pillar === "Finance";
            return (
              <Reveal key={m.name} delay={(i % 3) * 80}>
                <div className="group flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-full font-display text-2xl font-bold text-white shadow-soft ${
                      isFinance ? "bg-emerald-600" : "bg-brand-600"
                    }`}
                  >
                    {initials(m.name)}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{m.role}</p>
                  <span
                    className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                      isFinance
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-brand-50 text-brand-700"
                    }`}
                  >
                    {isFinance ? "Finance & Compliance" : "IT & Digital"}
                  </span>
                  <div className="mt-5 flex gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-brand-600 group-hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-brand-600 group-hover:text-white">
                      <Mail className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Why us strip */}
      <Section className="bg-slate-50">
        <SectionHeading
          center
          eyebrow="Why Choose Us"
          title="Reasons clients stay with Infinity Nexa"
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 2) * 80}>
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-soft">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-600" />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-slate-900">
                    {w.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{w.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/contact" withArrow>
            Work With Us
          </Button>
        </div>
      </Section>
    </>
  );
}
