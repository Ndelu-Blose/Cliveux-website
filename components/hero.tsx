"use client";

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AnimateOnMount } from "@/components/animate-on-mount"
import { StartProjectButton } from "@/components/contact-modal-provider"

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col border-b border-border/50">
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-20 pt-[var(--header-height)] sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <AnimateOnMount direction="up" delay={120}>
            <h1 className="text-balance text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.06]">
              Digital solutions for
              <span className="mt-3 block font-normal text-accent sm:mt-4">
                businesses ready to grow
              </span>
            </h1>
          </AnimateOnMount>

          <AnimateOnMount direction="up" delay={280}>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">
              CliveUX helps South African SMMEs build a stronger digital presence, streamline everyday work and
              create systems that support growth.
            </p>
            <p className="mt-4 text-sm font-medium tracking-wide text-foreground/80">
              Websites · Business Systems · Digital Support
            </p>
          </AnimateOnMount>

          <AnimateOnMount direction="up" delay={420}>
            <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:mt-11 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <StartProjectButton size="lg" className="w-full sm:w-auto sm:min-w-[11.5rem]" />
              <Button size="lg" variant="brandOutline" asChild className="w-full sm:w-auto sm:min-w-[11.5rem]">
                <Link href="#solutions">See How We Help</Link>
              </Button>
            </div>
            <p className="mt-6 text-xs text-muted-foreground sm:text-sm">
              Built for South African SMMEs. Based in Durban.
            </p>
          </AnimateOnMount>
        </div>
      </div>
    </section>
  )
}
