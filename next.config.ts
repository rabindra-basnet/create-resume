import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Required for `next export`
  images: {
    unoptimized: true, // Required because image optimization doesn't work with static export
  },
  trailingSlash: true, // Optional: Helps avoid broken links when using `next export`
};
export default nextConfig;
