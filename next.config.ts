import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/shadcn-blocks" : "",
  assetPrefix: isGithubPages ? "/shadcn-blocks/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
