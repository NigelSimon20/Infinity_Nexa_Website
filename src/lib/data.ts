/* ============================================================
   Infinity Nexa — Single source of truth for site content.
   Pricing reflects the Revised Pricing Structure 2026
   (tiered: Bronze / Silver / Premium).
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

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/infinitynexa/" },
  { label: "Facebook", href: "https://www.facebook.com/share/1FKN4M6HVR/?mibextid=wwXIfr" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/infinitynexa?igsh=MWhzOXdwdG1qZDl4cg%3D%3D&utm_source=qr",
  },
];

export const stats = [
  { value: 6, suffix: "", label: "Expert Directors" },
  { value: 40, suffix: "+", label: "Services Offered" },
  { value: 3, suffix: "", label: "Pricing Tiers" },
  { value: 24, suffix: "h", label: "Quotation Turnaround" },
];

export type Tier = "bronze" | "silver" | "premium";

export const tierMeta: Record<Tier, { name: string; size: string; profile: string }> = {
  bronze: {
    name: "Bronze",
    size: "Small / Micro",
    profile: "1–10 employees, sole traders, start-ups, informal traders",
  },
  silver: {
    name: "Silver",
    size: "Medium",
    profile: "11–30 employees, established SMEs, growing businesses",
  },
  premium: {
    name: "Premium",
    size: "Large Corporate",
    profile: "30+ employees, corporates, NGOs, multi-branch businesses",
  },
};

export const tierOrder: Tier[] = ["bronze", "silver", "premium"];

export type Service = {
  name: string;
  description: string;
  prices: Record<Tier, string>;
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
      { name: "CV & Cover Letter Writing", description: "ATS-optimised CV and cover letter drafting", prices: { bronze: "$5", silver: "$10", premium: "$18" } },
      { name: "Company Profile Writing", description: "Branded profiles for tenders and clients", prices: { bronze: "$20", silver: "$35", premium: "$60" } },
      { name: "Bookkeeping (Monthly)", description: "Transaction processing, ledgers, reconciliations", prices: { bronze: "$40/mo", silver: "$80/mo", premium: "$150/mo" } },
      { name: "Payroll Processing", description: "Monthly payroll, payslips, PAYE computation", prices: { bronze: "$30/mo", silver: "$60/mo", premium: "$120/mo" } },
      { name: "Financial Statements", description: "Annual income statement, balance sheet, cash flow", prices: { bronze: "$80", silver: "$150", premium: "$280" } },
      { name: "Budget & Forecasting", description: "Annual budgets and cash flow projections", prices: { bronze: "$50", silver: "$90", premium: "$160" } },
      { name: "ZIMRA VAT Returns", description: "Monthly VAT201 preparation and submission", prices: { bronze: "$25", silver: "$40", premium: "$65" } },
      { name: "ZIMRA PAYE Returns", description: "Monthly P2 return preparation and submission", prices: { bronze: "$20", silver: "$35", premium: "$55" } },
      { name: "ZIMRA WHT", description: "Withholding tax computation and submission", prices: { bronze: "$20", silver: "$30", premium: "$50" } },
      { name: "ZIMRA ITF12B Annual", description: "Corporate income tax return", prices: { bronze: "$60", silver: "$100", premium: "$180" } },
      { name: "ZIMRA Objections", description: "Drafting objections and correspondence", prices: { bronze: "$40", silver: "$70", premium: "$130" } },
      { name: "ZIMRA Tax Health Check", description: "Full compliance review and risk identification", prices: { bronze: "$60", silver: "$110", premium: "$200" } },
      { name: "TARMS Assistance", description: "TARMS registration and compliance support", prices: { bronze: "$20", silver: "$35", premium: "$60" } },
      { name: "Sage Pastel Setup", description: "Installation, config, chart of accounts, training", prices: { bronze: "$60", silver: "$110", premium: "$200" } },
      { name: "Sage X3 Guidance", description: "Module config, workflow setup, user training", prices: { bronze: "-", silver: "$150", premium: "$350" } },
      { name: "Tender Writing", description: "Full tender preparation and submission support", prices: { bronze: "$50", silver: "$90", premium: "$160" } },
      { name: "Business Proposals", description: "Investor/client proposals with financials", prices: { bronze: "$50", silver: "$90", premium: "$150" } },
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
      { name: "Website Design", description: "Responsive 5–10 page business website with CMS", prices: { bronze: "$120", silver: "$280", premium: "$550+" } },
      { name: "E-Commerce Website", description: "Online store with PayNow Zimbabwe integration", prices: { bronze: "$300", silver: "$550", premium: "$950+" } },
      { name: "Landing Pages", description: "Single-page promotional / lead-generation pages", prices: { bronze: "$50", silver: "$90", premium: "$150" } },
      { name: "Website Maintenance", description: "Monthly hosting, updates, backups, security", prices: { bronze: "$15/mo", silver: "$30/mo", premium: "$60/mo" } },
      { name: "Graphic Design", description: "Logos, flyers, banners, social media graphics", prices: { bronze: "$8", silver: "$20", premium: "$45" } },
      { name: "Digital Branding", description: "Full brand identity, style guides, print files", prices: { bronze: "$60", silver: "$130", premium: "$280" } },
      { name: "Software Development", description: "Custom business apps and automation systems", prices: { bronze: "$350", silver: "$800", premium: "$2,000+" } },
      { name: "Database Design", description: "Custom architecture, ERD, implementation", prices: { bronze: "$120", silver: "$250", premium: "$500" } },
      { name: "API Integration", description: "Third-party API connections and webhooks", prices: { bronze: "$90", silver: "$180", premium: "$350" } },
      { name: "Mobile App Development", description: "Android / iOS apps for business operations", prices: { bronze: "$500", silver: "$1,200", premium: "$2,500+" } },
      { name: "IT Support & Helpdesk", description: "Remote and on-site technical troubleshooting", prices: { bronze: "$12/hr", silver: "$20/hr", premium: "$35/hr" } },
      { name: "Network Setup", description: "LAN, Wi-Fi, router/switch installation", prices: { bronze: "$60", silver: "$120", premium: "$250" } },
      { name: "CCTV Installation", description: "IP / analog CCTV supply and installation", prices: { bronze: "$120", silver: "$250", premium: "$500" } },
      { name: "Cloud Migration", description: "Migration to AWS, Azure, or Google Cloud", prices: { bronze: "$80", silver: "$180", premium: "$350" } },
      { name: "Cybersecurity Assessment", description: "Vulnerability scanning and risk reporting", prices: { bronze: "$90", silver: "$180", premium: "$320" } },
      { name: "POS System Setup", description: "Point-of-sale hardware and software setup", prices: { bronze: "$100", silver: "$200", premium: "$350" } },
      { name: "Microsoft 365 / Google Workspace", description: "Business email, docs and collaboration setup", prices: { bronze: "$30", silver: "$60", premium: "$110" } },
      { name: "Server Setup & Maintenance", description: "Server installation, config and upkeep", prices: { bronze: "$120", silver: "$250", premium: "$450" } },
      { name: "Data Backup & Recovery", description: "Automated backups and disaster recovery", prices: { bronze: "$40", silver: "$90", premium: "$180" } },
      { name: "SEO & Online Visibility", description: "Search ranking and online visibility (monthly)", prices: { bronze: "$50/mo", silver: "$100/mo", premium: "$180/mo" } },
      { name: "Social Media Management", description: "Content, scheduling and community (monthly)", prices: { bronze: "$40/mo", silver: "$90/mo", premium: "$160/mo" } },
      { name: "QR Code Menus & Catalogues", description: "Digital QR menus and product catalogues", prices: { bronze: "$20", silver: "$40", premium: "$70" } },
      { name: "IT Staff Training", description: "Hands-on training sessions for your team", prices: { bronze: "$30", silver: "$70", premium: "$120" } },
    ],
  },
];

export type Pkg = {
  name: string;
  fee: string;
  period: string;
  from?: boolean;
  size: string;
  highlight?: boolean;
  tagline: string;
  features: string[];
};

export const packages: Pkg[] = [
  {
    name: "Starter",
    fee: "$70",
    period: "/mo",
    size: "Bronze · 1–10 staff",
    tagline: "Compliance essentials for small teams",
    features: ["2 ZIMRA returns", "Monthly bookkeeping", "4 design tasks per month"],
  },
  {
    name: "Business",
    fee: "$160",
    period: "/mo",
    size: "Silver · 11–30 staff",
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
    fee: "$320",
    period: "/mo",
    size: "Premium · 30+ staff",
    tagline: "Everything, under one roof",
    features: [
      "Full ZIMRA compliance",
      "Sage Pastel & X3 support",
      "IT helpdesk",
      "All digital services included",
    ],
  },
  {
    name: "IT Only",
    fee: "$55",
    period: "/mo",
    from: true,
    size: "All sizes",
    tagline: "Keep your digital presence running",
    features: [
      "Website maintenance",
      "IT support",
      "6 design tasks per month",
      "Bronze $55 · Silver $100 · Premium $180",
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
  { title: "Pricing tiered to your size", text: "Bronze, Silver and Premium pricing matched to small, medium and large businesses." },
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
    q: "How does your tiered (Bronze / Silver / Premium) pricing work?",
    a: "Pricing is matched to your business size. Bronze is for small/micro businesses (1–10 staff), Silver for medium businesses (11–30 staff), and Premium for large corporates (30+ staff). Use the tier toggle on the Services page to see the price for your size.",
  },
  {
    q: "Do I have to choose between finance and IT services?",
    a: "Not at all. Many clients use both pillars — for example, bookkeeping and ZIMRA returns alongside a website and IT support. Our retainer packages are designed to bundle them affordably.",
  },
  {
    q: "How do your retainer packages work?",
    a: "You pay a fixed monthly fee and receive an agreed bundle of services each month. Packages are matched to company size: Starter ($70/mo, Bronze), Business ($160/mo, Silver), Enterprise ($320/mo, Premium), and IT Only (from $55/mo, all sizes).",
  },
  {
    q: "Are you registered to handle ZIMRA submissions?",
    a: "Yes. Our dedicated compliance team prepares and submits VAT201, P2 (PAYE), withholding tax, ITF12B annual returns, objections, and conducts full tax health checks.",
  },
  {
    q: "What are your payment terms?",
    a: "We accept USD cash, EcoCash and bank transfer. Project terms are a 50% deposit to start, with the balance due on delivery. Retainers are billed monthly.",
  },
];

export const payment = {
  methods: ["USD cash", "EcoCash", "Bank transfer"],
  terms: "50% deposit, balance on delivery",
};
