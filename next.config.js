/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    esmExternals: "loose",
  },
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "notion.so",
      "https://www.notion.so",
    ],
  },
};

module.exports = nextConfig;
