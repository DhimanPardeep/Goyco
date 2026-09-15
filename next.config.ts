import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export
  },
  basePath: "/Goyco", // only needed for project pages, see note below
  assetPrefix: "/Goyco/", // only needed for project pages
};

export default nextConfig;
