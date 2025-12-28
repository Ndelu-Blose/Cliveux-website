import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PreQualification } from "@/components/pre-qualification"
import { Packages } from "@/components/packages"
import { PricingFAQ } from "@/components/pricing-faq"
import { SocialProof } from "@/components/social-proof"
import { Approach } from "@/components/approach"
import { Experience } from "@/components/experience"
import { ContactCard } from "@/components/contact-card"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <PreQualification />
        <Packages />
        <PricingFAQ />
        <SocialProof />
        <Approach />
        <Experience />
        <ContactCard />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
