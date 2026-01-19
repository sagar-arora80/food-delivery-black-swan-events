import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/food-delivery-black-swan-events",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
