"use client";

import { useState, useEffect } from "react";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import ContactModal from "@/components/ContactModal"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
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
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
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
                <SheetContent
                  side="right"
                  overlayClassName="bg-black/30"
                  className="flex h-full min-h-0 w-[82%] max-w-sm flex-col gap-0 border-l p-0 shadow-2xl sm:max-w-sm"
                >
                  <SheetHeader className="flex flex-row items-center justify-between gap-2 border-b border-border px-5 py-4 pr-14">
                    <SheetTitle className="text-lg">Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                      Navigation menu for mobile devices
                    </SheetDescription>
                  </SheetHeader>
                  <nav
                    className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto px-5 py-6"
                    aria-label="Mobile navigation"
                  >
                    <SheetClose asChild>
                      <Link
                        href="#services"
                        className="text-xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Services
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="#approach"
                        className="text-xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Approach
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="#experience"
                        className="text-xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Experience
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        href="#contact"
                        className="text-xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Contact
                      </Link>
                    </SheetClose>
                  </nav>
                  <SheetFooter className="mt-auto border-t border-border px-5 py-5">
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
                  </SheetFooter>
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
