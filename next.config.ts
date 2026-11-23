import type { NextConfig } from "next";

const config: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // Social media content planning is part of the Raje Masale case study.
      {
        source: "/projects/social-media-content-strategy",
        destination: "/projects/raje-masale#content-strategy",
        permanent: true,
      },
    ];
  },
};

export default config;
