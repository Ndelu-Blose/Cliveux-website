"use client";

import { Card } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description: "High-performing, mobile-first websites built to convert and build trust.",
    details: ["Custom business websites", "Landing pages & portfolios", "E-commerce setup", "SEO + performance basics"],
  },
  {
    number: "02",
    title: "Software Systems & Automation",
    description: "We build internal systems that streamline operations and reduce manual work.",
    details: [
      "Bookings & scheduling",
      "Client / customer management (CRM)",
      "Inventory & tracking systems",
      "Dashboards & reporting",
    ],
  },
  {
    number: "03",
    title: "UI/UX & Branding",
    description: "Clean, modern interfaces and consistent branding that elevates credibility.",
    details: ["UI/UX design", "Design systems / components", "Brand direction", "Conversion-focused layouts"],
  },
  {
    number: "04",
    title: "Hosting, Maintenance & Support",
    description: "Reliable hosting, security updates, and ongoing improvements after launch.",
    details: ["Domain + hosting setup", "Monthly maintenance", "Speed & security updates", "Content updates & support"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Services that solve
              <span className="block text-accent font-normal">real problems</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Focused expertise where design meets business impact. Each service is tailored to your specific challenges
              and goals.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <AnimateOnScroll key={service.number} direction="up" delay={index * 100}>
              <Card className="p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <div className="text-sm text-accent font-semibold mb-4">{service.number}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
