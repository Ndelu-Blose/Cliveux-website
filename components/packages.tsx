"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import ContactModal from "@/components/ContactModal"
import type { PackageKey } from "@/content/packages"

const packages = [
  {
    number: "01",
    name: "Starter Website",
    tagline: "For new businesses that need a clean online presence fast.",
    delivery: "5–7 days",
    features: [
      "1–3 pages (Home, About, Services/Contact)",
      "Mobile-first design",
      "Basic SEO setup (titles, descriptions, indexing)",
      "WhatsApp button + contact form",
      "Basic performance + security setup",
      "Hosting + domain management included",
    ],
  },
  {
    number: "02",
    name: "Business Website",
    tagline: "For growing businesses that need credibility + lead generation.",
    delivery: "7–14 days",
    popular: true,
    features: [
      "4–7 pages",
      "Strong homepage structure (services, process, trust sections)",
      "Gallery/portfolio section",
      "Testimonials section",
      "Lead capture form (quote request)",
      "On-page SEO (better structure + headings)",
      "Hosting + domain management included",
    ],
  },
  {
    number: "03",
    name: "Pro Website + Growth",
    tagline: "For brands that need advanced features + marketing readiness.",
    delivery: "2–3 weeks",
    features: [
      "8–12 pages (or custom layout)",
      "Blog or Updates section (optional)",
      "Advanced forms (multi-step quote form)",
      "Basic analytics setup (traffic + conversions)",
      "Speed optimisation + image optimisation",
      "1–2 design revision rounds (structured)",
      "Hosting + domain management included",
    ],
  },
  {
    number: "04",
    name: "Business System / Custom Web App",
    tagline: "For businesses needing automation (bookings, tracking, dashboards, CRM-lite).",
    delivery: "3–6+ weeks",
    features: [
      "Requirements + workflow planning",
      "Custom system pages (admin + staff views)",
      "Database + user roles (login/permissions)",
      "Dashboards + reporting",
      "Deployment + handover + training session",
      "Hosting + domain management included",
    ],
  },
]

const addons = [
  "Extra pages",
  "Copywriting (professional wording for all pages)",
  "Logo / brand kit (colors, fonts, social templates)",
  "Google Business Profile setup/optimisation",
  "SEO boost package (keywords + content + technical SEO)",
  "E-commerce (products + payment integration)",
  "Booking system",
  "Monthly maintenance plan (updates + backups + small changes)",
  "Social media content pack (carousels + captions)",
]

export function Packages() {
  const [open, setOpen] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState<PackageKey>("Package 2")

  const packageKeyMap: Record<string, PackageKey> = {
    "01": "Package 1",
    "02": "Package 2",
    "03": "Package 3",
    "04": "Package 4",
  }

  const handleGetStarted = (pkgNumber: string) => {
    const packageKey = packageKeyMap[pkgNumber] || "Package 2"
    setSelectedPackage(packageKey)
    setOpen(true)
  }

  return (
    <>
      <section id="packages" className="py-20 md:py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
            Choose your
            <span className="block text-accent font-normal">package</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clear pricing, fast delivery, and everything you need to get online. All packages include hosting and domain
            management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {packages.map((pkg) => (
            <Card
              key={pkg.number}
              className={`p-8 relative ${pkg.popular ? "border-accent border-2" : "hover:border-accent/50"} transition-colors`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-8 bg-accent text-background px-4 py-1 text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-sm text-accent font-semibold mb-2">{pkg.number}</div>
              <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{pkg.tagline}</p>
              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm text-muted-foreground">Typical delivery</div>
                <div className="text-lg font-semibold text-accent">{pkg.delivery}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full" 
                variant={pkg.popular ? "default" : "outline"}
                onClick={() => handleGetStarted(pkg.number)}
              >
                Get a Quote
              </Button>
            </Card>
          ))}
        </div>

        {/* Important Note */}
        <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-12">
          <h4 className="font-semibold mb-2 flex items-center gap-2">
            <Check className="h-5 w-5 text-accent" />
            Included in ALL packages
          </h4>
          <div className="text-sm text-muted-foreground space-y-1 ml-7">
            <p>✓ Hosting + Domain Management</p>
            <p>✓ Security basics + SSL</p>
            <p>✓ Support channel for handover</p>
          </div>
        </div>

        {/* Add-ons */}
        <div className="max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">Add-ons</h3>
          <p className="text-sm text-muted-foreground mb-6">Choose anytime to enhance your package</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {addons.map((addon) => (
              <div key={addon} className="flex items-start gap-3 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                <span>{addon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <ContactModal open={open} onClose={() => setOpen(false)} defaultPackage={selectedPackage} />
    </>
  )
}
