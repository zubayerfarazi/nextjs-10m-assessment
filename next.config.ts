import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.10minuteschool.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "s3.ap-southeast-1.amazonaws.com",
        pathname: "/cdn.10minuteschool.com/images/**",
      },
    ],
  },
};

export default nextConfig;
