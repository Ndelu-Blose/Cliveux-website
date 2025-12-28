"use client";

import { useState } from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactModal from "@/components/ContactModal"

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-semibold tracking-tight focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded" aria-label="CliveUX Home">
              CliveUX
            </Link>

            <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
              <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded">
                Services
              </Link>
              <Link href="#approach" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded">
                Approach
              </Link>
              <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded">
                Experience
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded">
                Contact
              </Link>
            </nav>

            <Button 
              onClick={() => setOpen(true)}
              className="bg-foreground text-background hover:bg-foreground/90"
              aria-label="Get a quote - opens contact modal"
            >
              Get a Quote
            </Button>
          </div>
        </div>
      </header>

      <ContactModal open={open} onClose={() => setOpen(false)} defaultPackage="Package 2" />
    </>
  )
}
