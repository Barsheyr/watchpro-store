// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true, // Enforce React best practices
//   experimental: {
//     serverActions: true,
//   },
//   images: {
//     domains: ["images.unsplash.com"], // Allow images from Unsplash
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Add this line for Vercel deployment
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
