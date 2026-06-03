"use client"

import { useState } from "react"
import Link from "next/link"
import ContactModal from "@/components/ContactModal"
import { FooterSocialIcons } from "@/components/social-links"
import { EMAIL } from "@/lib/contact"
import { cn } from "@/lib/utils"

const footerLinkClass =
  "text-white/60 hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [open, setOpen] = useState(false)

  return (
    <>
      <footer className="relative bg-foreground text-background border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
            <div>
              <div className="text-xl font-semibold mb-4 text-white">CliveUX</div>
              <p className="text-sm text-white/60 leading-relaxed">
                CliveUX builds websites and business systems that help companies grow and operate efficiently.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm text-white">Services</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#services" className={footerLinkClass}>
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link href="#services" className={footerLinkClass}>
                    Software Systems
                  </Link>
                </li>
                <li>
                  <Link href="#services" className={footerLinkClass}>
                    UI/UX & Branding
                  </Link>
                </li>
                <li>
                  <Link href="#services" className={footerLinkClass}>
                    Maintenance & Hosting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm text-white">Company</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#approach" className={footerLinkClass}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#experience" className={footerLinkClass}>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#services" className={footerLinkClass}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setOpen(true)}
                    className={cn(footerLinkClass, "text-left")}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm text-white">Connect</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href={`mailto:${EMAIL}`} className={footerLinkClass}>
                    Email
                  </a>
                </li>
              </ul>
              <FooterSocialIcons className="mt-5" />
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center gap-4 text-sm">
                <Link href="/privacy" className={footerLinkClass} prefetch={true}>
                  Privacy
                </Link>
                <span className="text-white/20" aria-hidden>
                  ·
                </span>
                <Link href="/terms" className={footerLinkClass} prefetch={true}>
                  Terms
                </Link>
              </div>

              <div className="space-y-1.5 text-sm text-white/55">
                <p>&copy; {currentYear} CliveUX. All rights reserved.</p>
                <p className="text-xs text-white/35">
                  Based in South Africa, working with local & growing businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <ContactModal open={open} onClose={() => setOpen(false)} defaultPackage="Package 2" />
    </>
  )
}
