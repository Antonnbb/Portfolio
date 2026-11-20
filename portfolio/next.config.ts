import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Portfolio",
  images: {
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
};

export default nextConfig;
