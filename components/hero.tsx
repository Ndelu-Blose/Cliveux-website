import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-block mb-4 px-4 py-2 border border-border rounded-full text-sm text-muted-foreground">
          Digital Innovation Studio
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-balance mb-8">
          Build digital products that drive
          <span className="block mt-2 text-accent font-normal">measurable results</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance mb-12">
          We design and develop websites, business systems, and automations that help teams move faster, look
          professional, and grow.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" asChild className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8">
            <Link href="#contact">Get a Quote</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="h-12 px-8 bg-transparent">
            <Link href="#services">Explore Services</Link>
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
          <div className="text-center">
            <div className="text-2xl font-semibold text-foreground mb-1">7–14 days</div>
            <div>Typical website delivery</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-2xl font-semibold text-foreground mb-1">Web + Systems</div>
            <div>Built for operations</div>
          </div>
          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-2xl font-semibold text-foreground mb-1">Support ready</div>
            <div>Maintenance & hosting</div>
          </div>
        </div>
      </div>
    </section>
  )
}
