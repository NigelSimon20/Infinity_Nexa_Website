import {
  FileText,
  FileSignature,
  BookOpen,
  Wallet,
  BarChart3,
  TrendingUp,
  ReceiptText,
  Receipt,
  Percent,
  Landmark,
  Scale,
  ShieldCheck,
  ClipboardCheck,
  Calculator,
  Settings2,
  FileCheck,
  Presentation,
  Globe,
  ShoppingCart,
  MousePointerClick,
  Wrench,
  Palette,
  Sparkles,
  Code2,
  Database,
  Plug,
  Smartphone,
  LifeBuoy,
  Network,
  Cctv,
  Cloud,
  Lock,
  Store,
  LayoutGrid,
  Server,
  Archive,
  Search,
  Share2,
  QrCode,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import type { Service, Tier } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  "CV & Cover Letter Writing": FileText,
  "Company Profile Writing": FileSignature,
  "Bookkeeping (Monthly)": BookOpen,
  "Payroll Processing": Wallet,
  "Financial Statements": BarChart3,
  "Budget & Forecasting": TrendingUp,
  "ZIMRA VAT Returns": ReceiptText,
  "ZIMRA PAYE Returns": Receipt,
  "ZIMRA WHT": Percent,
  "ZIMRA ITF12B Annual": Landmark,
  "ZIMRA Objections": Scale,
  "ZIMRA Tax Health Check": ShieldCheck,
  "TARNS Assistance": ClipboardCheck,
  "Sage Pastel Setup": Calculator,
  "Sage X3 Guidance": Settings2,
  "Tender Writing": FileCheck,
  "Business Proposals": Presentation,
  "Website Design": Globe,
  "E-Commerce Website": ShoppingCart,
  "Landing Pages": MousePointerClick,
  "Website Maintenance": Wrench,
  "Graphic Design": Palette,
  "Digital Branding": Sparkles,
  "Software Development": Code2,
  "Database Design": Database,
  "API Integration": Plug,
  "Mobile App Development": Smartphone,
  "IT Support & Helpdesk": LifeBuoy,
  "Network Setup": Network,
  "CCTV Installation": Cctv,
  "Cloud Migration": Cloud,
  "Cybersecurity Assessment": Lock,
  "POS System Setup": Store,
  "Microsoft 365 / Google Workspace": LayoutGrid,
  "Server Setup & Maintenance": Server,
  "Data Backup & Recovery": Archive,
  "SEO & Online Visibility": Search,
  "Social Media Management": Share2,
  "QR Code Menus & Catalogues": QrCode,
  "IT Staff Training": GraduationCap,
};

const ACCENTS = {
  brand: {
    bar: "bg-brand-600",
    iconIdle: "bg-brand-50 text-brand-600",
    iconHover: "group-hover:bg-brand-600 group-hover:text-white",
    price: "text-brand-600",
  },
  finance: {
    bar: "bg-emerald-600",
    iconIdle: "bg-emerald-50 text-emerald-600",
    iconHover: "group-hover:bg-emerald-600 group-hover:text-white",
    price: "text-emerald-600",
  },
} as const;

export default function ServiceCard({
  service,
  accent = "brand",
  tier = "bronze",
  priceLabel = "From",
}: {
  service: Service;
  accent?: keyof typeof ACCENTS;
  tier?: Tier;
  priceLabel?: string;
}) {
  const Icon = iconMap[service.name] ?? Sparkles;
  const a = ACCENTS[accent];
  const raw = service.prices[tier];
  const available = raw !== "-";
  const price = available ? raw : "On request";

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-card">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${a.bar}`}
      />
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${a.iconIdle} ${a.iconHover}`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-base font-semibold text-slate-900">
        {service.name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm leading-relaxed text-slate-600">
        {service.description}
      </p>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {available ? priceLabel : "Available"}
        </span>
        <span
          className={`font-display text-sm font-bold ${
            available ? a.price : "text-slate-400"
          }`}
        >
          {price}
        </span>
      </div>
    </div>
  );
}
