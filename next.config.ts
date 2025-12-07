import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
  // cacheComponents: true,
  // logging: {
  //   fetches: {
  //     fullUrl: true,
  //   },
  // },
  allowedDevOrigins: ["*"],
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
