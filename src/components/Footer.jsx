import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import { Lotus } from './icons';

export default function Footer() {
  const { footer, brand, nav } = siteData;
  const { openBooking } = useBooking();

  return (
    <footer id="contact" className="bg-navy-deep text-ivory">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <Lotus className="h-10 w-10 text-gold" />
            <div>
              <p className="font-display text-3xl">{brand.name}</p>
              <p className="text-[10px] uppercase tracking-[0.22em] text-gold">{brand.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-7 text-ivory/70">{footer.message}</p>
          <button type="button" className="btn-line mt-8" onClick={() => openBooking()}>
            {footer.cta}
          </button>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.id}>
                  <a href={item.href} className="text-sm text-ivory/75 transition hover:text-gold">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-4 space-y-2 text-sm text-ivory/75">
              <li>
                <a href={`mailto:${brand.email}`} className="hover:text-gold">
                  {brand.email}
                </a>
              </li>
              <li>{brand.phone}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gold/20 py-5 text-center text-[11px] uppercase tracking-[0.18em] text-ivory/45">
        © {new Date().getFullYear()} {brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
