import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Packages } from "@/components/packages"
import { StartProjectButton } from "@/components/contact-modal-provider"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start, Grow, Operate or Custom: website and business system packages for South African SMMEs, with hosting, domain management and post-launch support included.",
  alternates: { canonical: "/pricing" },
}

const faqs = [
  {
    question: "How does payment work?",
    answer:
      "We typically split payment into two milestones: 50% upfront to start, and 50% on completion. For larger or custom work, we can structure payments across multiple milestones.",
  },
  {
    question: "What if I need something custom?",
    answer:
      "That's what the Custom stage is for. Tell us about your business and we'll put together a proposal for your specific workflows, integrations or application.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every stage includes a support channel for handover. For ongoing updates, maintenance and improvements, add a monthly maintenance plan.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Absolutely. Start with what you need now and move to the next stage as your business grows.",
  },
]

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 pb-16 pt-[calc(var(--header-height)+3rem)] sm:px-6 sm:pb-20 sm:pt-[calc(var(--header-height)+4rem)] md:pb-28 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Start where you are.
              <span className="block text-accent font-normal">Grow from there.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-pretty px-2">
              Get online, turn your website into a business tool, then build the system behind the business. Every stage
              includes hosting, domain management and post-launch support.
            </p>
            <StartProjectButton size="lg" className="text-base" />
          </div>
        </section>

        <Packages />

        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center">Common Questions</h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Tell us about your business. We&apos;ll reply within 24 hours with a clear plan and timeline.
            </p>
            <StartProjectButton size="lg" className="text-base" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
