"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll"

const lines = [
  "Your website shouldn't be.",
  "Your systems shouldn't be.",
  "Your technology shouldn't be another thing to worry about.",
]

export function Problem() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <AnimateOnScroll direction="up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-8 sm:mb-10 text-balance">
            Running a small business is
            <span className="block text-accent font-normal">already complicated</span>
          </h2>
          <div className="space-y-2 text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
