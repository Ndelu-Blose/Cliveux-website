export type PackageKey = "Package 1" | "Package 2" | "Package 3" | "Package 4";

export const packages = [
  {
    key: "Package 1" as const,
    title: "Start",
    headline: "Get your business online.",
    forWho: "For new and small businesses that need a professional digital foundation.",
  },
  {
    key: "Package 2" as const,
    title: "Grow",
    headline: "Turn your website into a business tool.",
    forWho: "For established SMMEs that need stronger visibility, enquiries and customer engagement.",
  },
  {
    key: "Package 3" as const,
    title: "Operate",
    headline: "Build the system behind the business.",
    forWho: "For businesses that have outgrown spreadsheets, WhatsApp and manual processes.",
  },
  {
    key: "Package 4" as const,
    title: "Custom",
    headline: "Something specific to your business?",
    forWho: "For more complex workflows, integrations and custom applications.",
  },
];
