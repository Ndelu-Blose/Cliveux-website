"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import type { ComponentType } from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { StartProjectButton } from "@/components/contact-modal-provider";
import { SocialLinks, WhatsAppIcon } from "@/components/social-links";
import { EMAIL, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

function GmailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

const primaryChannels: {
  id: string;
  title: string;
  description: string;
  action: string;
  href: string;
  external: boolean;
  ariaLabel: string;
  icon: ComponentType<{ className?: string }>;
  brandColor: string;
  iconBg: string;
}[] = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    description: "Fastest way to reach us. Send a quick message about your business.",
    action: "Start a chat",
    href: whatsappUrl(),
    external: true,
    ariaLabel: "Open WhatsApp chat with CliveUX",
    icon: WhatsAppIcon,
    brandColor: "#25D366",
    iconBg: "bg-[#25D366]/10",
  },
  {
    id: "email",
    title: "Email",
    description: "Best for detailed briefs, quotes and attachments.",
    action: "Send an email",
    href: `mailto:${EMAIL}`,
    external: false,
    ariaLabel: "Send an email to CliveUX",
    icon: GmailIcon,
    brandColor: "#EA4335",
    iconBg: "bg-[#EA4335]/10",
  },
];

export function ContactCard() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-secondary/40 via-background to-background"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <AnimateOnScroll direction="up">
          <div className="mb-10 sm:mb-12 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-text mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-5 text-balance">
              Your business has enough to worry about.
              <span className="block text-accent font-normal">
                Let&apos;s make the digital side simpler.
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Tell us about your business and what&apos;s getting in the way. We&apos;ll reply with a clear plan and quote.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <StartProjectButton size="lg" className="sm:min-w-[180px]" />
              <Button size="lg" variant="brandOutline" asChild className="sm:min-w-[180px]">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={120}>
          <Card className="overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-[0_2px_6px_rgba(0,0,0,0.06),0_30px_70px_-28px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <div
              className="h-px w-full bg-gradient-to-r from-transparent via-accent/70 to-transparent"
              aria-hidden
            />

            <div className="p-5 sm:p-7 md:p-9">
              <div className="mb-6 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold sm:text-xl">Or talk to us directly</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    No forms. Message us and we&apos;ll take it from there.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-accent-text" />
                    Replies within 24 hours
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-background px-3 py-1 text-xs text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 text-accent-text" />
                    Durban, KZN
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                {primaryChannels.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <a
                      key={channel.id}
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      aria-label={channel.ariaLabel}
                      className={cn(
                        "group relative flex gap-4 rounded-xl border border-border/70 bg-background/80 p-5 sm:p-6",
                        "transition-all duration-300 hover:border-accent/50 hover:shadow-md hover:-translate-y-0.5",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                          channel.iconBg
                        )}
                      >
                        <span
                          className="inline-flex"
                          style={{ color: channel.brandColor }}
                        >
                          <Icon className="h-6 w-6" />
                        </span>
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col text-left">
                        <h3 className="font-semibold text-base">
                          {channel.title}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {channel.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-text">
                          {channel.action}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-3 border-t border-border/60 bg-secondary/20 px-6 py-5 sm:flex-row sm:px-9 sm:py-5">
              <p className="text-sm text-muted-foreground">
                Follow CliveUX for recent work and updates
              </p>
              <SocialLinks variant="bar" embedded />
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
