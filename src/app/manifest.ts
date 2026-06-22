import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Infinity Nexa Business & IT Services",
    short_name: "Infinity Nexa",
    description:
      "Accounting, ZIMRA compliance and IT solutions under one roof in Harare, Zimbabwe.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1733",
    theme_color: "#0a1733",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
