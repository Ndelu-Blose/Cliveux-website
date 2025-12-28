import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for CliveUX - Digital Innovation Studio",
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 md:py-28 px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Privacy Policy</h1>
            
            <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
              <p className="text-sm text-muted-foreground">Last updated: {new Date().getFullYear()}</p>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Introduction</h2>
                <p>
                  CliveUX ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Information We Collect</h2>
                <p>
                  We may collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>Project requirements and inquiries</li>
                  <li>Communication preferences</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide our services</li>
                  <li>Send you project updates and communications</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Data Protection</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Your Rights</h2>
                <p>
                  You have the right to access, update, or delete your personal information. To exercise these rights, please contact us using the information provided on our contact page.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact us at:
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

