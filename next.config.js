/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ["cdn.sanity.io"] },
  eslint: {
    dirs: ["pages", "components", "lib"],
  },
};

module.exports = nextConfig;
