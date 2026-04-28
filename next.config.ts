import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Exclude SVGs from Next.js default file-loader rule
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.(".svg"));
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/;
    }

    // Only transform SVGs imported from JS/TS (not font SVGs referenced from CSS)
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  // image domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
