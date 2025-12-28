import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function PricingFAQ() {
  const faqs = [
    {
      question: "Do you offer payment splits?",
      answer: "Yes, we can arrange payment splits for larger projects. Typically, we request a deposit to begin work, with the remainder due upon completion or at agreed milestones.",
    },
    {
      question: "Can I upgrade later?",
      answer: "Absolutely. You can upgrade your package at any time. We'll apply any payments you've already made toward the upgraded package.",
    },
    {
      question: "Do you manage the domain for me?",
      answer: "Yes, domain management is included in all packages. We handle the setup, configuration, and can assist with renewals. You maintain full ownership of your domain.",
    },
    {
      question: "What happens after launch?",
      answer: "After launch, we provide a handover session and ongoing support channel. All packages include hosting and basic maintenance. We're available for updates, small changes, and troubleshooting.",
    },
    {
      question: "How do I get started?",
      answer: "Click 'Get Started' on any package or use the contact form. We'll reply within 24 hours with a clear plan, timeline, and quote tailored to your needs.",
    },
  ]

  return (
    <section className="py-20 md:py-28 px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
            Pricing
            <span className="block text-accent font-normal">FAQ</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Common questions about packages, payments, and what to expect.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

