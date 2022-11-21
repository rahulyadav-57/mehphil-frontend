/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["127.0.0.1", "mehphil-api.cerebza.com"],
  },
};

module.exports = nextConfig;
