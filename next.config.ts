import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project (a stray lockfile lives in $HOME).
  turbopack: {
    root: __dirname,
  },

  // Don't advertise the framework.
  poweredByHeader: false,

  // Smaller, faster image payloads.
  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Tree-shake icon imports so only used icons ship.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
      },
      {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
      },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
