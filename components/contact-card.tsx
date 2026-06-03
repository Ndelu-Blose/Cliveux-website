"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import type { ComponentType } from "react";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import { SocialLinks } from "@/components/social-links";
import { EMAIL, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

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
    description: "Fastest way to reach us — chat in real time.",
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
    description: "Best for detailed briefs, quotes, and attachments.",
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
      id="get-in-touch"
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
          <div className="mb-10 sm:mb-12 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 sm:mb-5 text-balance">
              Get in touch
              <span className="block text-accent font-normal">
                We&apos;re here to help
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Pick a channel below. WhatsApp and email get the quickest reply.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={120}>
          <Card className="overflow-hidden rounded-2xl border border-border/80 bg-card/90 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.15)] backdrop-blur-sm">
            <div
              className="h-px w-full bg-gradient-to-r from-transparent via-accent/70 to-transparent"
              aria-hidden
            />

            <div className="p-5 sm:p-7 md:p-9">
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
                      <div className="min-w-0 flex-1 text-left">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-base">
                            {channel.title}
                          </h3>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground/60 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          {channel.description}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center justify-center gap-5 border-t border-border/60 bg-secondary/20 px-6 py-5 sm:py-6">
              <SocialLinks variant="bar" embedded />
            </div>
          </Card>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
