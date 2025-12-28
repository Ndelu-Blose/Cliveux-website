"use client"

import { useState } from "react"
import Link from "next/link"
import ContactModal from "@/components/ContactModal"
import { MessageCircle, Instagram, Facebook } from "lucide-react"

const WHATSAPP = "27607257297";
const INSTAGRAM = "https://www.instagram.com/cliveuxweb/";
const FACEBOOK = "https://www.facebook.com/share/17aXXGqeur/";

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [open, setOpen] = useState(false)

  return (
    <>
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <div className="text-xl font-semibold mb-4">CliveUX</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                CliveUX builds websites and business systems that help companies grow and operate efficiently.
              </p>
            </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Software Systems
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  UI/UX & Branding
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Maintenance & Hosting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#approach" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#experience" className="hover:text-foreground transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setOpen(true)}
                  className="hover:text-foreground transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-sm">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:hello@clive-ux.com" className="hover:text-foreground transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p>&copy; {currentYear} CliveUX. All rights reserved.</p>
            <p className="text-xs">Based in South Africa, working with local & growing businesses</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-4 sm:gap-6">
              <Link href="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-accent transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9CA3AF] hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <ContactModal open={open} onClose={() => setOpen(false)} defaultPackage="Package 2" />
    </>
  )
}
