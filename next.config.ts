import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for `next export`
  images: {
    unoptimized: true, // Required because image optimization doesn't work with static export
  },
  basePath: "./", // Replace with your GitHub repo name if deploying to user.github.io/repo
  trailingSlash: true, // Optional: Helps avoid broken links when using `next export`
};
export default nextConfig;
