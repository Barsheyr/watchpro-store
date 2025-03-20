/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enforce React best practices
  experimental: {},
  images: {
    domains: ["images.unsplash.com"], // Allow images from Unsplash
  },
};

module.exports = nextConfig;
