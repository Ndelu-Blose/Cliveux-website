"use client";

import { useEffect, useMemo, useState } from "react";
import { packages, PackageKey } from "@/content/packages";
import { track } from "@/lib/analytics";
import { SocialLinks, WhatsAppIconLink } from "@/components/social-links";
import { EMAIL, whatsappUrl } from "@/lib/contact";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultPackage?: PackageKey;
};

export default function ContactModal({ open, onClose, defaultPackage }: Props) {
  const [pkg, setPkg] = useState<PackageKey>(defaultPackage ?? "Package 2");
  const [name, setName] = useState("");
  const [need, setNeed] = useState("");

  useEffect(() => {
    if (open) {
      // reset to default each time (optional)
      setPkg(defaultPackage ?? "Package 2");
      track("contact_modal_open", { defaultPackage: defaultPackage ?? null });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const selected = useMemo(
    () => packages.find((p) => p.key === pkg),
    [pkg]
  );

  const waMessage = useMemo(() => {
    const who = name.trim() ? `Name: ${name.trim()}\n` : "";
    const what = need.trim() ? `Need: ${need.trim()}\n` : "";
    return encodeURIComponent(
      `Hi CliveUX 👋\n\nI'd like a quote.\n\nPackage: ${pkg} — ${selected?.title ?? ""}\n${who}${what}\nHosting + domain management included.\n\nPlease advise next steps.`
    );
  }, [pkg, selected?.title, name, need]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <button
        aria-label="Close contact options"
        onClick={() => {
          track("contact_modal_close_backdrop");
          onClose();
        }}
        className="absolute inset-0 bg-black/40"
      />

      {/* Card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative z-10 flex w-full max-w-2xl max-h-[calc(100dvh-2rem)] flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-xl dark:bg-card"
      >
        <div className="overflow-y-auto overscroll-contain p-5 sm:p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Contact CliveUX
              </p>
              <h3
                id="contact-modal-title"
                className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl"
              >
                Choose WhatsApp or Email
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Select a package to speed up your quote. (You can change it.)
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                track("contact_modal_close_button");
                onClose();
              }}
              className="shrink-0 rounded-lg border border-border px-3 py-2 text-sm hover:bg-secondary"
            >
              Close
            </button>
          </div>

          {/* Package selector */}
          <div className="mt-6">
            <p className="text-sm font-medium">Preferred package</p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {packages.map((p) => {
                const active = p.key === pkg;
                return (
                  <button
                    key={p.key}
                    onClick={() => {
                      setPkg(p.key);
                      track("package_select", { package: p.key });
                    }}
                    className={[
                      "text-left rounded-xl border p-3 transition sm:p-4",
                      active
                        ? "border-foreground bg-secondary"
                        : "border-border hover:border-foreground",
                    ].join(" ")}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <p className="text-sm font-semibold">{p.key}</p>
                      <span className="text-xs font-medium text-accent">
                        {p.title}
                      </span>
                    </div>
                    <p className="mt-1.5 line-clamp-2 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                      {p.forWho}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name (optional)"
                className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-foreground focus:ring-1 focus:ring-ring"
              />
              <input
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                placeholder="What do you need? (optional)"
                className="h-11 rounded-lg border border-border bg-background px-3 text-sm outline-none focus:border-foreground focus:ring-1 focus:ring-ring"
              />
            </div>
          </div>

          {/* Contact options */}
          <div className="mt-6 grid gap-3">
            {/* WhatsApp */}
            <a
              href={whatsappUrl(waMessage)}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("contact_whatsapp_click", { package: pkg })}
              className="rounded-xl border border-border p-4 transition hover:border-foreground"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">
                    Chat instantly (fastest)
                  </p>
                </div>
                <span className="shrink-0 text-sm font-medium text-accent">
                  Open →
                </span>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                `Quote request — ${pkg}`
              )}&body=${encodeURIComponent(
                `Hi CliveUX,\n\nI'd like a quote.\n\nPackage: ${pkg} — ${selected?.title ?? ""}\nName: ${name || "—"}\nNeed: ${
                  need || "—"
                }\n\nHosting + domain management included.\n\nThanks,`
              )}`}
              onClick={() => track("contact_email_click", { package: pkg })}
              className="rounded-xl border border-border p-4 transition hover:border-foreground"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">
                    Best for detailed requests
                  </p>
                </div>
                <span className="shrink-0 text-sm font-medium text-accent">
                  Compose →
                </span>
              </div>
            </a>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            Typical response time: 24 hours or less
          </p>

          {/* Social icons */}
          <div className="mt-5 flex items-center justify-center gap-4 pb-1">
            <WhatsAppIconLink size="sm" />
            <SocialLinks variant="icons" iconSize="sm" />
          </div>
        </div>
      </div>
    </div>
  );
}

