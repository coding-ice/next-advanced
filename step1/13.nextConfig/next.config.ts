import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/todos",
        destination: "https://jsonplaceholder.typicode.com/todos",
      },
    ];
  },
  // assetPrefix:
  //   // .next/static/
  //   process.env.NODE_ENV === "production" ? "https://cdn.ice.com" : "",
  devIndicators: {
    position: "top-right",
  },
  distDir: "build",
  env: {},
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    mdxRs: true,
    webVitalsAttribution: ["CLS", "LCP"],
  },
  // output: "standalone",
  productionBrowserSourceMaps: true,
  typedRoutes: true,
};

export default nextConfig;
