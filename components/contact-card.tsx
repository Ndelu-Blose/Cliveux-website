"use client";

import { Card } from "@/components/ui/card";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const WHATSAPP = "27607257297";
const EMAIL = "cliveuxweb@gmail.com";

export function ContactCard() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-6 text-balance">
            Get in touch
            <span className="block text-accent font-normal">We're here to help</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Reach out via WhatsApp for instant responses, or email for detailed inquiries. We typically reply within 24 hours.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* WhatsApp */}
          <Card className="p-6 text-center hover:border-accent/50 transition-colors">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                <MessageCircle className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chat instantly (fastest response)
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-accent hover:underline"
            >
              +27 60 725 7297 →
            </a>
          </Card>

          {/* Email */}
          <Card className="p-6 text-center hover:border-accent/50 transition-colors">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Mail className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Best for detailed requests
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="text-sm font-medium text-accent hover:underline break-all"
            >
              {EMAIL} →
            </a>
          </Card>

          {/* Response Time */}
          <Card className="p-6 text-center hover:border-accent/50 transition-colors">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Response Time</h3>
            <p className="text-sm text-muted-foreground mb-4">
              We aim to reply quickly
            </p>
            <p className="text-sm font-medium text-accent">
              24 hours or less
            </p>
          </Card>

          {/* Location */}
          <Card className="p-6 text-center hover:border-accent/50 transition-colors">
            <div className="mb-4 flex justify-center">
              <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
            </div>
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Based in South Africa
            </p>
            <p className="text-sm font-medium text-accent">
              Durban, SA
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

