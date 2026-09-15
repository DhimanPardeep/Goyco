import type { NextConfig } from "next";

const basePath = "/Goyco";
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: basePath,
  assetPrefix: `${basePath}/`,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
