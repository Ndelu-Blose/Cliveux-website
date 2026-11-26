import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StartProjectButton } from "@/components/contact-modal-provider"
import { AnimateOnScroll, AnimateOnScrollStagger } from "@/components/animate-on-scroll"

const SERVICE = "Business Email & Workspace"

export const metadata: Metadata = {
  title: "Business Email & Workspace",
  description:
    "Professional business email on your own domain for South African SMMEs. CliveUX sets up and manages Microsoft 365, Google Workspace, Zoho Workplace and Titan Email, including DNS, security and migration.",
  alternates: { canonical: "/business-email" },
}

const eyebrow = "text-xs font-medium uppercase tracking-[0.22em] text-accent-text mb-3"
const h2 = "text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance"
const sectionShell = "py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8"

const problems = [
  {
    title: "Free addresses cost you trust",
    description:
      "An @gmail.com or @yahoo.com address on a quote or invoice makes it harder for new customers to tell you apart from someone who isn't a real business.",
  },
  {
    title: "Unmanaged email leaves gaps",
    description:
      "Shared passwords, mailboxes tied to former staff and no spam or spoofing protection put your customer conversations at risk.",
  },
]

const services = [
  {
    number: "01",
    title: "Professional business email",
    description: "Branded email addresses on your business domain, such as you@yourbusiness.co.za.",
  },
  {
    number: "02",
    title: "Email hosting",
    description: "Reliable email that suits the size of your team and the way your business works.",
  },
  {
    number: "03",
    title: "Productivity tools",
    description: "Calendars, file storage and documents through Zoho Workplace, Google Workspace or Microsoft 365.",
  },
  {
    number: "04",
    title: "Setup & migration",
    description: "Domain connection, DNS records, mailbox creation and moving your existing email across.",
  },
  {
    number: "05",
    title: "Ongoing management",
    description: "Adding and removing users, password resets, account administration and technical support.",
  },
]

const platforms = [
  {
    name: "Zoho Workplace",
    description: "Affordable business email and productivity tools.",
    tag: "Value",
  },
  {
    name: "Google Workspace",
    description: "Gmail, Drive, Docs and real-time collaboration.",
  },
  {
    name: "Microsoft 365",
    description: "Outlook, OneDrive, Teams and Microsoft's productivity apps.",
  },
  {
    name: "Titan Email",
    description: "Business email without the need for a full productivity suite.",
  },
]

const steps = [
  {
    number: "01",
    title: "Consultation",
    description: "We look at your team size, budget and how you work, then recommend the right platform.",
  },
  {
    number: "02",
    title: "Setup",
    description: "We connect your domain, configure DNS and email security, create mailboxes and migrate old email.",
  },
  {
    number: "03",
    title: "Ongoing management",
    description: "We stay on to manage accounts, handle changes and help when something isn't working.",
  },
]

export default function BusinessEmailPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <section className="px-4 pb-16 pt-[calc(var(--header-height)+3rem)] sm:px-6 sm:pb-20 sm:pt-[calc(var(--header-height)+4rem)] md:pb-28 lg:px-8 border-b border-border/50">
          <div className="mx-auto max-w-4xl text-center">
            <p className={eyebrow}>Business Email &amp; Workspace</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Your business deserves more
              <span className="block text-accent font-normal">than a free email address.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 sm:mb-10 text-pretty px-2">
              Professional business email, connected to your domain and managed with the right tools for your
              business.
            </p>
            <div className="mx-auto flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <StartProjectButton size="lg" service={SERVICE} className="w-full sm:w-auto">
                Get started with business email
              </StartProjectButton>
              <Button size="lg" variant="brandOutline" asChild className="w-full sm:w-auto sm:min-w-[11.5rem]">
                <Link href="#platforms">See platforms</Link>
              </Button>
            </div>
            <p className="mt-8 text-xs sm:text-sm font-medium tracking-wide text-foreground/70">
              Zoho Workplace · Google Workspace · Microsoft 365
            </p>
          </div>
        </section>

        {/* 2. The problem */}
        <section className={sectionShell}>
          <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-16">
            <AnimateOnScroll direction="up">
              <p className={eyebrow}>Why it matters</p>
              <h2 className={h2}>
                Give your business a more
                <span className="block text-accent font-normal">professional way to work</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                CliveUX helps small businesses choose, configure and manage the right email and productivity tools.
                Whether you need one mailbox or a complete digital workspace, we set it up without the technical
                complexity.
              </p>
            </AnimateOnScroll>

            <AnimateOnScrollStagger className="grid gap-8 self-center" direction="up" stagger={100}>
              {problems.map((problem) => (
                <div key={problem.title} className="border-t border-border pt-6">
                  <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </AnimateOnScrollStagger>
          </div>
        </section>

        {/* 3. What we take care of */}
        <section className={`${sectionShell} bg-secondary/30`}>
          <div className="mx-auto max-w-7xl">
            <AnimateOnScroll direction="up">
              <div className="mb-12 sm:mb-16 max-w-2xl">
                <p className={eyebrow}>What we take care of</p>
                <h2 className={h2}>
                  Everything your business needs
                  <span className="block text-accent font-normal">to communicate professionally</span>
                </h2>
              </div>
            </AnimateOnScroll>

            <AnimateOnScrollStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" direction="up" stagger={90}>
              {services.map((service) => (
                <Card
                  key={service.number}
                  className="h-full p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="text-sm text-accent-text font-semibold mb-4">{service.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </Card>
              ))}
            </AnimateOnScrollStagger>
          </div>
        </section>

        {/* 4. Platforms */}
        <section id="platforms" className={sectionShell}>
          <div className="mx-auto max-w-7xl">
            <AnimateOnScroll direction="up">
              <div className="mb-12 sm:mb-16 max-w-2xl">
                <p className={eyebrow}>Platforms</p>
                <h2 className={h2}>
                  Choose the workspace
                  <span className="block text-accent font-normal">that works for you</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We work with established platforms and help you choose one based on your team size, budget and
                  day-to-day needs.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScrollStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" direction="up" stagger={90}>
              {platforms.map((platform) => (
                <Card
                  key={platform.name}
                  className="h-full p-6 sm:p-8 hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-semibold">{platform.name}</h3>
                    {platform.tag && (
                      <span className="shrink-0 rounded-full border border-accent/60 px-2.5 py-0.5 text-xs font-medium text-accent-text">
                        {platform.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{platform.description}</p>
                </Card>
              ))}
            </AnimateOnScrollStagger>

            <p className="mt-8 text-sm text-muted-foreground">
              Provider availability, features and subscription costs are subject to change.
            </p>
          </div>
        </section>

        {/* 5. Ownership promise */}
        <section className={`${sectionShell} bg-foreground text-background`}>
          <div className="mx-auto max-w-4xl">
            <AnimateOnScroll direction="up">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent mb-3">Our promise</p>
              <h2 className={h2}>
                Your business. Your accounts.
                <span className="block text-accent font-normal">Your ownership.</span>
              </h2>
              <p className="text-lg text-background/70 leading-relaxed max-w-2xl">
                Your digital assets should stay yours. Your domain, email accounts and business data remain under
                your ownership, while CliveUX looks after the technical setup and ongoing management.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* 6. Getting started */}
        <section className={`${sectionShell} bg-secondary/30`}>
          <div className="mx-auto max-w-7xl">
            <AnimateOnScroll direction="up">
              <div className="mb-12 sm:mb-16 max-w-2xl">
                <p className={eyebrow}>Getting started</p>
                <h2 className={h2}>
                  From free address to
                  <span className="block text-accent font-normal">professional workspace</span>
                </h2>
              </div>
            </AnimateOnScroll>

            <AnimateOnScrollStagger className="grid md:grid-cols-3 gap-8" direction="up" stagger={100}>
              {steps.map((step) => (
                <div key={step.number} className="border-t border-border pt-6">
                  <div className="text-sm text-accent-text font-semibold mb-3">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              ))}
            </AnimateOnScrollStagger>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className={h2}>Let&apos;s get your business connected.</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Talk to CliveUX about setting up your professional business email and digital workspace.
            </p>
            <StartProjectButton size="lg" service={SERVICE} className="text-base">
              Request a business email quote
            </StartProjectButton>
            <p className="mt-8 text-sm text-muted-foreground">
              Building a website with us? We can set up your domain, email and hosting as one package.{" "}
              <Link href="/packages" className="font-medium text-accent-text underline-offset-4 hover:underline">
                See packages →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
