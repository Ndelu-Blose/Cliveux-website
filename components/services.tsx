"use client";

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"
import { services } from "@/content/services"

export function Services() {
  return (
    <section id="solutions" className="py-14 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Four ways we
              <span className="block text-accent-display font-normal">help your business</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get online properly, communicate professionally, make everyday work simpler, and keep it all running
              once it&apos;s live.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScrollStagger
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-6"
          direction="up"
          stagger={100}
        >
          {services.map((service) => (
              <Card
                key={service.number}
                id={service.id}
                className="scroll-mt-28 flex h-full flex-col p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-sm text-accent-text font-semibold mb-4">{service.number}</div>
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
                {service.href && (
                  <Link
                    href={service.href}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-accent-text transition-colors hover:text-foreground"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only"> about {service.title}</span>
                  </Link>
                )}
              </Card>
          ))}
        </AnimateOnScrollStagger>
      </div>
    </section>
  )
}
