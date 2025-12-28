"use client";

import { useState } from "react";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Packages } from "@/components/packages"
import { Button } from "@/components/ui/button"
import ContactModal from "@/components/ContactModal"

export default function PricingPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header />
      <main>
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Transparent pricing.
              <span className="block text-accent font-normal">Fast delivery.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-pretty px-2">
              Every package includes hosting, domain management, and post-launch support. No hidden fees, no surprises.
            </p>
            <Button size="lg" className="text-base">
              Schedule a Call
            </Button>
          </div>
        </section>

        <Packages />

        {/* FAQ / Additional Info */}
        <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-center">Common Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">How does payment work?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We typically split payment into two milestones: 50% upfront to start, and 50% on completion. For
                  larger projects (Package 4), we can structure payments across multiple milestones.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">What if I need something custom?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No problem. We can customize any package or build something entirely from scratch. Schedule a call and
                  we'll create a tailored proposal based on your specific needs.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer ongoing support after launch?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Yes. All packages include a support channel for handover. For ongoing updates, maintenance, and
                  changes, check out our monthly maintenance add-on.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I upgrade later?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Absolutely. Start with what you need now and add features or upgrade your package as your business
                  grows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">Ready to get started?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Get a quote tailored to your needs. We'll reply within 24 hours with a clear plan and timeline.
            </p>
            <Button 
              size="lg" 
              className="text-base"
              onClick={() => setOpen(true)}
              aria-label="Get a quote - opens contact modal"
            >
              Get a Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <ContactModal open={open} onClose={() => setOpen(false)} defaultPackage="Package 2" />
    </>
  )
}
