"use client";

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useContactModal } from "@/components/contact-modal-provider"
import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"

const needs = [
  "A website that makes your business look credible",
  "A way for customers to contact you easily",
  "Better visibility on Google",
  "Online bookings or enquiries",
  "A system to manage your day-to-day operations",
  "A professional domain and business email",
  "Less work being done manually",
]

const paths = [
  {
    quote: "I need a website.",
    answer:
      "We'll build a professional website that represents your business properly and gives customers a clear way to contact you.",
    label: "Explore Websites",
    href: "#websites",
  },
  {
    quote: "My business is growing and things are getting messy.",
    answer: "We'll help turn repetitive manual processes into simple digital systems.",
    label: "Explore Business Systems",
    href: "#business-systems",
  },
  {
    quote: "I already have a website, but it isn't doing much.",
    answer: "We'll help improve your website, Google visibility, performance and digital setup.",
    label: "Improve My Digital Presence",
    href: "#digital-support",
  },
  {
    quote: "I'm not sure what I actually need.",
    answer: "That's okay. Tell us about your business and we'll recommend a sensible starting point.",
    label: "Tell us about your business",
  },
]

export function SmmeFocus() {
  const { openContact } = useContactModal()

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mb-16 sm:mb-20">
          <AnimateOnScroll direction="up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Built around the realities of
              <span className="block text-accent font-normal">running an SMME</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              You don&apos;t need a massive IT department to have good technology. Built for businesses that are
              growing, not corporations with large IT budgets.
            </p>
            <p className="text-sm text-muted-foreground">
              Based in Durban, KwaZulu-Natal · Serving businesses across South Africa
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={120}>
            <p className="font-semibold mb-5">You might simply need:</p>
            <ul className="space-y-3">
              {needs.map((need) => (
                <li key={need} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{need}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-semibold">That&apos;s where CliveUX comes in.</p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll direction="up">
          <h3 className="text-2xl sm:text-3xl font-light tracking-tight mb-8">What are you trying to solve?</h3>
        </AnimateOnScroll>

        <AnimateOnScrollStagger className="grid sm:grid-cols-2 gap-4 sm:gap-6" direction="up" stagger={90}>
          {paths.map((path) => {
            const linkClass =
              "inline-flex items-center gap-2 text-sm font-semibold text-accent-text hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            return (
              <Card key={path.quote} className="flex h-full flex-col p-6 sm:p-8 hover:border-accent/50 transition-colors">
                <p className="text-xl font-semibold mb-3">&ldquo;{path.quote}&rdquo;</p>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{path.answer}</p>
                {path.href ? (
                  <Link href={path.href} className={linkClass}>
                    {path.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <button type="button" onClick={() => openContact()} className={`${linkClass} self-start`}>
                    {path.label} <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </Card>
            )
          })}
        </AnimateOnScrollStagger>
      </div>
    </section>
  )
}
