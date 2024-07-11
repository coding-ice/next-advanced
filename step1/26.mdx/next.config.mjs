/** @type {import('next').NextConfig} */
import withMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["tsx", "mdx", "ts"],
};

export default withMDX()(nextConfig);
