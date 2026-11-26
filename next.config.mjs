import path from "path"
import { fileURLToPath } from "url"

const root = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: false, // Enable Next.js image optimization for Vercel
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination: "/favicon.png",
        permanent: true,
      },
      // The page lists packages, not prices; keep old links and search results working.
      {
        source: "/pricing",
        destination: "/packages",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
