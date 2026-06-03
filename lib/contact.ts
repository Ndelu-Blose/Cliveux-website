export const WHATSAPP = "27607257297";
export const EMAIL = "cliveuxweb@gmail.com";
export const WHATSAPP_DISPLAY = "+27 60 725 7297";

export function whatsappUrl(text?: string) {
  const base = `https://wa.me/${WHATSAPP}`;
  return text ? `${base}?text=${text}` : base;
}
