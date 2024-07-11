/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  assetPrefix: isProd ? "https://www.baidu.com" : undefined,
  distDir: "build",
  env: {
    customKey: "ice",
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    optimizePackageImports: ["package-name"],
  },
};

module.exports = nextConfig;
