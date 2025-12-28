"use client";

import { useEffect, useMemo, useState } from "react";
import { packages, PackageKey } from "@/content/packages";
import { track } from "@/lib/analytics";

type Props = {
  open: boolean;
  onClose: () => void;
  defaultPackage?: PackageKey;
};

const WHATSAPP = "27607257297";
const EMAIL = "cliveuxweb@gmail.com";

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
    <div className="fixed inset-0 z-[60]">
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
      <div className="relative mx-auto mt-16 w-[92%] max-w-2xl rounded-2xl bg-white dark:bg-card shadow-xl border border-border">
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Contact CliveUX
              </p>
              <h3 className="mt-1 text-2xl font-semibold tracking-tight">
                Choose WhatsApp or Email
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Select a package to speed up your quote. (You can change it.)
              </p>
            </div>

            <button
              onClick={() => {
                track("contact_modal_close_button");
                onClose();
              }}
              className="rounded-lg px-3 py-2 text-sm border border-border hover:bg-secondary"
            >
              Close
            </button>
          </div>

          {/* Package selector */}
          <div className="mt-6">
            <p className="text-sm font-medium">Preferred package</p>
            <div className="mt-3 grid gap-2 md:grid-cols-2">
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
                      "text-left rounded-xl border p-4 transition",
                      active
                        ? "border-foreground bg-secondary"
                        : "border-border hover:border-foreground",
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">{p.key}</p>
                      <span className="text-xs font-medium text-accent">
                        {p.title}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
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
              href={`https://wa.me/${WHATSAPP}?text=${waMessage}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => track("contact_whatsapp_click", { package: pkg })}
              className="rounded-xl border border-[rgb(var(--border))] p-4 hover:border-black transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">WhatsApp</p>
                  <p className="text-sm text-[rgb(var(--muted))]">
                    Chat instantly (fastest)
                  </p>
                </div>
                <span className="text-sm font-medium text-[rgb(var(--gold))]">
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
              className="rounded-xl border border-[rgb(var(--border))] p-4 hover:border-black transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-[rgb(var(--muted))]">
                    Best for detailed requests
                  </p>
                </div>
                <span className="text-sm font-medium text-[rgb(var(--gold))]">
                  Compose →
                </span>
              </div>
            </a>
          </div>

          <p className="mt-4 text-xs text-[rgb(var(--muted))]">
            Typical response time: 24 hours or less
          </p>
        </div>
      </div>
    </div>
  );
}

