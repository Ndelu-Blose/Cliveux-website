import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { EMAIL, WHATSAPP_DISPLAY } from "@/lib/contact"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How CliveUX collects, uses and protects personal information in line with POPIA.",
  alternates: { canonical: "/privacy" },
}

const h2 = "text-2xl font-semibold text-foreground mt-8 mb-4"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-4 pb-16 pt-[calc(var(--header-height)+3rem)] sm:px-6 sm:pb-20 sm:pt-[calc(var(--header-height)+4rem)] md:pb-28 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-6 sm:mb-8">Privacy Policy</h1>

            <div className="max-w-none text-muted-foreground space-y-6 leading-relaxed">
              <p className="text-sm">Last updated: 6 October 2026</p>

              <section>
                <h2 className={h2}>1. Introduction</h2>
                <p>
                  CliveUX (&quot;we&quot;, &quot;our&quot; or &quot;us&quot;) is a Durban-based business that builds
                  websites, business systems and digital support for South African SMMEs. We respect your privacy and
                  process personal information in line with the Protection of Personal Information Act, 2013
                  (POPIA). This policy explains what we collect, why, and the choices you have.
                </p>
              </section>

              <section>
                <h2 className={h2}>2. Information we collect</h2>
                <p>Information you give us when you contact us by WhatsApp, email or social media, such as:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your name, business name and contact details</li>
                  <li>Details about your business and what you need help with</li>
                  <li>Project content you share with us (text, images, logins you choose to provide)</li>
                </ul>
                <p className="mt-4">Information collected automatically when you visit the site:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Google Analytics</strong>: pages visited, approximate location,
                    device and browser type, and how you arrived at the site. Google uses cookies for this.
                  </li>
                  <li>
                    <strong className="text-foreground">Vercel Analytics</strong>: anonymous page-view and performance
                    data, without cookies.
                  </li>
                  <li>Basic usage events, such as when the contact options are opened or a contact link is clicked.</li>
                </ul>
                <p className="mt-4">
                  The contact form on this site does not store anything on our servers. It only prepares a WhatsApp
                  message or email for you to send.
                </p>
              </section>

              <section>
                <h2 className={h2}>3. How we use your information</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your enquiry and prepare quotes</li>
                  <li>To deliver, support and maintain the work we do for you</li>
                  <li>To understand how the website is used so we can improve it</li>
                  <li>To meet our legal and accounting obligations</li>
                </ul>
                <p className="mt-4">We do not sell your personal information, and we do not use it for unrelated marketing without your consent.</p>
              </section>

              <section>
                <h2 className={h2}>4. Sharing and third parties</h2>
                <p>
                  We use trusted service providers to run the website and communicate with you, including Vercel
                  (hosting and analytics), Google (analytics and email) and Meta (WhatsApp). Some of these providers
                  store data outside South Africa. Where that happens, we rely on providers that apply safeguards
                  comparable to POPIA.
                </p>
              </section>

              <section>
                <h2 className={h2}>5. Cookies</h2>
                <p>
                  Google Analytics sets cookies to measure visits. You can block or delete cookies in your browser
                  settings, or use Google&apos;s opt-out browser add-on. The site works without them.
                </p>
              </section>

              <section>
                <h2 className={h2}>6. How long we keep information</h2>
                <p>
                  We keep enquiry and project information only as long as needed for the purpose it was collected,
                  or as required by law, and then delete or anonymise it.
                </p>
              </section>

              <section>
                <h2 className={h2}>7. Security</h2>
                <p>
                  We take reasonable technical and organisational measures to protect your information. No method of
                  transmission over the internet is completely secure, but we work to keep risks low.
                </p>
              </section>

              <section>
                <h2 className={h2}>8. Your rights under POPIA</h2>
                <p>You may ask us to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Confirm what personal information we hold about you and give you a copy</li>
                  <li>Correct or update it</li>
                  <li>Delete it, where we are not required to keep it</li>
                  <li>Stop using it for a particular purpose, or object to its processing</li>
                </ul>
                <p className="mt-4">
                  If you are not satisfied with how we handle your information, you can complain to the Information
                  Regulator (South Africa) at{" "}
                  <a href="https://inforegulator.org.za" className="text-foreground underline underline-offset-4" target="_blank" rel="noreferrer">
                    inforegulator.org.za
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className={h2}>9. Contact and information officer</h2>
                <p>
                  For privacy questions or requests, contact the CliveUX information officer:
                </p>
                <p>
                  Email: <a href={`mailto:${EMAIL}`} className="text-foreground underline underline-offset-4">{EMAIL}</a>
                  <br />
                  WhatsApp: {WHATSAPP_DISPLAY}
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
