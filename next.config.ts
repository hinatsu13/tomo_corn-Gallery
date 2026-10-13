import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; Next resizes artwork per device automatically.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
