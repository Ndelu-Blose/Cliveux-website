"use client";

import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { StartProjectButton, useContactModal } from "@/components/contact-modal-provider"
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

const navLinks = [
  { href: "/#solutions", label: "Solutions" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
]

export function Header() {
  const { openContact } = useContactModal();
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
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm transition-all duration-300",
        scrolled ? "border-border/60 shadow-sm" : "border-border/40"
      )}>
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid h-[var(--header-height)] grid-cols-[1fr_auto_1fr] items-center">
            <Link
              href="/"
              className="flex items-center gap-2.5 justify-self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-lg"
              aria-label="CliveUX Home"
            >
              <Image
                src="/cx-logo.png"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-xl object-cover"
                priority
              />
              <span className="text-xl font-semibold tracking-tight">CliveUX</span>
            </Link>

            <nav
              className="hidden lg:flex items-center justify-center gap-7"
              aria-label="Main navigation"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center justify-end gap-3 sm:gap-4">
              <StartProjectButton size="sm" className="hidden sm:inline-flex" />

              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
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
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-xl font-medium tracking-tight text-foreground transition-colors hover:text-accent"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <SheetFooter className="mt-auto border-t border-border px-5 py-5">
                    <Button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        openContact();
                      }}
                      variant="brand"
                      size="lg"
                      className="w-full"
                    >
                      Start a Project
                    </Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
  )
}
