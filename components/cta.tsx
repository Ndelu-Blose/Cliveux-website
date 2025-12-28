"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import ContactModal from "@/components/ContactModal"
import { AnimateOnScroll } from "@/components/animate-on-scroll"

export function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="contact" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll direction="up">
            <Card className="p-6 sm:p-8 md:p-12 lg:p-16 text-center border-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Ready to build something
              <span className="block text-accent font-normal">professional & powerful?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Tell us what you need — we'll reply with a clear plan and quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={() => setOpen(true)}
                className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8"
                aria-label="Get a quote - opens contact modal"
              >
                Get a Quote
              </Button>
              <Button size="lg" variant="outline" asChild className="h-12 px-8 bg-transparent">
                <Link href="#packages" aria-label="View packages section">View Packages</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">Typical response time: 24 hours or less</p>
            </Card>
          </AnimateOnScroll>
        </div>
      </section>

      <ContactModal open={open} onClose={() => setOpen(false)} defaultPackage="Package 2" />
    </>
  )
}
