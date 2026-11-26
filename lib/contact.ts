export const WHATSAPP = "27691383089";
export const EMAIL = "Thamsanqa@cliveux.co.za";
export const WHATSAPP_DISPLAY = "+27 69 138 3089";

/** Registered company details (CIPC). */
export const LEGAL_NAME = "CliveUX (Pty) Ltd";
export const REGISTRATION_NUMBER = "2026/067703/07";

/**
 * Tag added to the top of every WhatsApp message started from the site,
 * so website enquiries stand out in the inbox. WhatsApp renders *text* as bold.
 * Keep the wording stable: it doubles as a search term in WhatsApp.
 */
export const WHATSAPP_WEBSITE_TAG = "*🌐 Website enquiry · cliveux.co.za*";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hi CliveUX 👋\n\nI found you on your website and I'd like to chat about my business.";

/** Builds a wa.me link. Pass plain text; it is tagged and URL-encoded here. */
export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  const text = `${WHATSAPP_WEBSITE_TAG}\n\n${message}`;
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
}
