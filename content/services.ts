export type Service = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  details: string[];
  /** Dedicated page for this service, if it has one. Otherwise it links to its home-page anchor. */
  href?: string;
};

export const services: Service[] = [
  {
    id: "websites",
    number: "01",
    title: "Websites",
    shortTitle: "Websites",
    description: "A professional digital home for your business.",
    details: [
      "Business websites",
      "Landing pages",
      "E-commerce",
      "WhatsApp integration",
      "Domain connection",
      "Google & SEO foundations",
    ],
  },
  {
    id: "business-email",
    number: "02",
    title: "Business Email & Workspace",
    shortTitle: "Business Email",
    description: "Professional email on your own domain, set up and managed for you.",
    details: [
      "Business email on your domain",
      "Microsoft 365, Google Workspace & Zoho",
      "Domain & DNS setup",
      "Email security (SPF, DKIM, DMARC)",
      "Mailbox migration",
      "Ongoing account management",
    ],
    href: "/business-email",
  },
  {
    id: "business-systems",
    number: "03",
    title: "Business Systems",
    shortTitle: "Business Systems",
    description: "Simple software that helps you run your business better.",
    details: [
      "Bookings",
      "Customer management",
      "Orders",
      "Inventory",
      "Internal workflows",
      "Dashboards & reporting",
    ],
  },
  {
    id: "digital-support",
    number: "04",
    title: "Digital Support",
    shortTitle: "Digital Support",
    description: "Keep your digital presence working after launch.",
    details: [
      "Hosting",
      "Maintenance & website updates",
      "SEO improvements",
      "Google Business Profile",
      "Technical support",
      "Ongoing improvements",
    ],
  },
];

export const serviceTitles = services.map((s) => s.title);

/** "Websites · Business Email · Business Systems · Digital Support" */
export const serviceTagline = services.map((s) => s.shortTitle).join(" · ");

export function serviceHref(service: Service) {
  return service.href ?? `/#${service.id}`;
}
