import { WHATSAPP_NUMBER } from "./data";

export function waHref(productName?: string) {
  const msg = productName
    ? `Hello Deana Coffee, I am interested in ${productName}. Please share availability and pricing.`
    : "Hello Deana Coffee, I would like to make an inquiry.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
