"use client";

import { useEffect, useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { packages, PackageKey } from "@/content/packages";
import { services } from "@/content/services";
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
  /** Service to preselect: a service id, title or short title from content/services. */
  defaultService?: string;
};

const NOT_SURE_LABEL = "Not sure yet";

/** Resolves a service id, title or short title to its id. */
function resolveServiceId(value?: string) {
  if (!value) return undefined;
  const v = value.trim().toLowerCase();
  return services.find(
    (s) => s.id === v || s.title.toLowerCase() === v || s.shortTitle.toLowerCase() === v
  )?.id;
}

const inputClass =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-accent focus:ring-2 focus:ring-accent/20";

const chipBase =
  "inline-flex h-10 items-center gap-1.5 rounded-full border px-4 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";
const chipActive = "border-accent bg-accent/[0.06] text-foreground shadow-[0_6px_20px_-12px_rgba(0,0,0,0.3)]";
const chipIdle = "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground";

export default function ContactModal({ open, onClose, defaultPackage, defaultService }: Props) {
  const [pkg, setPkg] = useState<PackageKey>(defaultPackage ?? "Package 2");
  const [serviceIds, setServiceIds] = useState<string[]>([]);
  const [notSure, setNotSure] = useState(false);
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");

  useEffect(() => {
    if (open) {
      setPkg(defaultPackage ?? "Package 2");
      const preset = resolveServiceId(defaultService);
      setServiceIds(preset ? [preset] : []);
      setNotSure(false);
      track("contact_modal_open", { defaultPackage: defaultPackage ?? null, service: defaultService ?? null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const selected = useMemo(
    () => packages.find((p) => p.key === pkg),
    [pkg]
  );

  // Keep the order the services are listed in, not the order they were tapped.
  const chosenServices = useMemo(
    () => services.filter((s) => serviceIds.includes(s.id)),
    [serviceIds]
  );
  const servicesText = notSure
    ? NOT_SURE_LABEL
    : chosenServices.map((s) => s.title).join(", ");
  const servicesLine = servicesText ? `Services: ${servicesText}\n` : "";

  const toggleService = (id: string) => {
    const nowSelected = !serviceIds.includes(id);
    setServiceIds((prev) => (nowSelected ? [...prev, id] : prev.filter((x) => x !== id)));
    if (nowSelected) setNotSure(false);
    track("service_select", { service: id, selected: nowSelected });
  };

  const toggleNotSure = () => {
    const next = !notSure;
    setNotSure(next);
    if (next) setServiceIds([]);
    track("service_select", { service: "not-sure", selected: next });
  };

  const waMessage = useMemo(() => {
    const who = name.trim() ? `Name: ${name.trim()}\n` : "";
    const what = need.trim() ? `Need: ${need.trim()}\n` : "";
    return `Hi CliveUX 👋\n\nI'd like to start a project.\n\nStage: ${selected?.title ?? pkg}\n${servicesLine}${who}${what}\nPlease advise next steps.`;
  }, [pkg, selected?.title, servicesLine, name, need]);

  const subjectServices = notSure ? "" : chosenServices.map((s) => s.shortTitle).join(" + ");
  const mailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `New project — ${subjectServices ? `${subjectServices} · ` : ""}${selected?.title ?? pkg}`
  )}&body=${encodeURIComponent(
    `Hi CliveUX,\n\nI'd like to start a project.\n\nStage: ${selected?.title ?? pkg}\n${servicesLine}Name: ${name || "—"}\nNeed: ${
      need || "—"
    }\n\nThanks,`
  )}`;

  const trackedServices = notSure ? ["not-sure"] : serviceIds;

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
          className="fixed left-1/2 top-1/2 z-[61] flex w-[calc(100%-2rem)] max-w-2xl max-h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-[0_2px_6px_rgba(0,0,0,0.06),0_40px_90px_-30px_rgba(0,0,0,0.55)] outline-none data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
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

            <fieldset className="mt-6">
              <legend className="text-sm font-semibold">
                What do you need help with?{" "}
                <span className="font-normal text-muted-foreground">Pick any that apply.</span>
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {services.map((s) => {
                  const active = serviceIds.includes(s.id);
                  return (
                    <button
                      key={s.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => toggleService(s.id)}
                      className={cn(chipBase, active ? chipActive : chipIdle)}
                    >
                      {active && <Check className="h-3.5 w-3.5 text-accent-text" strokeWidth={3} aria-hidden />}
                      {s.shortTitle}
                    </button>
                  );
                })}
                <button
                  type="button"
                  aria-pressed={notSure}
                  onClick={toggleNotSure}
                  className={cn(chipBase, "border-dashed", notSure ? chipActive : chipIdle)}
                >
                  {notSure && <Check className="h-3.5 w-3.5 text-accent-text" strokeWidth={3} aria-hidden />}
                  {NOT_SURE_LABEL}
                </button>
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
                  onClick={() => track("contact_whatsapp_click", { package: pkg, services: trackedServices })}
                >
                  <WhatsAppIcon className="h-[18px] w-[18px] text-[#25D366]" />
                  Continue on WhatsApp
                </a>
              </Button>
              <Button asChild variant="brandOutline" size="lg" className="w-full bg-background px-6">
                <a href={mailHref} onClick={() => track("contact_email_click", { package: pkg, services: trackedServices })}>
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
