import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import { IconArrow, Lotus } from './icons';

export default function ClosingCTA() {
  const { closing } = siteData;
  const { openBooking } = useBooking();

  return (
    <section className="relative overflow-hidden">
      <img src={closing.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-navy-deep/80" />
      <Lotus className="pointer-events-none absolute -left-8 bottom-0 h-72 w-72 text-gold/20" />
      <div className="container-page relative py-24 text-center md:py-32">
        <h2 className="display mx-auto max-w-3xl text-4xl text-ivory md:text-6xl">
          {closing.heading.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>
        <p className="mt-6 text-sm tracking-[0.08em] text-ivory/80">{closing.copy}</p>
        <button type="button" className="btn-line mt-10" onClick={() => openBooking()}>
          {closing.cta} <IconArrow className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
