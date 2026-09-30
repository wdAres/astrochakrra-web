import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import { IconArrow } from './icons';

export default function Hero() {
  const { hero } = siteData;
  const { openBooking } = useBooking();

  return (
    <section id="home" className="relative overflow-hidden bg-cream pt-[4.6rem]">
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="grid min-h-[calc(100vh-4.6rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
          <p className="eyebrow mb-6">Private · Personalised · Confidential</p>
          <h1 className="display text-[2.7rem] text-navy sm:text-5xl lg:text-[3.6rem]">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-muted">{hero.copy}</p>
          <div className="mt-9">
            <button type="button" className="btn-line" onClick={() => openBooking()}>
              {hero.cta} <IconArrow className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-10 flex max-w-xl flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-muted">
            {hero.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden bg-navy lg:min-h-full">
          <img
            src={hero.image}
            alt="Astrologer at AstroChakrra — portrait placeholder"
            className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/35 via-navy/10 to-transparent" />
          <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col gap-6 lg:flex">
            {hero.overlayWords.map((word) => (
              <span
                key={word}
                className="font-display text-2xl tracking-[0.18em] text-ivory/90"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
