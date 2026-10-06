"use client";

import { Card } from "@/components/ui/card"
import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"

const projects = [
  {
    client: "King G Lounge & Lifestyle",
    focus: "Digital presence + business solution",
  },
  {
    client: "Envision Strategies",
    focus: "Internal reporting and operational tools",
  },
]

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Real businesses.
              <span className="block text-accent font-normal">Real problems. Real solutions.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A few of the South African businesses we&apos;ve worked with.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScrollStagger className="grid md:grid-cols-2 gap-6" direction="up" stagger={100}>
          {projects.map((project) => (
            <Card key={project.client} className="p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-2xl font-semibold mb-3">{project.client}</h3>
              <p className="text-muted-foreground">{project.focus}</p>
            </Card>
          ))}
        </AnimateOnScrollStagger>
      </div>
    </section>
  )
}
