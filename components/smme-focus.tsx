"use client";

import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  Globe,
  LayoutDashboard,
  Mail,
  MessageCircle,
  Search,
  Workflow,
  type LucideIcon,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { useContactModal } from "@/components/contact-modal-provider"
import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"
import { cn } from "@/lib/utils"

const needs: { text: string; icon: LucideIcon; href?: string }[] = [
  { text: "A website that makes your business look credible", icon: Globe },
  { text: "A way for customers to contact you easily", icon: MessageCircle },
  { text: "Better visibility on Google", icon: Search },
  { text: "Online bookings or enquiries", icon: CalendarCheck },
  // Non-breaking hyphens (U+2011) stop "day-to-day" splitting across lines.
  { text: "A system to manage your day‑to‑day operations", icon: LayoutDashboard },
  { text: "A professional domain and business email", icon: Mail, href: "/business-email" },
  { text: "Less work being done manually", icon: Workflow },
]

// Every tile is the same height (auto-rows-fr on the grid) with icon and text centred,
// so one- and two-line items line up instead of leaving a ragged grid.
const needTile =
  "flex h-full min-h-[4.5rem] items-center gap-3.5 rounded-xl border border-border/70 bg-card px-4 py-3 text-sm leading-snug text-foreground/80 text-pretty"

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
              <span className="block text-accent-display font-normal">running an SMME</span>
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
            <ul className="grid gap-3 sm:grid-cols-2 sm:auto-rows-fr">
              {needs.map((need) => {
                const Icon = need.icon
                const content = (
                  <>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent-text ring-1 ring-inset ring-accent/20">
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span>{need.text}</span>
                  </>
                )
                return (
                  <li key={need.text}>
                    {need.href ? (
                      <Link
                        href={need.href}
                        className={cn(
                          needTile,
                          "group transition-[border-color,box-shadow,color] duration-200 hover:border-accent/60 hover:text-foreground hover:shadow-[0_8px_24px_-16px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        )}
                      >
                        {content}
                        {/* Only this tile is a link, so show it at rest, not just on hover. */}
                        <ArrowUpRight
                          className="ml-auto h-4 w-4 shrink-0 self-start text-accent-text/70 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-text"
                          aria-hidden="true"
                        />
                      </Link>
                    ) : (
                      <div className={needTile}>{content}</div>
                    )}
                  </li>
                )
              })}
              <li>
                <Link
                  href="#solutions"
                  className="group flex h-full min-h-[4.5rem] items-center justify-between gap-3 rounded-xl bg-foreground px-4 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                >
                  That&apos;s where CliveUX comes in.
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 text-accent transition-colors group-hover:bg-accent group-hover:text-foreground">
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            </ul>
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
