import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

export function PreQualification() {
  const goodFit = [
    "Need a professional online presence quickly",
    "Want something that converts, not just looks good",
    "Prefer WhatsApp/email over long forms",
  ]

  const notGoodFit = [
    "Want the cheapest option available",
    "Need everything done \"tomorrow\"",
    "Aren't ready to invest in your digital presence",
  ]

  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
            Who this is
            <span className="block text-accent font-normal">for (and not for)</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We work best with businesses that value quality, clear communication, and long-term growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <Card className="p-6 sm:p-8 border-2 border-accent/20 bg-accent/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-2xl font-semibold">Good fit if you:</h3>
            </div>
            <ul className="space-y-3">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 sm:p-8 border-2 border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <X className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold">Not a good fit if you:</h3>
            </div>
            <ul className="space-y-3">
              {notGoodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <X className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}

