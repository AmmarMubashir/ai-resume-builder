import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ggg5njlo3vpwl99i.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
