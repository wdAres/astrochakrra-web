import { useEffect, useState } from 'react';
import { Drawer } from 'antd';
import { siteData } from '../data/siteData';
import { useBooking } from '../context/BookingContext';
import { IconArrow, IconClose, IconMenu, Lotus } from './icons';

export default function Navbar() {
  const { nav, brand } = siteData;
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
          scrolled ? 'bg-cream/90 shadow-[0_12px_40px_-24px_rgba(27,36,49,0.45)] backdrop-blur-md' : 'bg-cream/70'
        }`}
      >
        <div className="container-page flex h-[4.6rem] items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3" onClick={(e) => { e.preventDefault(); go('#home'); }}>
            <Lotus className="h-9 w-9 text-gold" />
            <span className="leading-tight">
              <span className="block font-display text-2xl tracking-wide text-navy">{brand.name}</span>
              <span className="hidden text-[9px] uppercase tracking-[0.22em] text-gold-deep sm:block">
                {brand.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 xl:flex">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-[12px] tracking-[0.14em] text-ink/80 transition hover:text-gold-deep"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button type="button" className="btn-fill hidden sm:inline-flex" onClick={() => openBooking()}>
              Book a Consultation
            </button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-gold/50 text-navy xl:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        placement="right"
        width={320}
        destroyOnClose
      >
        <div className="flex min-h-full flex-col bg-[#F4EDE0] px-7 py-8">
          <div className="mb-10 flex items-start justify-between">
            <div>
              <p className="font-display text-3xl text-navy">{brand.name}</p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-gold-deep">{brand.tagline}</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="text-navy" aria-label="Close menu">
              <IconClose className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {nav.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => go(item.href)}
                className="text-left font-display text-3xl text-navy transition hover:text-gold-deep"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="btn-fill mt-auto"
            onClick={() => {
              setOpen(false);
              openBooking();
            }}
          >
            Book a Consultation <IconArrow className="h-4 w-4" />
          </button>
        </div>
      </Drawer>
    </>
  );
}
