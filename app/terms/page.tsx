import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for CliveUX - Digital Innovation Studio",
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-6 sm:mb-8">Terms of Service</h1>
            
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using CliveUX's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Services</h2>
                <p>
                  CliveUX provides web development, design, and related digital services. All projects are subject to a written agreement outlining scope, timeline, and payment terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Payment Terms</h2>
                <p>
                  Payment terms are specified in each project agreement. Typically, projects require a deposit to begin work, with the remainder due upon completion or at agreed milestones.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Intellectual Property</h2>
                <p>
                  Upon full payment, you own the work product created specifically for your project. CliveUX retains the right to use the work in portfolios and case studies unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Limitation of Liability</h2>
                <p>
                  CliveUX shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to this page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Contact Us</h2>
                <p>
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <p>
                  Email: cliveuxweb@gmail.com<br />
                  WhatsApp: +27 60 725 7297
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

