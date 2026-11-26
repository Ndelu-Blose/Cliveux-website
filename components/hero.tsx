"use client";

import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimateOnMount } from "@/components/animate-on-mount"
import { StartProjectButton } from "@/components/contact-modal-provider"

/**
 * Dot texture that fills the wide edges of the hero and fades out behind the
 * text, so the copy stays clean while the page no longer feels empty at the sides.
 */
function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(var(--color-foreground)_1px,transparent_1.2px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_62%_58%_at_50%_46%,transparent_35%,black_100%)]" />
    </div>
  )
}

/** Real clients only. Add a logo here once a client has agreed to be shown. */
function ClientProof() {
  return (
    <Link
      href="#work"
      className="group mt-12 flex flex-col items-center gap-4 rounded-xl px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:mt-14"
      aria-label="Trusted by King Gee Lifestyle and Envision Strategies. See our work."
    >
      <span className="text-xs text-muted-foreground sm:text-sm">Trusted by local businesses including</span>
      <span className="flex items-center gap-7 sm:gap-9" aria-hidden>
        <Image
          src="/clients/king-gee-lifestyle.png"
          alt=""
          width={939}
          height={558}
          sizes="96px"
          className="h-12 w-auto opacity-70 grayscale transition-opacity duration-300 group-hover:opacity-100 dark:invert sm:h-14"
        />
        <span className="h-8 w-px bg-border" />
        <span className="flex flex-col items-start leading-none text-foreground/60 transition-colors duration-300 group-hover:text-foreground/90">
          <span className="text-base font-semibold uppercase tracking-[0.18em] sm:text-lg">Envision</span>
          <span className="mt-1 text-[0.55rem] font-medium uppercase tracking-[0.42em] text-muted-foreground">
            Strategies
          </span>
        </span>
      </span>
    </Link>
  )
}

export function Hero() {
  return (
    // Natural height (not forced full-screen) so there is no empty band under the content
    // before the next section on tall screens or once the page is scrolled.
    <section className="relative isolate overflow-hidden">
      <HeroBackdrop />
      <div className="mx-auto w-full max-w-7xl px-5 pb-14 pt-[calc(var(--header-height)+3rem)] sm:px-6 sm:pb-16 sm:pt-[calc(var(--header-height)+4.5rem)] lg:px-8 lg:pb-20 lg:pt-[calc(var(--header-height)+5.5rem)]">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <AnimateOnMount direction="up" delay={60}>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3.5 py-1.5 text-xs font-medium text-foreground/80 shadow-sm sm:text-sm">
              <MapPin className="h-3.5 w-3.5 text-accent-text" aria-hidden />
              Based in Durban, built for South African SMMEs
            </p>
          </AnimateOnMount>

          <AnimateOnMount direction="up" delay={160}>
            <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.08] tracking-tight sm:mt-8 sm:text-5xl md:text-[3.5rem] lg:text-6xl lg:leading-[1.05]">
              Websites and digital systems
              <span className="mt-2 block font-normal text-accent-display sm:mt-3">
                that help SMMEs win more clients
              </span>
            </h1>
          </AnimateOnMount>

          <AnimateOnMount direction="up" delay={280}>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">
              We set up your website, business email and the simple systems behind them, so customers can find you,
              trust you and get in touch.
            </p>
          </AnimateOnMount>

          <AnimateOnMount direction="up" delay={400}>
            <div className="mt-9 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <StartProjectButton size="lg" className="w-full sm:w-auto sm:min-w-[11.5rem]" />
              <Button size="lg" variant="brandOutline" asChild className="w-full sm:w-auto sm:min-w-[11.5rem]">
                <Link href="#solutions">See How We Help</Link>
              </Button>
            </div>
          </AnimateOnMount>

          <AnimateOnMount direction="fade" delay={560}>
            <ClientProof />
          </AnimateOnMount>
        </div>
      </div>
    </section>
  )
}
