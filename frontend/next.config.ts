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
  reactStrictMode: true, // Enforce React best practices
  experimental: {
    // Update serverActions to use object syntax instead of boolean
    serverActions: {
      // You can specify options here if needed
      bodySizeLimit: "2mb",
    },
  },
  images: {
    domains: ["images.unsplash.com", "cdn.sanity.io"], // Allow images from Unsplash and Sanity
  },
};

module.exports = nextConfig;
