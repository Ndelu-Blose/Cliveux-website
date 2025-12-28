export type PackageKey = "Package 1" | "Package 2" | "Package 3" | "Package 4";

export const packages = [
  {
    key: "Package 1" as const,
    title: "Starter Website",
    forWho: "For new businesses that need a clean online presence fast.",
  },
  {
    key: "Package 2" as const,
    title: "Business Website",
    forWho: "For growing businesses that need credibility + lead generation.",
  },
  {
    key: "Package 3" as const,
    title: "Pro Website + Growth",
    forWho: "For brands that need advanced features + marketing readiness.",
  },
  {
    key: "Package 4" as const,
    title: "Business System / Custom Web App",
    forWho: "For automation (bookings, tracking, dashboards, CRM-lite).",
  },
];


