"use client";

import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll";

export function Approach() {
  const steps = [
    {
      title: "Tell us about your business",
      description: "A quick WhatsApp, email or call about what you do and what's getting in the way.",
    },
    {
      title: "We understand the problem",
      description: "We ask the right questions so we're solving the real issue.",
    },
    {
      title: "We recommend the right solution",
      description: "A clear plan, timeline and quote, sized to where your business is now.",
    },
    {
      title: "We build",
      description: "We build your website or system and keep you updated along the way.",
    },
    {
      title: "We launch & support",
      description: "We go live, show you how it works, and stay available to keep it running.",
    },
  ]

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              How working with
              <span className="block text-accent font-normal">CliveUX works</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A simple, straightforward process from first message to launch.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScrollStagger
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8"
          direction="up"
          stagger={90}
        >
          {steps.map((step, index) => (
              <div key={step.title} className="relative">
              <div className="text-5xl font-light text-muted mb-4">{(index + 1).toString().padStart(2, "0")}</div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-border" />
              )}
              </div>
          ))}
        </AnimateOnScrollStagger>
      </div>
    </section>
  )
}
