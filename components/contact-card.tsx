"use client";

import { Card } from "@/components/ui/card";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

const WHATSAPP = "27607257297";
const EMAIL = "cliveuxweb@gmail.com";

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat instantly (fastest response)",
    link: `https://wa.me/${WHATSAPP}`,
    text: "+27 60 725 7297 →",
    isExternal: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Best for detailed requests",
    link: `mailto:${EMAIL}`,
    text: EMAIL + " →",
    isExternal: false,
  },
  {
    icon: Clock,
    title: "Response Time",
    description: "We aim to reply quickly",
    text: "24 hours or less",
    isExternal: false,
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Based in South Africa",
    text: "Durban, SA",
    isExternal: false,
  },
];

export function ContactCard() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll direction="up">
          <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
              Get in touch
              <span className="block text-accent font-normal">We're here to help</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reach out via WhatsApp for instant responses, or email for detailed inquiries. We typically reply within 24 hours.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const CardContent = (
              <>
                <div className="mb-4 flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {card.description}
                </p>
                {card.link ? (
                  <a
                    href={card.link}
                    target={card.isExternal ? "_blank" : undefined}
                    rel={card.isExternal ? "noopener noreferrer" : undefined}
                    className="text-sm font-medium text-accent hover:underline break-all"
                  >
                    {card.text}
                  </a>
                ) : (
                  <p className="text-sm font-medium text-accent">
                    {card.text}
                  </p>
                )}
              </>
            );

            return (
              <AnimateOnScroll key={card.title} direction="up" delay={index * 100}>
                <Card className="p-6 text-center hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                  {CardContent}
                </Card>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

