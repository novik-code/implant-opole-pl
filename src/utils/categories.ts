export type Category =
  | 'implantologia'
  | 'stomatologia-ogolna'
  | 'lokalne-opole'
  | 'cena-i-koszt'
  | 'po-zabiegu'
  | 'trudne-przypadki';

export const categoryMeta: Record<Category, {
  label: string;
  shortDescription: string;
  description: string;
}> = {
  implantologia: {
    label: 'Implantologia',
    shortDescription: 'Implanty zębów — wskazania, technika, materiały',
    description: 'Artykuły o implantologii stomatologicznej — implanty pojedyncze, all-on-4, all-on-6, sinus lift, implanty natychmiastowe, materiały (tytan vs cyrkon).',
  },
  'stomatologia-ogolna': {
    label: 'Stomatologia ogólna',
    shortDescription: 'Wskazania, profilaktyka, jak wybrać dentystę',
    description: 'Tematy ogólnostomatologiczne — wybór dentysty, profilaktyka, przegląd kontrolny, leczenie zachowawcze, protetyka.',
  },
  'lokalne-opole': {
    label: 'Lokalne · Opole',
    shortDescription: 'Stomatologia premium w Opolu',
    description: 'Artykuły z perspektywy lokalnej — jak wybrać dentystę / implantologa w Opolu, dostępność specjalistów, ceny w regionie, kliniki premium.',
  },
  'cena-i-koszt': {
    label: 'Cena i koszt',
    shortDescription: 'Ile kosztują implanty i zabiegi premium',
    description: 'Przewodnik po cenach implantów i zabiegów stomatologicznych — czynniki ceny, raty, refundacja NFZ, porównanie regionalne.',
  },
  'po-zabiegu': {
    label: 'Po zabiegu',
    shortDescription: 'Opieka pozabiegowa, gojenie, follow-up',
    description: 'Co robić po implantacji, sinus lift, ekstrakcji — opieka pozabiegowa, gojenie, kontrole, profilaktyka periimplantitis.',
  },
  'trudne-przypadki': {
    label: 'Trudne przypadki',
    shortDescription: 'Periimplantitis, brak kości, reendodoncja',
    description: 'Stomatologia w trudnych przypadkach — periimplantitis, implanty w warunkach utraty kości, reendodoncja, zaawansowana chirurgia.',
  },
};

export const allCategories = Object.keys(categoryMeta) as Category[];

export function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('pl-PL', { year: 'numeric', month: 'long', day: 'numeric' });
}
