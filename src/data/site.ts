// Centralna konfiguracja brandu — implant.opole.pl
// FILAR LOKALNY: dentysta/stomatolog/implantolog Opole

export const site = {
  url: 'https://implant.opole.pl',
  title: 'Implanty Opole — dentysta i implantolog premium, dr Marcin Nowosielski',
  shortTitle: 'Implanty Opole',
  description:
    'Implanty zębów w Opolu — przewodnik pacjenta. Wskazania, technika, cennik, all-on-4, sinus lift, periimplantitis. Treści przygotowuje lek. dent. Marcin Nowosielski, M.Sc. RWTH Aachen — implantolog i stomatolog przyjmujący w klinice Mikrostomart Opole.',
  ogImage: '/og-default.svg',
  locale: 'pl-PL',
  // Autor wszystkich treści — Marcin Nowosielski (kanoniczny ID na nowosielski.pl)
  // Ta sama tożsamość co FILAR 1 (nowosielski.pl) i FILAR 2 (endodoncjamikroskopowa.pl)
  // Google łączy E-E-A-T pomiędzy stronami przez wspólny @id Physician.
  author: {
    name: 'Marcin Nowosielski',
    honorificPrefix: 'lek. dent.',
    honorificSuffix: 'M.Sc.',
    canonicalUrl: 'https://nowosielski.pl',
    canonicalId: 'https://nowosielski.pl/#person',
    jobTitle: 'Lekarz dentysta, implantolog, M.Sc. RWTH Aachen',
    image: '/dr-marcin.webp',
    email: 'kontakt@nowosielski.pl',
  },
  // Klinika konwersji — wszystkie CTA prowadzą tutaj
  clinic: {
    name: 'Mikrostomart',
    legalName: 'Mikrostomart — Klinika Stomatologii Premium',
    url: 'https://mikrostomart.pl',
    bookingUrl: 'https://mikrostomart.pl/rezerwacja',
    implantPageUrl: 'https://mikrostomart.pl/oferta/implanty',
    contactUrl: 'https://mikrostomart.pl/kontakt',
    address: {
      street: 'ul. Centralna 33a',
      city: 'Opole',
      region: 'opolskie',
      postalCode: '45-940',
      country: 'PL',
    },
    geo: {
      latitude: 50.6751,
      longitude: 17.9213,
    },
  },
  // SEO — najważniejsze frazy lokalne
  keywords: [
    'implanty Opole',
    'implantolog Opole',
    'dentysta Opole',
    'stomatolog Opole',
    'implanty zębów Opole',
    'klinika implantologii Opole',
    'all-on-4 Opole',
  ],
};

export const nav = [
  { label: 'Implanty', href: '/implanty-zebow-opole' },
  { label: 'Dentysta Opole', href: '/dentysta-opole' },
  { label: 'Stomatolog Opole', href: '/stomatolog-opole' },
  { label: 'Implantolog', href: '/implantolog-opole' },
  { label: 'Cennik', href: '/cennik-implantow-opole' },
  { label: 'Blog', href: '/blog' },
  { label: 'O autorze', href: '/o-autorze' },
];
