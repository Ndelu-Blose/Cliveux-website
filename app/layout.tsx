import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cliveux.com"),
  title: {
    default: "CliveUX - Digital Innovation Studio | Websites & Business Systems",
    template: "%s | CliveUX"
  },
  description:
    "We design and develop websites, business systems, and automations that help teams move faster, look professional, and grow. Based in South Africa.",
  keywords: [
    "web development",
    "website design",
    "business systems",
    "automation",
    "UI/UX design",
    "South Africa",
    "Durban",
    "web development services",
    "custom web applications",
  ],
  authors: [{ name: "CliveUX" }],
  creator: "CliveUX",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://cliveux.com",
    siteName: "CliveUX",
    title: "CliveUX - Digital Innovation Studio | Websites & Business Systems",
    description:
      "We design and develop websites, business systems, and automations that help teams move faster, look professional, and grow.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CliveUX - Digital Innovation Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CliveUX - Digital Innovation Studio",
    description:
      "We design and develop websites, business systems, and automations that help teams move faster, look professional, and grow.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`font-sans antialiased ${inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
