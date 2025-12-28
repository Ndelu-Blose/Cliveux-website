"use client";

import { Check } from "lucide-react"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function SocialProof() {
  const proofPoints = [
    {
      title: "Built with modern tools",
      description: "Next.js, secure hosting, performance-first architecture",
    },
    {
      title: "Clear delivery timelines",
      description: "Structured handover and transparent project milestones",
    },
    {
      title: "Support-ready after launch",
      description: "Every project follows a clear discovery → build → launch process",
    },
  ]

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 sm:p-8 md:p-12">
            <div className="mb-6 sm:mb-8 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-3 sm:mb-4 text-balance">
                Every project follows a
                <span className="block text-accent font-normal">clear process</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We use proven methods and modern tools to deliver reliable results on time.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {proofPoints.map((point, index) => (
                <AnimateOnScroll key={point.title} direction="up" delay={index * 100}>
                  <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}

