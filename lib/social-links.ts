export type SocialPlatformId = "instagram" | "facebook" | "linkedin";

export type SocialPlatform = {
  id: SocialPlatformId;
  label: string;
  href: string;
  brandColor: string;
  iconBg: string;
};

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/cliveuxweb/",
    brandColor: "#E4405F",
    iconBg: "bg-[#E4405F]/10",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/share/17aXXGqeur/",
    brandColor: "#1877F2",
    iconBg: "bg-[#1877F2]/10",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/cliveux/",
    brandColor: "#0A66C2",
    iconBg: "bg-[#0A66C2]/10",
  },
];
