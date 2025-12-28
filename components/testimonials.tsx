import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "CliveUX delivered exactly what we needed — a professional website that actually converts. The process was smooth and they were responsive throughout.",
    author: "Business Owner",
    company: "Local Service Business",
    location: "Durban, SA",
  },
  {
    quote: "Working with CliveUX transformed our online presence. They built a custom booking system that saved us hours every week. Highly recommended.",
    author: "Operations Manager",
    company: "Healthcare Practice",
    location: "South Africa",
  },
  {
    quote: "Fast delivery, clear communication, and a website that looks professional. The hosting and support setup made everything easy for us.",
    author: "Marketing Director",
    company: "Retail Business",
    location: "Durban, SA",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6 text-balance">
            Trusted by
            <span className="block text-accent font-normal">growing businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See what our clients say about working with CliveUX.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 md:p-8 hover:border-accent/50 transition-colors">
              <blockquote className="text-base md:text-lg leading-relaxed mb-6 text-muted-foreground">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-sm">{testimonial.author}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {testimonial.company} • {testimonial.location}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

