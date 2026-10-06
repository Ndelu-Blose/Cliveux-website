"use client";

import { useEffect, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { packages, PackageKey } from "@/content/packages";
import { track } from "@/lib/analytics";
import { Check, Clock, Mail, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/social-links";
import { EMAIL, whatsappUrl } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultPackage?: PackageKey;
};

const inputClass =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/20";

export default function ContactModal({ open, onClose, defaultPackage }: Props) {
  const [pkg, setPkg] = useState<PackageKey>(defaultPackage ?? "Package 2");
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");

  useEffect(() => {
    if (open) {
      setPkg(defaultPackage ?? "Package 2");
      track("contact_modal_open", { defaultPackage: defaultPackage ?? null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const selected = useMemo(
    () => packages.find((p) => p.key === pkg),
    [pkg]
  );

  const waMessage = useMemo(() => {
    const who = name.trim() ? `Name: ${name.trim()}\n` : "";
    const what = need.trim() ? `Need: ${need.trim()}\n` : "";
    return encodeURIComponent(
      `Hi CliveUX 👋\n\nI'd like to start a project.\n\nStage: ${selected?.title ?? pkg}\n${who}${what}\nPlease advise next steps.`
    );
  }, [pkg, selected?.title, name, need]);

  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `New project — ${selected?.title ?? pkg}`
  )}&body=${encodeURIComponent(
    `Hi CliveUX,\n\nI'd like to start a project.\n\nStage: ${selected?.title ?? pkg}\nName: ${name || "—"}\nNeed: ${
      need || "—"
    }\n\nThanks,`
  )}`;

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(next) => {
        if (!next) {
          track("contact_modal_close");
          onClose();
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px] data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />

        <Dialog.Content
          aria-describedby="contact-modal-description"
          className="fixed left-1/2 top-1/2 z-[61] flex w-[calc(100%-2rem)] max-w-xl max-h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_2px_6px_rgba(0,0,0,0.06),0_40px_90px_-30px_rgba(0,0,0,0.55)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
        >
          <div
            className="h-px w-full shrink-0 bg-gradient-to-r from-transparent via-accent/80 to-transparent"
            aria-hidden
          />

          <div className="overflow-y-auto overscroll-contain px-6 pt-6 pb-6 sm:px-8 sm:pt-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent-text">
                  Contact
                </p>
                <Dialog.Title className="mt-2 text-3xl font-light tracking-tight">
                  Start a <span className="font-normal text-accent">project</span>
                </Dialog.Title>
                <Dialog.Description
                  id="contact-modal-description"
                  className="mt-2 text-sm text-muted-foreground"
                >
                  Tell us a little about your business. It takes a minute.
                </Dialog.Description>
              </div>

              <Dialog.Close
                aria-label="Close"
                className="-mr-2 -mt-1 shrink-0 rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <X className="h-5 w-5" />
              </Dialog.Close>
            </div>

            <fieldset className="mt-7">
              <legend className="text-sm font-semibold">Where is your business right now?</legend>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {packages.map((p, index) => {
                  const active = p.key === pkg;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      aria-pressed={active}
                      onClick={() => {
                        setPkg(p.key);
                        track("package_select", { package: p.key });
                      }}
                      className={cn(
                        "relative text-left rounded-xl border p-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                        active
                          ? "border-accent bg-accent/[0.06] shadow-[0_6px_20px_-10px_rgba(0,0,0,0.25)]"
                          : "border-border hover:border-accent/50 hover:-translate-y-0.5"
                      )}
                    >
                      <span
                        className={cn(
                          "absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border transition",
                          active ? "border-accent bg-accent text-foreground" : "border-border bg-background"
                        )}
                        aria-hidden
                      >
                        {active && <Check className="h-3 w-3" strokeWidth={3} />}
                      </span>
                      <span className="block text-xs font-semibold text-accent-text">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <span className="mt-1 block text-base font-semibold">{p.title}</span>
                      <span className="mt-1 block pr-2 text-sm leading-snug text-muted-foreground">
                        {p.headline}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6 grid gap-3">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                aria-label="Your name (optional)"
                autoComplete="name"
                className={inputClass}
              />
              <input
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                placeholder="What are you trying to solve? (optional)"
                aria-label="What are you trying to solve? (optional)"
                className={inputClass}
              />
            </div>
          </div>

          <div className="shrink-0 border-t border-border/70 bg-secondary/40 px-6 py-5 sm:px-8">
            <div className="grid gap-3 sm:grid-cols-[1.3fr_1fr]">
              <Button asChild variant="brand" size="lg" className="w-full px-6">
                <a
                  href={whatsappUrl(waMessage)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => track("contact_whatsapp_click", { package: pkg })}
                >
                  <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366]" />
                  Continue on WhatsApp
                </a>
              </Button>
              <Button asChild variant="brandOutline" size="lg" className="w-full bg-background px-6">
                <a href={mailHref} onClick={() => track("contact_email_click", { package: pkg })}>
                  <Mail className="h-4 w-4" />
                  Send an email
                </a>
              </Button>
            </div>
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 text-accent-text" />
              We usually reply within 24 hours
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
