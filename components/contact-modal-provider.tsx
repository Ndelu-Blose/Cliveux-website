"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ComponentProps, type ReactNode } from "react";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import type { PackageKey } from "@/content/packages";

type ContactModalContextValue = {
  openContact: (pkg?: PackageKey) => void;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [pkg, setPkg] = useState<PackageKey | undefined>();

  const openContact = useCallback((next?: PackageKey) => {
    setPkg(next);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openContact }), [openContact]);

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal open={open} onClose={() => setOpen(false)} defaultPackage={pkg} />
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
};

export function StartProjectButton({
  pkg,
  children = "Start a Project",
  variant = "brand",
  ...props
}: StartProjectButtonProps) {
  const { openContact } = useContactModal();
  return (
    <Button variant={variant} onClick={() => openContact(pkg)} {...props}>
      {children}
    </Button>
  );
}
