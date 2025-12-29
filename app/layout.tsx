import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
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
        // TODO: Create a proper 1200x630px OG image for social sharing
        // Currently using logo as fallback - replace with optimized og-image.png
        url: "/cliveux logo Black.png",
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
    // TODO: Replace with proper og-image.png (1200x630px) for optimal social sharing
    images: ["/cliveux logo Black.png"],
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
    icon: "/favicon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.png",
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J5E9PEGV07"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J5E9PEGV07');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
