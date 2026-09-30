import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import { Lotus } from './icons';

export default function Packages() {
  const { packages } = siteData;
  const { openBooking } = useBooking();

  return (
    <section id="consultation" className="starfield relative overflow-hidden py-20 md:py-24">
      <Lotus className="pointer-events-none absolute -left-10 bottom-0 h-72 w-72 text-gold/10" />
      <Lotus className="pointer-events-none absolute -right-8 top-8 h-56 w-56 text-gold/10" />
      <div className="container-page relative">
        <div className="text-center">
          <h2 className="display text-4xl text-ivory md:text-5xl">{packages.heading}</h2>
          <p className="eyebrow mt-4">{packages.eyebrow}</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[repeat(3,minmax(0,1fr))_0.9fr]">
          {packages.items.map((item) => (
            <article
              key={item.id}
              className={`relative flex min-h-[280px] flex-col items-center justify-between px-6 py-10 text-center ${
                item.featured
                  ? 'border-2 border-gold bg-navy-soft/40 shadow-[0_0_0_1px_rgba(196,163,106,0.2)]'
                  : 'border border-gold/35 bg-navy-deep/40'
              }`}
            >
              {item.badge ? (
                <span className="absolute -top-3 bg-gold px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-navy">
                  {item.badge}
                </span>
              ) : null}
              <div>
                <p className="font-display text-4xl text-ivory">{item.duration}</p>
                <p className="mt-3 text-sm text-ivory/80">{item.title}</p>
                <p className="mt-8 font-display text-3xl text-gold">{item.priceLabel}</p>
              </div>
              <button type="button" className="btn-line mt-8" onClick={() => openBooking(item.bookingId)}>
                Book Now
              </button>
            </article>
          ))}

          <aside className="border border-gold/30 bg-navy-deep/50 px-7 py-10">
            <p className="font-display text-2xl text-ivory">{packages.includesTitle}</p>
            <ul className="mt-6 space-y-4">
              {packages.includes.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-ivory/80">
                  <span className="mt-1 h-1.5 w-1.5 rotate-45 border border-gold" />
                  {line}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
