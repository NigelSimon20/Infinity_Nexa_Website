import type { MetadataRoute } from "next";

const SITE_URL = "https://www.infinitynexa.co.zw";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/packages", priority: 0.9, freq: "monthly" },
    { path: "/about", priority: 0.7, freq: "monthly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
  ];

  return routes.map(({ path, priority, freq }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: freq,
    priority,
  }));
}
