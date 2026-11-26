"use client";

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"

type Project = {
  client: string
  focus: string
  /** Transparent, single-colour logo in /public/clients. Without one, a text wordmark is shown. */
  logo?: { src: string; width: number; height: number }
  wordmark?: { primary: string; secondary?: string }
}

const projects: Project[] = [
  {
    client: "King G Lounge & Lifestyle",
    focus: "Digital presence + business solution",
    logo: { src: "/clients/king-gee-lifestyle.png", width: 939, height: 558 },
  },
  {
    client: "Envision Strategies",
    focus: "Internal reporting and operational tools",
    wordmark: { primary: "Envision", secondary: "Strategies" },
  },
]

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-text mb-3">Trusted by</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Real businesses.
              <span className="block text-accent-display font-normal">Real problems. Real solutions.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A few of the South African businesses we&apos;ve worked with.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScrollStagger className="grid md:grid-cols-2 gap-6" direction="up" stagger={100}>
          {projects.map((project) => (
            <Card
              key={project.client}
              className="group h-full p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-6 flex h-20 items-center border-b border-border/70 pb-6 sm:h-24">
                {project.logo ? (
                  <Image
                    src={project.logo.src}
                    alt={`${project.client} logo`}
                    width={project.logo.width}
                    height={project.logo.height}
                    sizes="160px"
                    className="h-full w-auto object-contain opacity-75 transition-opacity duration-300 group-hover:opacity-100"
                  />
                ) : project.wordmark ? (
                  <div
                    className="flex flex-col leading-none text-foreground/75 transition-colors duration-300 group-hover:text-foreground"
                    aria-hidden="true"
                  >
                    <span className="text-2xl font-semibold uppercase tracking-[0.18em]">{project.wordmark.primary}</span>
                    {project.wordmark.secondary && (
                      <span className="mt-1.5 text-[0.7rem] font-medium uppercase tracking-[0.42em] text-muted-foreground">
                        {project.wordmark.secondary}
                      </span>
                    )}
                  </div>
                ) : null}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{project.client}</h3>
              <p className="text-muted-foreground">{project.focus}</p>
            </Card>
          ))}
        </AnimateOnScrollStagger>
      </div>
    </section>
  )
}
