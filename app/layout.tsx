import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { BackToTop } from "@/components/back-to-top"
import { ContactModalProvider } from "@/components/contact-modal-provider"
import { EMAIL } from "@/lib/contact"
import { SOCIAL_PLATFORMS } from "@/lib/social-links"
import "./globals.css"

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CliveUX",
  description:
    "Websites, business systems and digital support for South African SMMEs.",
  url: "https://cliveux.co.za",
  logo: "https://cliveux.co.za/cx-logo.png",
  image: "https://cliveux.co.za/opengraph-image",
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Durban",
    addressRegion: "KwaZulu-Natal",
    addressCountry: "ZA",
  },
  areaServed: { "@type": "Country", name: "South Africa" },
  knowsAbout: ["Website design", "Business systems", "Website hosting and maintenance", "SEO"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CliveUX solutions",
    itemListElement: ["Websites", "Business Systems", "Digital Support"].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
  sameAs: SOCIAL_PLATFORMS.map((platform) => platform.href),
}

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cliveux.co.za"),
  title: {
    default: "CliveUX | Digital solutions for South African SMMEs",
    template: "%s | CliveUX"
  },
  description:
    "CliveUX helps South African SMMEs build a stronger digital presence, streamline everyday work and create systems that support growth. Websites, business systems and digital support. Based in Durban.",
  keywords: [
    "SMME websites",
    "small business website South Africa",
    "business systems for small businesses",
    "website design Durban",
    "Durban web developer",
    "booking system South Africa",
    "website hosting and maintenance",
    "Google Business Profile setup",
    "KwaZulu-Natal",
    "South Africa",
  ],
  authors: [{ name: "CliveUX" }],
  creator: "CliveUX",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://cliveux.co.za",
    siteName: "CliveUX",
    title: "CliveUX | Digital solutions for South African SMMEs",
    description:
      "We help growing businesses look professional, work smarter and build the digital foundations they need to grow.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CliveUX | Digital solutions for South African SMMEs",
    description:
      "We help growing businesses look professional, work smarter and build the digital foundations they need to grow.",
  },
  alternates: {
    canonical: "/",
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
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
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
        <ContactModalProvider>{children}</ContactModalProvider>
        <BackToTop />
        <Analytics />
      </body>
    </html>
  )
}
