"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ComponentProps, type ReactNode } from "react";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import type { PackageKey } from "@/content/packages";

type ContactModalContextValue = {
  openContact: (pkg?: PackageKey, service?: string) => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pkg, setPkg] = useState<PackageKey | undefined>();
  const [service, setService] = useState<string | undefined>();

  const openContact = useCallback((next?: PackageKey, nextService?: string) => {
    setPkg(next);
    setService(nextService);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openContact }), [openContact]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} defaultPackage={pkg} defaultService={service} />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used inside ContactModalProvider");
  return ctx;
}

type StartProjectButtonProps = Omit<ComponentProps<typeof Button>, "onClick" | "asChild"> & {
  pkg?: PackageKey;
  /** Service the enquiry is about, added to the WhatsApp and email drafts. */
  service?: string;
};

export function StartProjectButton({
  pkg,
  service,
  children = "Start a Project",
  variant = "brand",
  ...props
}: StartProjectButtonProps) {
  const { openContact } = useContactModal();
  return (
    <Button variant={variant} onClick={() => openContact(pkg, service)} {...props}>
      {children}
    </Button>
  );
}
