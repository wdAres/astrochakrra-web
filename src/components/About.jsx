import { siteData } from '../data/siteData';
import { IconArrow, Lotus } from './icons';

export default function About() {
  const { about } = siteData;

  const go = () => {
    const el = document.querySelector(about.ctaHref);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative overflow-hidden bg-navy">
      <Lotus className="pointer-events-none absolute -bottom-10 right-4 h-64 w-64 text-gold/10 md:right-16" />
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <img
            src={about.image}
            alt="The astrologer behind AstroChakrra"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent lg:bg-gradient-to-r" />
        </div>
        <div className="page-pad relative py-16 lg:py-24">
          <h2 className="display text-4xl text-ivory md:text-5xl">{about.heading}</h2>
          <p className="eyebrow mt-4">{about.eyebrow}</p>
          <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-7 text-ivory/80">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {about.chips.map((chip) => (
              <span
                key={chip}
                className="border border-gold/40 px-3 py-2 text-[11px] uppercase tracking-[0.14em] text-gold-light"
              >
                {chip}
              </span>
            ))}
          </div>
          <button type="button" className="btn-line mt-10" onClick={go}>
            {about.cta} <IconArrow className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
