"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"
import { packages } from "@/content/packages"

const stages = packages.filter((pkg) => pkg.key !== "Package 4")

export function Journey() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-12 sm:mb-16 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Start → Grow → Operate
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A simple digital journey for growing businesses. Start where you are and add more as the business needs it.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScrollStagger className="grid md:grid-cols-3 gap-8 mb-12" direction="up" stagger={100}>
          {stages.map((stage, index) => (
            <div key={stage.key} className="relative border-t-2 border-accent/60 pt-6">
              <div className="text-sm text-accent-text font-semibold mb-2">{(index + 1).toString().padStart(2, "0")}</div>
              <h3 className="text-2xl font-semibold mb-2">{stage.title}</h3>
              <p className="font-medium mb-3">{stage.headline}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{stage.forWho}</p>
            </div>
          ))}
        </AnimateOnScrollStagger>

        <AnimateOnScroll direction="up">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Button size="lg" variant="brandOutline" asChild>
              <Link href="/pricing">See packages & pricing</Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              Something more specific? We also scope custom workflows and applications.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
