import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // FragranceFinder API CDN
      { protocol: "https", hostname: "fimgs.net" },
      // Other common perfume image hosts
      { protocol: "https", hostname: "*.fimgs.net" },
      { protocol: "https", hostname: "images.fragrantica.com" },
      { protocol: "https", hostname: "s3.amazonaws.com" },
      { protocol: "https", hostname: "*.s3.amazonaws.com" },
      { protocol: "https", hostname: "cdn.fragrantica.com" },
      { protocol: "https", hostname: "rapidapi.com" },
      { protocol: "https", hostname: "*.rapidapi.com" },
      // Catch-all for any other CDN the API might use
      { protocol: "https", hostname: "**.cloudfront.net" },
      { protocol: "https", hostname: "**.imgix.net" },
      { protocol: "https", hostname: "**.cloudinary.com" },
    ],
  },
};

export default nextConfig;
