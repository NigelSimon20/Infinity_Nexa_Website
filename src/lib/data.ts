/* ============================================================
   Infinity Nexa — Single source of truth for site content.
   All figures and copy come from the company brochure.
   ============================================================ */

export const company = {
  name: "Infinity Nexa",
  legalName: "Infinity Nexa Business & IT Services (Pvt) Ltd",
  tagline: "Where Business Meets Technology",
  location: "Harare, Zimbabwe",
  email: "info@infinitynexa.co.zw",
  website: "www.infinitynexa.co.zw",
  whatsapp: "+263 78 000 0000", // placeholder — update with real number
  intro:
    "A dual-service professional firm combining accounting & ZIMRA compliance with IT solutions. Serving SMEs, corporates, start-ups, and individuals across Zimbabwe.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 6, suffix: "", label: "Expert Directors" },
  { value: 32, suffix: "+", label: "Services Offered" },
  { value: 2, suffix: "", label: "Service Pillars" },
  { value: 24, suffix: "h", label: "Quotation Turnaround" },
];

export type Service = {
  name: string;
  description: string;
  price: string;
};

export type Pillar = {
  id: "finance" | "it";
  letter: "A" | "B";
  title: string;
  short: string;
  blurb: string;
  services: Service[];
};

export const pillars: Pillar[] = [
  {
    id: "finance",
    letter: "A",
    title: "Finance, Accounting & ZIMRA Compliance",
    short: "Finance & Compliance",
    blurb:
      "Stay compliant and in control. From bookkeeping and payroll to full ZIMRA returns and tax health checks, our dedicated finance directors keep your business audit-ready.",
    services: [
      { name: "CV & Cover Letter Writing", description: "ATS-optimised CV and cover letter drafting", price: "$5 – $15" },
      { name: "Company Profile Writing", description: "Branded profiles for tenders and clients", price: "$30 – $80" },
      { name: "Bookkeeping (Monthly)", description: "Transaction processing, ledgers, reconciliations", price: "$80 – $200" },
      { name: "Payroll Processing", description: "Monthly payroll, payslips, PAYE computation", price: "$60 – $150" },
      { name: "Financial Statements", description: "Income statement, balance sheet, cash flow", price: "$150 – $400" },
      { name: "Budget & Forecasting", description: "Annual budgets and cash flow projections", price: "$80 – $200" },
      { name: "ZIMRA VAT Returns", description: "VAT201 preparation and submission", price: "$50 – $80" },
      { name: "ZIMRA PAYE Returns", description: "P2 return preparation and submission", price: "$40 – $70" },
      { name: "ZIMRA WHT", description: "Withholding tax computation and submission", price: "$40 – $60" },
      { name: "ZIMRA ITF12B Annual", description: "Corporate income tax return", price: "$120 – $250" },
      { name: "ZIMRA Objections", description: "Drafting objections and correspondence", price: "$80 – $200" },
      { name: "ZIMRA Tax Health Check", description: "Full compliance review and risk identification", price: "$150 – $300" },
      { name: "TARNS Assistance", description: "TARNS registration and compliance support", price: "$30 – $80" },
      { name: "Sage Pastel Setup", description: "Installation, config, chart of accounts, training", price: "$100 – $300" },
      { name: "Sage X3 Guidance", description: "Module config, workflow setup, user training", price: "$150 – $500" },
      { name: "Tender Writing", description: "Full tender preparation and submission support", price: "$80 – $250" },
      { name: "Business Proposals", description: "Investor/client proposals with financials", price: "$80 – $200" },
    ],
  },
  {
    id: "it",
    letter: "B",
    title: "IT, Web & Digital Services",
    short: "IT & Digital",
    blurb:
      "Build, automate and protect your digital presence. From responsive websites and e-commerce to custom software, cloud and cybersecurity — delivered by our IT directors.",
    services: [
      { name: "Website Design", description: "Responsive 5–10 page business website with CMS", price: "$300 – $800" },
      { name: "E-Commerce Website", description: "Online store with PayNow Zimbabwe integration", price: "$500 – $1,500" },
      { name: "Landing Pages", description: "Single-page promotional / lead-generation pages", price: "$100 – $250" },
      { name: "Website Maintenance", description: "Monthly hosting, updates, backups, security", price: "$30 – $80/mo" },
      { name: "Graphic Design", description: "Logos, flyers, banners, social media graphics", price: "$20 – $200" },
      { name: "Digital Branding", description: "Full brand identity, style guides, print files", price: "$100 – $500" },
      { name: "Software Development", description: "Custom business apps and automation systems", price: "$500 – $3,000+" },
      { name: "Database Design", description: "Custom architecture, ERD, implementation", price: "$200 – $800" },
      { name: "API Integration", description: "Third-party API connections and webhooks", price: "$150 – $600" },
      { name: "Mobile App Development", description: "Android / iOS apps for business operations", price: "$800 – $3,000+" },
      { name: "IT Support & Helpdesk", description: "Remote and on-site technical troubleshooting", price: "$30 – $80/hr" },
      { name: "Network Setup", description: "LAN, Wi-Fi, router/switch installation", price: "$100 – $400" },
      { name: "CCTV Installation", description: "IP / analog CCTV supply and installation", price: "$200 – $800" },
      { name: "Cloud Migration", description: "Migration to AWS, Azure, or Google Cloud", price: "$150 – $600" },
      { name: "Cybersecurity Assessment", description: "Vulnerability scanning and risk reporting", price: "$200 – $500" },
    ],
  },
];

export type Pkg = {
  name: string;
  fee: string;
  period: string;
  highlight?: boolean;
  tagline: string;
  features: string[];
};

export const packages: Pkg[] = [
  {
    name: "IT Only",
    fee: "$120",
    period: "/mo",
    tagline: "Keep your digital presence running",
    features: ["Website maintenance", "IT support", "6 design tasks per month"],
  },
  {
    name: "Starter",
    fee: "$150",
    period: "/mo",
    tagline: "Compliance essentials for small teams",
    features: ["2 ZIMRA returns", "Monthly bookkeeping", "4 design tasks per month"],
  },
  {
    name: "Business",
    fee: "$300",
    period: "/mo",
    highlight: true,
    tagline: "Finance + web, fully managed",
    features: [
      "4 ZIMRA returns",
      "Monthly bookkeeping",
      "Payroll processing",
      "Website maintenance",
      "8 design tasks per month",
    ],
  },
  {
    name: "Enterprise",
    fee: "$500+",
    period: "/mo",
    tagline: "Everything, under one roof",
    features: [
      "Full ZIMRA compliance",
      "Sage Pastel & X3 support",
      "IT helpdesk",
      "All digital services included",
    ],
  },
];

export type Member = {
  name: string;
  role: string;
  pillar: "Finance" | "IT";
  share: number;
};

export const team: Member[] = [
  { name: "Kudzai Kenny Muchato", role: "Accounting & Finance", pillar: "Finance", share: 40 },
  { name: "Collins Ndlovu", role: "Accounting & Finance", pillar: "Finance", share: 15 },
  { name: "Takunda Mutiza", role: "Accounting & Finance", pillar: "Finance", share: 15 },
  { name: "Ryan Matsangaise", role: "IT Services", pillar: "IT", share: 10 },
  { name: "Anodiwa Jaravani", role: "IT Services", pillar: "IT", share: 10 },
  { name: "Nigel Simon", role: "IT Services", pillar: "IT", share: 10 },
];

export const whyChooseUs = [
  { title: "Finance + IT under one roof", text: "One trusted partner for your books and your technology — no juggling vendors." },
  { title: "6 expert directors", text: "Senior specialists across both pillars are personally invested in your success." },
  { title: "Affordable SME-focused pricing", text: "Transparent USD pricing built for Zimbabwean small and growing businesses." },
  { title: "Physical + online delivery", text: "Work with us on-site in Harare or fully remotely — whatever suits you." },
  { title: "Dedicated ZIMRA compliance team", text: "VAT, PAYE, WHT, ITF12B and objections handled by a specialist tax team." },
  { title: "Sage Pastel & X3 specialists", text: "Setup, configuration, training and ongoing guidance on Sage systems." },
];

export const process = [
  { step: "01", title: "Get in touch", text: "Contact us via WhatsApp or email and tell us what you need." },
  { step: "02", title: "Free consultation", text: "A free 30-minute consultation to understand your business." },
  { step: "03", title: "Tailored quotation", text: "Receive a customised quotation within 24 hours." },
  { step: "04", title: "Agree & deposit", text: "Sign the service agreement and pay a 50% deposit to begin." },
  { step: "05", title: "We deliver", text: "We get to work — on time, every time, balance on delivery." },
];

export const faqs = [
  {
    q: "Do I have to choose between finance and IT services?",
    a: "Not at all. Many clients use both pillars — for example, bookkeeping and ZIMRA returns alongside a website and IT support. Our retainer packages are designed to bundle them affordably.",
  },
  {
    q: "How do your retainer packages work?",
    a: "You pay a fixed monthly fee and receive an agreed bundle of services each month — returns, bookkeeping, design tasks, maintenance and more. Packages start at $120/mo (IT Only) up to $500+/mo (Enterprise).",
  },
  {
    q: "Are you registered to handle ZIMRA submissions?",
    a: "Yes. Our dedicated compliance team prepares and submits VAT201, P2 (PAYE), withholding tax, ITF12B annual returns, objections, and conducts full tax health checks.",
  },
  {
    q: "What are your payment terms?",
    a: "We accept USD cash, EcoCash and bank transfer. Project terms are a 50% deposit to start, with the balance due on delivery. Retainers are billed monthly.",
  },
  {
    q: "Can you work with businesses outside Harare?",
    a: "Yes. We deliver both physically and online, so we serve clients across Zimbabwe remotely while offering on-site support in and around Harare.",
  },
];

export const payment = {
  methods: ["USD cash", "EcoCash", "Bank transfer"],
  terms: "50% deposit, balance on delivery",
};
