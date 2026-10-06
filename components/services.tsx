"use client";

import { Card } from "@/components/ui/card"
import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"

export const solutions = [
  {
    id: "websites",
    number: "01",
    title: "Websites",
    description: "A professional digital home for your business.",
    details: [
      "Business websites",
      "Landing pages",
      "E-commerce",
      "WhatsApp integration",
      "Domain & business email",
      "Google & SEO foundations",
    ],
  },
  {
    id: "business-systems",
    number: "02",
    title: "Business Systems",
    description: "Simple software that helps you run your business better.",
    details: [
      "Bookings",
      "Customer management",
      "Orders",
      "Inventory",
      "Internal workflows",
      "Dashboards & reporting",
    ],
  },
  {
    id: "digital-support",
    number: "03",
    title: "Digital Support",
    description: "Keep your digital presence working after launch.",
    details: [
      "Hosting",
      "Maintenance & website updates",
      "SEO improvements",
      "Google Business Profile",
      "Technical support",
      "Ongoing improvements",
    ],
  },
]

export function Services() {
  return (
    <section id="solutions" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Three ways we
              <span className="block text-accent font-normal">help your business</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get online properly, make everyday work simpler, and keep it all running once it&apos;s live.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScrollStagger
          className="grid md:grid-cols-3 gap-6"
          direction="up"
          stagger={100}
        >
          {solutions.map((solution) => (
              <Card
                key={solution.number}
                id={solution.id}
                className="scroll-mt-28 p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-sm text-accent-text font-semibold mb-4">{solution.number}</div>
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
          ))}
        </AnimateOnScrollStagger>
      </div>
    </section>
  )
}
