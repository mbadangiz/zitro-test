import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.zitro.ir",
        pathname: "/gallery/downloadFileById/**",
      },
    ],
  },
};

export default nextConfig;
