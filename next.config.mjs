/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    CLOUDINARY_PRESET: process.env.CLOUDINARY_PRESET,
  },
};

export default nextConfig;
