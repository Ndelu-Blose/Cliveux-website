"use client";

import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"

const reasons = [
  {
    title: "Practical",
    description: "We focus on solving an actual business problem, not adding technology for the sake of it.",
  },
  {
    title: "Accessible",
    description: "Our solutions are designed with growing businesses in mind, with budgets to match.",
  },
  {
    title: "Built around you",
    description: "Your website or system should fit how your business operates.",
  },
  {
    title: "Long-term",
    description: "We stay on after launch and can keep supporting and improving your digital setup.",
  },
]

export function WhyCliveux() {
  return (
    <section id="about" className="scroll-mt-20 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-foreground text-background">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent mb-3">Why CliveUX</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Technology shouldn&apos;t make running your business harder
            </h2>
            <p className="text-lg text-background/70 leading-relaxed">
              Sometimes the answer is a website. Sometimes it&apos;s automation or a custom system. Sometimes it&apos;s
              simply fixing a broken process. We use the right technology to solve the problem.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScrollStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" direction="up" stagger={90}>
          {reasons.map((reason) => (
            <div key={reason.title} className="border-t border-background/20 pt-6">
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-sm text-background/70 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </AnimateOnScrollStagger>
      </div>
    </section>
  )
}
