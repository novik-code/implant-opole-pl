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
  // NAP musi być IDENTYCZNE we wszystkich miejscach online (Google penalizuje niespójności)
  clinic: {
    name: 'Mikrostomart',
    legalName: 'Mikrostomart — Klinika Stomatologii Premium',
    url: 'https://mikrostomart.pl',
    bookingUrl: 'https://mikrostomart.pl/rezerwacja',
    implantPageUrl: 'https://mikrostomart.pl/oferta/implanty',
    contactUrl: 'https://mikrostomart.pl/kontakt',
    phone: '+48 570 270 470',
    phoneAlt: '+48 570 810 800',
    phoneHref: 'tel:+48570270470',
    email: 'gabinet@mikrostomart.pl',
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
    openingHours: [
      { day: 'Monday', opens: '09:00', closes: '20:00' },
      { day: 'Tuesday', opens: '09:00', closes: '20:00' },
      { day: 'Wednesday', opens: '09:00', closes: '20:00' },
      { day: 'Thursday', opens: '09:00', closes: '20:00' },
      { day: 'Friday', opens: '09:00', closes: '16:00' },
    ],
    // sameAs - linki które potwierdzają tożsamość kliniki (GBP, social, katalogi)
    sameAs: [
      // 'https://g.page/...',  // TODO: dodać po verify GBP
      // 'https://maps.app.goo.gl/...',  // TODO: dodać po verify GBP
      'https://www.znanylekarz.pl/placowki/gabinet-mikrostomart-2',
      'https://www.facebook.com/mikrostomart',
      'https://www.instagram.com/mikrostomart_opole/',
    ],
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
