import { useEffect, useMemo, useState } from 'react';
import { siteData } from '../data/siteData';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const { testimonials } = siteData;
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const items = testimonials.items;

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const apply = () => setPerView(mq.matches ? 3 : 1);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  const visible = useMemo(() => {
    return Array.from({ length: perView }, (_, i) => items[(index + i) % items.length]);
  }, [index, items, perView]);

  const prev = () => setIndex((n) => (n - 1 + items.length) % items.length);
  const next = () => setIndex((n) => (n + 1) % items.length);

  return (
    <section id="testimonials" className="bg-ivory py-20 md:py-24">
      <div className="container-page">
        <SectionHeading title={testimonials.heading} eyebrow={testimonials.eyebrow} />

        <div className="relative mt-14">
          <div className="grid gap-6 md:grid-cols-3">
            {visible.map((item, i) => (
              <article
                key={`${item.id}-${i}`}
                className="card-frame px-7 py-8"
              >
                <p className="font-display text-5xl leading-none text-gold">“</p>
                <p className="mt-2 font-display text-xl leading-8 text-navy">{item.quote}</p>
                <p className="mt-6 text-[12px] uppercase tracking-[0.18em] text-gold-deep">
                  {item.name}
                  <span className="text-muted"> · {item.location}</span>
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center border border-gold/50 text-navy transition hover:border-gold hover:text-gold-deep"
              aria-label="Previous testimonials"
            >
              ‹
            </button>
            <div className="flex gap-2">
              {items.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-[2px] w-6 ${i === index ? 'bg-gold' : 'bg-gold/30'}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center border border-gold/50 text-navy transition hover:border-gold hover:text-gold-deep"
              aria-label="Next testimonials"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
