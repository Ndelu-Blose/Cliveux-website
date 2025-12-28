"use client";

import { useState, useEffect } from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ContactModal from "@/components/ContactModal"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

export function Header() {
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm transition-all duration-300",
        scrolled ? "border-border/60 shadow-sm" : "border-border/40"
      )}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

            <div className="flex items-center gap-4">
              <Button 
                onClick={() => setOpen(true)}
                className="hidden sm:flex bg-foreground text-background hover:bg-foreground/90"
                aria-label="Get a quote - opens contact modal"
              >
                Get a Quote
              </Button>

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon" aria-label="Open mobile menu">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                      Navigation menu for mobile devices
                    </SheetDescription>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 mt-8">
                    <SheetClose asChild>
                      <Link 
                        href="#services" 
                        className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Services
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link 
                        href="#approach" 
                        className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Approach
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link 
                        href="#experience" 
                        className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Experience
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link 
                        href="#contact" 
                        className="text-base font-medium text-foreground hover:text-accent transition-colors py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </SheetClose>
                    <div className="pt-4 border-t border-border mt-4">
                      <Button 
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setOpen(true);
                        }}
                        className="w-full bg-foreground text-background hover:bg-foreground/90"
                        aria-label="Get a quote - opens contact modal"
                      >
                        Get a Quote
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <ContactModal open={open} onClose={() => setOpen(false)} defaultPackage="Package 2" />
    </>
  )
}
