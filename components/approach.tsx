export function Approach() {
  const steps = [
    {
      title: "Discovery",
      description: "We understand your business goals, audience, and what success looks like.",
    },
    {
      title: "Plan",
      description: "We map the pages/features, timelines, and content needed to launch.",
    },
    {
      title: "Build",
      description: "We design and develop with a clean, modern look and strong performance.",
    },
    {
      title: "Launch & Support",
      description: "We deploy, connect the domain, and keep your site/system maintained.",
    },
  ]

  return (
    <section id="approach" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
            A process built on
            <span className="block text-accent font-normal">collaboration</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every project is unique, but the approach stays consistent: research-driven, strategically focused, and
            execution-ready.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="text-5xl font-light text-muted mb-4">{(index + 1).toString().padStart(2, "0")}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
