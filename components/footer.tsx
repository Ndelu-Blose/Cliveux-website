import Link from "next/link"
import { MapPin } from "lucide-react"
import { FooterSocialIcons } from "@/components/social-links"
import { EMAIL, LEGAL_NAME, REGISTRATION_NUMBER } from "@/lib/contact"
import { serviceHref, services } from "@/content/services"

const footerLinkClass =
  "text-white/60 hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
      <footer className="relative bg-foreground text-background border-t border-white/10 pt-12 pb-24 px-4 sm:px-6 lg:px-8 2xl:pb-10">
        {/* pb-24 keeps the legal links clear of the fixed back-to-top button; wide screens have room beside it. */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
          aria-hidden
        />

        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
            <div>
              <div className="text-xl font-semibold mb-4 text-white">CliveUX</div>
              <p className="text-sm text-white/60 leading-relaxed">
                Digital solutions for South African SMMEs. We help growing businesses look professional, work smarter
                and build the digital foundations they need to grow.
              </p>
              <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-white/45">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                <span>Based in Durban, KwaZulu-Natal · Serving businesses across South Africa</span>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm text-white">Solutions</h3>
              <ul className="space-y-2.5 text-sm">
                {services.map((service) => (
                  <li key={service.id}>
                    <Link href={serviceHref(service)} className={footerLinkClass}>
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm text-white">Company</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/#about" className={footerLinkClass}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className={footerLinkClass}>
                    Contact
                  </Link>
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

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="text-xs leading-relaxed text-white/45 sm:text-sm">
              <p>
                &copy; {currentYear} {LEGAL_NAME}. All rights reserved.
              </p>
              <p className="text-white/35">Company Reg. No. {REGISTRATION_NUMBER}</p>
            </div>

            <nav aria-label="Legal" className="flex items-center gap-4 text-sm">
              <Link href="/privacy" className={footerLinkClass} prefetch={true}>
                Privacy Policy
              </Link>
              <span className="text-white/20" aria-hidden>
                ·
              </span>
              <Link href="/terms" className={footerLinkClass} prefetch={true}>
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </footer>
  )
}
