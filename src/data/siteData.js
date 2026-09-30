const img = (id, extra = '') =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80${extra}`;

export const siteData = {
  brand: {
    name: 'AstroChakrra',
    tagline: 'Vedic Wisdom for a Balanced Life',
    email: 'hello@astrochakrra.com',
    phone: '+91 98765 43210',
    whatsapp: '919876543210',
    whatsappMessage:
      'Namaste, I would like to book a private consultation with AstroChakrra.',
  },

  nav: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'consultation', label: 'Consultation', href: '#consultation' },
    { id: 'testimonials', label: 'Testimonials', href: '#testimonials' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],

  hero: {
    headline: ['Ancient Wisdom.', 'Precise Interpretation.', 'Clearer Decisions.'],
    copy:
      'Vedic astrology, numerology and vastu offer deeper insights into your life patterns, helping you make conscious and confident decisions.',
    cta: 'Book a Private Consultation',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    overlayWords: ['Insight', 'Alignment', 'Harmony', 'Possibilities'],
    tags: [
      'Vedic Astrology',
      'Numerology',
      'Vastu',
      'Tarot',
      'Private',
      'Personalised',
      'Confidential',
    ],
  },

  topics: {
    heading: 'What brings you here?',
    eyebrow: 'Guidance for the questions that matter',
    items: [
      {
        id: 'marriage',
        bookingId: 'marriage',
        title: 'Marriage & Compatibility',
        description: 'Relationships, match making, marital harmony',
        image: img('photo-1519741497674-611481863552'),
      },
      {
        id: 'career',
        bookingId: 'career',
        title: 'Career & Business',
        description: 'Career direction, business growth, financial decisions',
        image: img('photo-1454165804606-c3d57bc86b40'),
      },
      {
        id: 'family',
        bookingId: 'family',
        title: 'Family & Life',
        description: 'Family wellbeing, health, emotional balance',
        image: img('photo-1511895426328-dc8714191300'),
      },
      {
        id: 'vastu-topic',
        bookingId: 'vastu',
        title: 'Vastu',
        description: 'Harmonious spaces for prosperity and well-being',
        image: img('photo-1600585154340-be6161a56a0c'),
      },
      {
        id: 'numerology-topic',
        bookingId: 'numerology',
        title: 'Name & Numerology',
        description: 'Personal, business or child name correction',
        image: img('photo-1509228468518-180dd4864904'),
      },
      {
        id: 'muhurat-topic',
        bookingId: 'muhurat',
        title: 'Muhurat & Timing',
        description: 'Auspicious timing for important events',
        image: img('photo-1501139083538-0139583c060f'),
      },
    ],
  },

  about: {
    heading: 'Meet the Astrologer',
    eyebrow: 'A blend of tradition, research and real-life insights',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1000&q=80',
    paragraphs: [
      'AstroChakrra is led by a dedicated Vedic astrologer with years of study, practice and real-life consultation experience. The approach is rooted in authentic Vedic principles, combined with a practical and contemporary understanding of modern life.',
      'Each consultation is personal, thoughtful and solution-oriented — helping you understand your unique chart and navigate life with clarity.',
    ],
    chips: [
      'Authentic Vedic Knowledge',
      'Practical & Modern Approach',
      'Compassionate Guidance',
      'Confidential & Non-judgemental',
    ],
    cta: 'Know More',
    ctaHref: '#process',
  },

  process: {
    heading: 'How Your Consultation Works',
    eyebrow: 'A simple and meaningful process',
    steps: [
      {
        id: 'birth',
        number: '01',
        title: 'Birth Details',
        description:
          'Share your date, time and place of birth (along with your question).',
        icon: 'birth',
      },
      {
        id: 'chart',
        number: '02',
        title: 'Chart Analysis',
        description:
          'Your kundli is studied in depth using Vedic principles and relevant systems.',
        icon: 'chart',
      },
      {
        id: 'session',
        number: '03',
        title: 'Personal Consultation',
        description:
          'One-to-one session (online or in-person) to discuss insights, answers and guidance.',
        icon: 'session',
      },
      {
        id: 'notes',
        number: '04',
        title: 'Written Guidance',
        description:
          'Key points and remedies shared in a concise written format (after consultation).',
        icon: 'notes',
      },
    ],
  },

  services: {
    heading: 'Signature Services',
    eyebrow: 'Personalised guidance across life areas',
    items: [
      {
        id: 'kundli',
        bookingId: 'kundli',
        title: 'Personal Kundli',
        description: 'Detailed analysis of your birth chart',
        image: img('photo-1515562141207-7a88fb7ce338'),
      },
      {
        id: 'matching',
        bookingId: 'matching',
        title: 'Marriage / Kundli Matching',
        description: 'Compatibility and relationship guidance',
        image: img('photo-1515934751635-c81c6bc9a2d8'),
      },
      {
        id: 'career-svc',
        bookingId: 'career',
        title: 'Career & Business',
        description: 'Career path, business growth and financial insights',
        image: img('photo-1486406149825-95f6d9f1264d'),
      },
      {
        id: 'numerology-svc',
        bookingId: 'numerology',
        title: 'Name Numerology',
        description: 'Personal / Business / Child name correction',
        image: img('photo-1635070041078-e363dbe005cb'),
      },
      {
        id: 'vastu-svc',
        bookingId: 'vastu',
        title: 'Vastu Consultation',
        description: 'Home, office and commercial spaces',
        image: img('photo-1600596542815-ffad4c1539a9'),
      },
      {
        id: 'gemstone',
        bookingId: 'gemstone',
        title: 'Gemstone Guidance',
        description: 'Suitable gemstones based on your chart',
        image: img('photo-1615655114860-1c7031ba8063'),
      },
      {
        id: 'muhurat-svc',
        bookingId: 'muhurat',
        title: 'Timing / Muhurat',
        description: 'Auspicious timing for key life events',
        image: img('photo-1478144592103-25e218a04891'),
      },
    ],
  },

  packages: {
    heading: 'Consultation Packages',
    eyebrow: 'Flexible sessions for your needs',
    items: [
      {
        id: 'pkg-30',
        bookingId: 'pkg-30',
        duration: '30 Minutes',
        title: 'Quick Clarity Session',
        priceLabel: '₹',
        featured: false,
      },
      {
        id: 'pkg-60',
        bookingId: 'pkg-60',
        duration: '60 Minutes',
        title: 'Detailed Consultation',
        priceLabel: '₹',
        featured: true,
        badge: 'Most Popular',
      },
      {
        id: 'pkg-90',
        bookingId: 'pkg-90',
        duration: '90 Minutes',
        title: 'In-Depth Consultation',
        priceLabel: '₹',
        featured: false,
      },
    ],
    includesTitle: 'All packages include:',
    includes: [
      'Personalised insight',
      'Practical guidance & remedies',
      'Post-consultation notes',
      'Complete confidentiality',
    ],
  },

  trust: {
    heading: 'Why Clients Trust Us',
    items: [
      {
        id: 'method',
        title: 'Authentic Methodology',
        description: 'Rooted in authentic Vedic principles',
        icon: 'lotus',
      },
      {
        id: 'experience',
        title: 'Years of Experience',
        description: 'Guiding clients across life stages',
        icon: 'years',
      },
      {
        id: 'privacy',
        title: 'Confidential & Safe Space',
        description: 'Your privacy is always respected',
        icon: 'shield',
      },
      {
        id: 'clarity',
        title: 'Transparent Consultation',
        description: 'Clear, honest and solution-oriented guidance',
        icon: 'clarity',
      },
    ],
  },

  testimonials: {
    heading: 'Client Experiences',
    eyebrow: 'Real stories. Meaningful journeys.',
    items: [
      {
        id: 't1',
        quote:
          'The consultation gave me incredible clarity at a very confusing time. The guidance was practical and easy to follow.',
        name: 'R. S.',
        location: 'Mumbai',
      },
      {
        id: 't2',
        quote:
          'Very thoughtful and insightful session. I actually found more answers than I expected — not just predictions.',
        name: 'P. K.',
        location: 'Delhi',
      },
      {
        id: 't3',
        quote:
          'A rare combination of deep knowledge and a kind, grounded approach. Highly recommend AstroChakrra.',
        name: 'A. M.',
        location: 'Bangalore',
      },
      {
        id: 't4',
        quote:
          'I came in unsure about a career shift. The reading was precise, compassionate, and gave me a clear next step.',
        name: 'S. N.',
        location: 'Pune',
      },
      {
        id: 't5',
        quote:
          'The kundli matching for our families was handled with such care. We felt seen, not judged.',
        name: 'M. & A.',
        location: 'Jaipur',
      },
    ],
  },

  faqs: {
    heading: 'Frequently Asked Questions',
    items: [
      {
        id: 'q1',
        question: 'What details do I need to share for the consultation?',
        answer:
          'Please share your full name, date of birth, exact time of birth (as accurate as possible) and place of birth, along with the question you would like guidance on.',
      },
      {
        id: 'q2',
        question: 'Is the consultation online or in-person?',
        answer:
          'Both. Most sessions are held online for ease and privacy. In-person consultations can be arranged on request.',
      },
      {
        id: 'q3',
        question: 'Will I get a written summary?',
        answer:
          'Yes. After your session you receive concise written guidance covering key points and suggested remedies.',
      },
      {
        id: 'q4',
        question: 'Can I consult for someone else (child, spouse, family)?',
        answer:
          'Yes. You may book on behalf of a family member. Kindly share their birth details and the specific area you would like explored.',
      },
      {
        id: 'q5',
        question: 'Do you also suggest remedies?',
        answer:
          'Where relevant, practical and aligned remedies are shared — always with context, never as fear-based prescriptions.',
      },
      {
        id: 'q6',
        question: 'How do I book a consultation?',
        answer:
          'Use any Book a Consultation button on this page, choose your service or package, and share a short query. You will receive a confirmation with the next steps.',
      },
    ],
  },

  closing: {
    heading: ['Your chart is unique.', 'Your consultation should be too.'],
    copy: 'Seek clarity. Find alignment. Move forward with confidence.',
    cta: 'Book a Private Consultation',
    image:
      'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1800&q=80',
  },

  footer: {
    message:
      'Private, personalised consultations in Vedic astrology, numerology and vastu — offered with care, confidentiality and clarity.',
    cta: 'Book a Private Consultation',
  },

  booking: {
    title: 'Book a Private Consultation',
    subtitle: 'Share a few details. We will respond with time, preparation notes and next steps.',
    successTitle: 'Your request has been received.',
    successCopy:
      'Thank you. We will write to you shortly with confirmation and a gentle outline of what to prepare.',
    submit: 'Send Request',
    options: [
      { id: 'kundli', label: 'Personal Kundli', group: 'Services' },
      { id: 'matching', label: 'Marriage / Kundli Matching', group: 'Services' },
      { id: 'career', label: 'Career & Business', group: 'Services' },
      { id: 'numerology', label: 'Name Numerology', group: 'Services' },
      { id: 'vastu', label: 'Vastu Consultation', group: 'Services' },
      { id: 'gemstone', label: 'Gemstone Guidance', group: 'Services' },
      { id: 'muhurat', label: 'Timing / Muhurat', group: 'Services' },
      { id: 'marriage', label: 'Marriage & Compatibility', group: 'Guidance' },
      { id: 'family', label: 'Family & Life', group: 'Guidance' },
      { id: 'pkg-30', label: '30 Minutes — Quick Clarity Session', group: 'Packages' },
      { id: 'pkg-60', label: '60 Minutes — Detailed Consultation', group: 'Packages' },
      { id: 'pkg-90', label: '90 Minutes — In-Depth Consultation', group: 'Packages' },
    ],
  },
};

export const bookingOptions = siteData.booking.options;
