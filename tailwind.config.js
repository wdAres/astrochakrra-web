/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6F0E6',
        ivory: '#FAF6EF',
        parchment: '#EFE4D3',
        sand: '#E7D8C1',
        navy: '#1B2431',
        'navy-deep': '#121820',
        'navy-soft': '#243044',
        gold: '#C4A36A',
        'gold-light': '#D9BE8C',
        'gold-deep': '#A4844A',
        ink: '#3A322B',
        muted: '#6B5E52',
        mist: '#F3EBE0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        brand: '0.22em',
        label: '0.28em',
      },
      boxShadow: {
        card: '0 18px 40px -24px rgba(27, 36, 49, 0.28)',
        lift: '0 22px 50px -20px rgba(27, 36, 49, 0.35)',
      },
      backgroundImage: {
        grain:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
