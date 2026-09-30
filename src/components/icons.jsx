export function Lotus({ className = '', stroke = 'currentColor' }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} aria-hidden>
      <path
        d="M60 102c8-16 10-28 10-40 0 12 2 24 10 40-12-4-18-4-20-4s-8 0-20 4c8-16 10-28 10-40 0 12 2 24 10 40Z"
        stroke={stroke}
        strokeWidth="1.2"
      />
      <path
        d="M60 98c14-10 24-22 30-36-16 6-26 8-30 8s-14-2-30-8c6 14 16 26 30 36Z"
        stroke={stroke}
        strokeWidth="1.2"
      />
      <path
        d="M60 92c18-4 32-14 42-28-18 2-32 2-42 2s-24 0-42-2c10 14 24 24 42 28Z"
        stroke={stroke}
        strokeWidth="1.2"
      />
      <path
        d="M60 22c-4 14-6 26-6 40 0-14-2-26-6-40 8 2 12 2 12 2s4 0 12-2c-4 14-6 26-6 40 0-14-2-26-6-40Z"
        stroke={stroke}
        strokeWidth="1.2"
      />
      <path
        d="M28 38c10 10 18 18 32 24-14-6-22-14-32-24 12-2 22-2 32-2 10 0 20 0 32 2-10 10-18 18-32 24 14-6 22-14 32-24"
        stroke={stroke}
        strokeWidth="1.2"
      />
      <circle cx="60" cy="62" r="5" stroke={stroke} strokeWidth="1.2" />
    </svg>
  );
}

export function CornerOrnament({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M2 2h18" stroke="currentColor" strokeWidth="1" />
      <path d="M2 2v18" stroke="currentColor" strokeWidth="1" />
      <path d="M2 10h8v8" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

export function GoldRule({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/70" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold/80" />
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/70" />
    </div>
  );
}

export function IconBirth({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <rect x="10" y="12" width="28" height="26" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 20h28" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 8v8M30 8v8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 28h4M26 28h4M18 33h12" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconChart({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M24 10v28M10 24h28" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 14l20 20M34 14 14 34" stroke="currentColor" strokeWidth="1.1" opacity="0.7" />
    </svg>
  );
}

export function IconSession({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="30" cy="18" r="5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 36c2-6 6-9 10-9s8 3 10 9" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 36c2-6 6-9 10-9s8 3 10 9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconNotes({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M14 8h16l8 8v24H14V8Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M30 8v8h8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M20 24h12M20 30h8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconYears({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M24 16v8l6 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconShield({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <path d="M24 8 12 14v12c0 8 5.5 14 12 16 6.5-2 12-8 12-16V14L24 8Z" stroke="currentColor" strokeWidth="1.4" />
      <path d="M18 24l4 4 8-9" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconClarity({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden>
      <circle cx="22" cy="22" r="10" stroke="currentColor" strokeWidth="1.4" />
      <path d="M30 30l8 8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconArrow({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconMenu({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconClose({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function IconWhatsApp({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.74.46 3.44 1.32 4.94L2 22l5.31-1.39a9.86 9.86 0 0 0 4.73 1.2h.01c5.46 0 9.89-4.43 9.89-9.89C21.94 6.43 17.5 2 12.04 2Zm5.76 14.22c-.24.68-1.4 1.3-1.94 1.38-.49.08-1.1.11-1.78-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.7-4.1-4.84-4.29-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.38.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.14.32-.28.49-.14.17-.29.38-.42.51-.14.15-.28.31-.12.6.16.29.72 1.19 1.55 1.93 1.07.95 1.97 1.25 2.26 1.39.29.14.46.12.63-.07.17-.19.73-.85.93-1.14.2-.29.39-.24.66-.14.27.1 1.71.81 2 .95.29.15.48.22.55.34.07.12.07.7-.17 1.38Z" />
    </svg>
  );
}

export const processIcons = {
  birth: IconBirth,
  chart: IconChart,
  session: IconSession,
  notes: IconNotes,
};

export const trustIcons = {
  lotus: Lotus,
  years: IconYears,
  shield: IconShield,
  clarity: IconClarity,
};
