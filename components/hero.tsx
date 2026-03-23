"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimateOnMount } from "@/components/animate-on-mount"

export function Hero() {
  return (
    <section className="relative px-5 sm:px-6 lg:px-8 pt-24 pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <AnimateOnMount direction="down" delay={100}>
          <div className="mb-6 inline-block px-4 py-2 text-sm text-muted-foreground border border-border rounded-full">
            Digital Innovation Studio
          </div>
        </AnimateOnMount>

        <AnimateOnMount direction="up" delay={200}>
          <h1 className="max-w-[320px] text-balance text-5xl font-light leading-[0.95] tracking-tight sm:max-w-2xl sm:text-6xl md:text-7xl lg:max-w-4xl lg:text-8xl">
            Build digital products that drive
            <span className="mt-2 block font-normal text-accent">measurable results</span>
          </h1>
        </AnimateOnMount>

        <AnimateOnMount direction="up" delay={400}>
          <p className="mx-auto mt-6 max-w-[340px] text-balance text-base leading-8 text-muted-foreground sm:max-w-2xl sm:text-lg">
            We design and develop websites, business systems, and automations that help teams move faster, look
            professional, and grow.
          </p>
        </AnimateOnMount>

        <AnimateOnMount direction="up" delay={600}>
          <div className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              asChild
              className="h-12 w-full max-w-[230px] bg-foreground px-8 text-background hover:bg-foreground/90 sm:w-auto"
            >
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-12 w-full max-w-[230px] bg-transparent px-8 sm:w-auto"
            >
              <Link href="#services">Explore Services</Link>
            </Button>
          </div>
        </AnimateOnMount>

        <AnimateOnMount direction="up" delay={800}>
          <div className="mt-14 flex flex-col flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground sm:mt-16 sm:flex-row sm:gap-8">
            <div className="text-center">
              <div className="text-2xl font-semibold text-foreground mb-1">7–14 days</div>
              <div>Typical website delivery</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-foreground mb-1">Web + Systems</div>
              <div>Built for operations</div>
            </div>
            <div className="hidden sm:block h-12 w-px bg-border" />
            <div className="text-center">
              <div className="text-2xl font-semibold text-foreground mb-1">Support ready</div>
              <div>Maintenance & hosting</div>
            </div>
          </div>
        </AnimateOnMount>
      </div>
    </section>
  )
}
