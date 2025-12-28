"use client";

import { Card } from "@/components/ui/card"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

const industries = [
  "Local businesses & services",
  "Retail & eCommerce",
  "Healthcare & professional services",
  "Education & public sector",
  "Non-profits & community projects",
]

const expertise = [
  {
    category: "Specializations",
    items: [
      "Fast websites",
      "Business automation",
      "Online booking systems",
      "Custom dashboards",
      "Secure deployments",
    ],
  },
  {
    category: "Tools & Methods",
    items: ["Next.js / React", ".NET / APIs", "Tailwind UI", "Database design", "Analytics & SEO basics"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Experience across
              <span className="block text-accent font-normal">business & growth</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We build solutions for startups and growing businesses — from simple websites to operational systems.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Industries</h3>
            <div className="space-y-4">
              {industries.map((industry) => (
                <div key={industry} className="flex items-start gap-3">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {expertise.map((group) => (
              <div key={group.category}>
                <h3 className="text-xl font-semibold mb-4">{group.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <div key={item} className="px-4 py-2 bg-background border border-border rounded-full text-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <AnimateOnScroll direction="up" delay={300}>
          <Card className="p-6 sm:p-8 md:p-12 bg-foreground text-background border-foreground">
            <div className="max-w-3xl">
              <blockquote className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed mb-4 sm:mb-6">
              "The best solutions feel simple — because the complexity is handled behind the scenes."
            </blockquote>
              <div className="text-sm opacity-80">— CliveUX Approach</div>
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
