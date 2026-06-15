"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Calculator, Code2 } from "lucide-react";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";
import { pillars, type Pillar } from "@/lib/data";

const INITIAL = 6;

type TabId = Pillar["id"];

const TABS: { id: TabId; label: string; icon: typeof Calculator }[] = [
  { id: "finance", label: "Finance & Compliance", icon: Calculator },
  { id: "it", label: "IT & Digital", icon: Code2 },
];

export default function ServicesExplorer() {
  const [active, setActive] = useState<TabId>("finance");
  const [expanded, setExpanded] = useState(false);

  // Support deep links like /services#it from the nav/footer.
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#it") {
      setActive("it");
    }
  }, []);

  const pillar = pillars.find((p) => p.id === active)!;
  const isFinance = active === "finance";
  const accent = isFinance ? "finance" : "brand";

  const visible = expanded ? pillar.services : pillar.services.slice(0, INITIAL);
  const hiddenCount = pillar.services.length - INITIAL;

  function switchTab(id: TabId) {
    if (id === active) return;
    setActive(id);
    setExpanded(false);
  }

  return (
    <div id={active}>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Service pillars"
        className="mx-auto flex max-w-xl gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-soft"
      >
        {TABS.map((tab) => {
          const selected = active === tab.id;
          const tabFinance = tab.id === "finance";
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={selected}
              aria-controls="services-panel"
              onClick={() => switchTab(tab.id)}
              className={`flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                selected
                  ? tabFinance
                    ? "bg-emerald-600 text-white shadow-soft"
                    : "bg-brand-600 text-white shadow-soft"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <tab.icon className="h-4 w-4" strokeWidth={1.9} />
              <span className="hidden sm:inline">{tab.label}</span>
              <span className="sm:hidden">{tabFinance ? "Finance" : "IT"}</span>
            </button>
          );
        })}
      </div>

      {/* Active pillar header */}
      <div
        key={`${active}-head`}
        className="animate-fade-up mx-auto mt-10 max-w-3xl text-center"
      >
        <span
          className={`text-xs font-bold uppercase tracking-wider ${
            isFinance ? "text-emerald-600" : "text-brand-600"
          }`}
        >
          Pillar {pillar.letter}
        </span>
        <h2 className="mt-2 font-display text-2xl font-bold text-slate-900 sm:text-3xl text-balance">
          {pillar.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">{pillar.blurb}</p>
      </div>

      {/* Cards */}
      <div
        id="services-panel"
        role="tabpanel"
        className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((s, i) => (
          <Reveal
            key={`${active}-${s.name}`}
            delay={(i % 3) * 70}
            direction={i >= INITIAL ? "up" : "zoom"}
          >
            <ServiceCard service={s} accent={accent} />
          </Reveal>
        ))}
      </div>

      {/* Show more / less toggle */}
      {hiddenCount > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="services-panel"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-soft transition-all hover:border-brand-300 hover:text-brand-600"
          >
            {expanded
              ? "Show fewer services"
              : `Show ${hiddenCount} more ${isFinance ? "finance" : "IT"} services`}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
}
