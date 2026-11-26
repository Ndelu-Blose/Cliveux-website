"use client";

import { AnimateOnScroll } from "@/components/animate-on-scroll"

/**
 * Bridge between the hero and the services: names the visitor's situation in one
 * plain paragraph instead of stacked slogan lines, then hands over to "Solutions".
 */
export function Problem() {
  return (
    <section className="border-t border-border/60 px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
      <AnimateOnScroll direction="up">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-end md:gap-14">
          <h2 className="text-balance text-3xl font-light tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            Running a small business is
            <span className="block font-normal text-accent-display">already complicated.</span>
          </h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:pb-1.5">
            Your website, email and everyday systems shouldn&apos;t add to it. We set them up properly and keep them
            running, so technology is one less thing on your plate.
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
