import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./ui";
import type { ReactNode } from "react";

export default function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumb,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="hero-grid absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-sm text-slate-400"
        >
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-slate-200">{breadcrumb}</span>
        </nav>

        <div className="mt-6 max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
              {intro}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
