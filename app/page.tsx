import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Services } from "@/components/services"
import { SmmeFocus } from "@/components/smme-focus"
import { Journey } from "@/components/journey"
import { Work } from "@/components/work"
import { WhyCliveux } from "@/components/why-cliveux"
import { Approach } from "@/components/approach"
import { ContactCard } from "@/components/contact-card"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <SmmeFocus />
        <Journey />
        <Work />
        <WhyCliveux />
        <Approach />
        <ContactCard />
      </main>
      <Footer />
    </>
  )
}
