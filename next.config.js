/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Configure the 'images' domain for your image URLs
  images: {
    domains: ["qube-gateway.onrender.com"],
  },
};

module.exports = nextConfig;
