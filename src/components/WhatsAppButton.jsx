import { siteData } from '../data/siteData';
import { IconWhatsApp } from './icons';

export default function WhatsAppButton() {
  const { brand } = siteData;
  const href = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(brand.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-navy text-gold shadow-lift ring-1 ring-gold/50 transition hover:scale-105 hover:bg-navy-soft"
    >
      <span className="absolute inset-0 animate-pulse rounded-full bg-gold/15" />
      <IconWhatsApp className="relative h-7 w-7" />
    </a>
  );
}
