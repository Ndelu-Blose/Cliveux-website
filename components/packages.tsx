"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useContactModal } from "@/components/contact-modal-provider"
import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"
import { packages as stages, type PackageKey } from "@/content/packages"

const stageByKey = Object.fromEntries(stages.map((stage) => [stage.key, stage]))

const packages = [
  {
    number: "01",
    key: "Package 1" as PackageKey,
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
    key: "Package 2" as PackageKey,
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
    canInclude: [
      "More pages or a custom layout",
      "Blog or updates section",
      "Multi-step quote forms",
      "Analytics (traffic + enquiries)",
      "Speed + image optimisation",
    ],
  },
  {
    number: "03",
    key: "Package 3" as PackageKey,
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
  {
    number: "04",
    key: "Package 4" as PackageKey,
    delivery: "Scoped per project",
    features: [
      "Discovery session to map your workflow",
      "Integrations with tools you already use",
      "Custom applications, portals or internal tools",
      "Phased delivery with milestone payments",
      "Hosting + domain management included",
    ],
  },
].map((pkg) => ({
  ...pkg,
  name: stageByKey[pkg.key].title,
  headline: stageByKey[pkg.key].headline,
  tagline: stageByKey[pkg.key].forWho,
}))

const includedInAll = [
  "Hosting + domain management",
  "Security basics + SSL",
  "Support channel for handover",
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
  const { openContact } = useContactModal()

  return (
      <section id="packages" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Start, grow,
              <span className="block text-accent font-normal">then operate</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pick the stage that matches your business today. You can move up as you grow, and every stage includes
              hosting and domain management.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScrollStagger
          className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12"
          direction="up"
          stagger={100}
        >
          {packages.map((pkg) => (
              <Card
                key={pkg.number}
                className={`p-8 relative ${pkg.popular ? "border-accent border-2" : "hover:border-accent/50"} transition-all duration-300 hover:shadow-lg`}
              >
              {pkg.popular && (
                <div className="absolute -top-3 left-8 bg-accent text-background px-4 py-1 text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-sm text-accent-text font-semibold mb-2">{pkg.number}</div>
              <h3 className="text-2xl font-semibold mb-1">{pkg.name}</h3>
              <p className="font-medium mb-2">{pkg.headline}</p>
              <p className="text-sm text-muted-foreground mb-4">{pkg.tagline}</p>
              <div className="mb-6 pb-6 border-b border-border">
                <div className="text-sm text-muted-foreground">Typical delivery</div>
                <div className="text-lg font-semibold text-accent-text">{pkg.delivery}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {pkg.canInclude && (
                <div className="mb-8 -mt-2">
                  <p className="text-sm font-medium mb-2">Can include when you need it:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pkg.canInclude.join(" · ")}</p>
                </div>
              )}
              <Button
                className="w-full"
                variant={pkg.popular ? "brand" : "brandOutline"}
                size="lg"
                onClick={() => openContact(pkg.key)}
              >
                Start a Project
              </Button>
              </Card>
          ))}
        </AnimateOnScrollStagger>

        <AnimateOnScroll direction="up" delay={400}>
          <div className="border-t border-border pt-10 sm:pt-12">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h3 className="text-lg font-semibold mb-5">
                  Included at every stage
                </h3>
                <ul className="space-y-3">
                  {includedInAll.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Add-ons</h3>
                <p className="text-sm text-muted-foreground mb-5">
                  Optional extras you can add at any stage.
                </p>
                <ul className="space-y-3">
                  {addons.map((addon) => (
                    <li
                      key={addon}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                      <span>{addon}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
