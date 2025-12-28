/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Enable build-time type checking
  },
  images: {
    unoptimized: false, // Enable Next.js image optimization for Vercel
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
