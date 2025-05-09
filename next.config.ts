import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none';",
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
