import Link from "next/link"
import { FooterSocialIcons } from "@/components/social-links"
import { EMAIL } from "@/lib/contact"

const footerLinkClass =
  "text-white/60 hover:text-accent transition-colors focus-visible:outline-none focus-visible:text-accent"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
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
                Digital solutions for South African SMMEs. We help growing businesses look professional, work smarter
                and build the digital foundations they need to grow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-sm text-white">Solutions</h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/#websites" className={footerLinkClass}>
                    Websites
                  </Link>
                </li>
                <li>
                  <Link href="/#business-systems" className={footerLinkClass}>
                    Business Systems
                  </Link>
                </li>
                <li>
                  <Link href="/#digital-support" className={footerLinkClass}>
                    Digital Support
                  </Link>
                </li>
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
                  <Link href="/#work" className={footerLinkClass}>
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className={footerLinkClass}>
                    Pricing
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
                  Based in Durban, KwaZulu-Natal · Serving businesses across South Africa
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
