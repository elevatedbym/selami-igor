export type Lang = 'de' | 'en' | 'bks';

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: 'de', label: 'DE', flag: '🇩🇪' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'bks', label: 'SR', flag: '🇷🇸' },
];

export type Translation = {
  nav: { about: string; gallery: string; contact: string; book: string };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    whatsapp: string;
    whatsappContact: string;
    call: string;
    scroll: string;
  };
  about: {
    label: string;
    title: string;
    titleAccent: string;
    text: string;
    features: { title: string; desc: string }[];
    offer: { badge: string; title: string; text: string; button: string };
  };
  gallery: {
    label: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    filters: { all: string; vip: string; styling: string; haircare: string };
  };
  contact: {
    label: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    whatsapp: string;
    call: string;
    instagram: string;
    facebook: string;
  };
  location: {
    label: string;
    title: string;
    titleAccent: string;
    address: string;
    addressLine: string;
    hours: string;
    hoursTable: { day: string; time: string }[];
    directions: string;
    phone: string;
    email: string;
  };
  footer: {
    tagline: string;
    rights: string;
    impressum: string;
    datenschutz: string;
    quickLinks: string;
    followUs: string;
  };
};

export const translations: Record<Lang, Translation> = {
  de: {
    nav: { about: 'Über Uns', gallery: 'Galerie', contact: 'Kontakt', book: 'Termin buchen' },
    hero: {
      badge: '★ 4.9 auf Google Bewertungen',
      title: 'Selami & Igor',
      titleAccent: 'Premium Hair Styling in Wien',
      subtitle: 'Eleganz, Stil und erstklassige Pflege im Herzen des 16. Wiener Gemeindebezirks.',
      whatsapp: 'Termin buchen',
      whatsappContact: 'Kontakt via WhatsApp',
      call: 'Anrufen',
      scroll: 'Mehr entdecken',
    },
    about: {
      label: 'Über Uns',
      title: 'Wo Stil auf',
      titleAccent: 'Meisterschaft trifft',
      text: 'Selami & Igor ist Synonym für erstklassiges Styling, Präzision und modernen Look. Unser Salon in Wien ist die erste Wahl für viele Prominente, Stars und alle, die eine makellose Frisur ohne Kompromisse suchen.',
      features: [
        { title: 'VIP-Behandlung & Privatsphäre', desc: 'Diskrete Umgebung und exklusiver Service für anspruchsvolle Kunden, die Privatsphäre schätzen.' },
        { title: 'Modernste Schneide- und Styling-Techniken', desc: 'Präzises Handwerk mit den neuesten Trends und Techniken der internationalen Friseurkunst.' },
        { title: 'Premium-Pflegeprodukte', desc: 'Ausschließlich ausgewählte, luxuriöse Pflegeprodukte für nachhaltige und perfekte Ergebnisse.' },
      ],
      offer: { badge: 'Oktober-Aktion', title: '20% Rabatt im Oktober', text: 'Erleben Sie exklusives Styling zum Vorteilspreis.', button: 'Jetzt Termin buchen' },
    },
    gallery: {
      label: 'Galerie',
      title: 'VIP &',
      titleAccent: 'Celebrity Styles',
      subtitle: 'Eine Auswahl unserer besten Frisuren und stylischen Looks für VIP-Kunden und Prominente.',
      filters: { all: 'Alle', vip: 'VIP Kunden', styling: 'Styling', haircare: 'Haarpflege' },
    },
    contact: {
      label: 'Direkter Kontakt',
      title: 'Buchen Sie Ihren',
      titleAccent: 'Termin',
      subtitle: 'Kontaktieren Sie uns direkt über WhatsApp, Telefon oder Social Media. Wir freuen uns auf Sie!',
      whatsapp: 'WhatsApp',
      call: 'Anrufen',
      instagram: 'Instagram',
      facebook: 'Facebook',
    },
    location: {
      label: 'Standort & Kontakt',
      title: 'Besuchen Sie uns im',
      titleAccent: 'Herzen von Wien',
      address: 'Adresse',
      addressLine: 'Ottakringer Straße 62, 1170 Wien',
      hours: 'Öffnungszeiten',
      hoursTable: [
        { day: 'Montag', time: 'Geschlossen' },
        { day: 'Dienstag', time: '09:00 – 19:00' },
        { day: 'Mittwoch', time: '09:00 – 19:00' },
        { day: 'Donnerstag', time: '09:00 – 19:00' },
        { day: 'Freitag', time: '09:00 – 19:00' },
        { day: 'Samstag', time: '09:00 – 19:00' },
        { day: 'Sonntag', time: 'Geschlossen' },
      ],
      directions: 'Route berechnen',
      phone: 'Telefon',
      email: 'E-Mail',
    },
    footer: {
      tagline: 'Premium Hair Styling im Herzen von Wien',
      rights: 'Alle Rechte vorbehalten.',
      impressum: 'Impressum',
      datenschutz: 'Datenschutz',
      quickLinks: 'Schnellzugriff',
      followUs: 'Folgen Sie uns',
    },
  },
  en: {
    nav: { about: 'About', gallery: 'Gallery', contact: 'Contact', book: 'Book Now' },
    hero: {
      badge: '★ 4.9 on Google Reviews',
      title: 'Selami & Igor',
      titleAccent: 'Premium Hair Styling in Vienna',
      subtitle: 'Elegance, style and first-class care in the heart of Vienna\'s 16th district.',
      whatsapp: 'Book appointment',
      whatsappContact: 'Contact via WhatsApp',
      call: 'Call Now',
      scroll: 'Discover more',
    },
    about: {
      label: 'About Us',
      title: 'Where style meets',
      titleAccent: 'mastery',
      text: 'Selami & Igor stands for first-class styling, precision and modern looks. Our salon in Vienna is the first choice for many celebrities, stars and anyone seeking a flawless hairstyle without compromise.',
      features: [
        { title: 'VIP Treatment & Privacy', desc: 'Discreet environment and exclusive service for discerning clients who value their privacy.' },
        { title: 'Latest Cutting & Styling Techniques', desc: 'Precision craftsmanship combined with the latest trends and techniques in international hairdressing.' },
        { title: 'Premium Care Products', desc: 'Exclusively selected, luxurious care products for sustainable and perfect results.' },
      ],
      offer: { badge: 'October Promotion', title: '20% off in October', text: 'Experience exclusive styling at a special price.', button: 'Book your appointment' },
    },
    gallery: {
      label: 'Gallery',
      title: 'VIP &',
      titleAccent: 'Celebrity Styles',
      subtitle: 'A selection of our finest hairstyles and stylish looks for VIP clients and celebrities.',
      filters: { all: 'All', vip: 'VIP Clients', styling: 'Styling', haircare: 'Hair Care' },
    },
    contact: {
      label: 'Direct Contact',
      title: 'Book Your',
      titleAccent: 'Appointment',
      subtitle: 'Contact us directly via WhatsApp, phone or social media. We look forward to seeing you!',
      whatsapp: 'WhatsApp',
      call: 'Call',
      instagram: 'Instagram',
      facebook: 'Facebook',
    },
    location: {
      label: 'Location & Contact',
      title: 'Visit us in the',
      titleAccent: 'heart of Vienna',
      address: 'Address',
      addressLine: 'Ottakringer Straße 62, 1170 Vienna',
      hours: 'Opening Hours',
      hoursTable: [
        { day: 'Monday', time: 'Closed' },
        { day: 'Tuesday', time: '09:00 – 19:00' },
        { day: 'Wednesday', time: '09:00 – 19:00' },
        { day: 'Thursday', time: '09:00 – 19:00' },
        { day: 'Friday', time: '09:00 – 19:00' },
        { day: 'Saturday', time: '09:00 – 19:00' },
        { day: 'Sunday', time: 'Closed' },
      ],
      directions: 'Get Directions',
      phone: 'Phone',
      email: 'Email',
    },
    footer: {
      tagline: 'Premium Hair Styling in the heart of Vienna',
      rights: 'All rights reserved.',
      impressum: 'Imprint',
      datenschutz: 'Privacy Policy',
      quickLinks: 'Quick Links',
      followUs: 'Follow Us',
    },
  },
  bks: {
    nav: { about: 'O nama', gallery: 'Galerija', contact: 'Kontakt', book: 'Zakaži termin' },
    hero: {
      badge: '★ 4.9 na Google recenzijama',
      title: 'Selami & Igor',
      titleAccent: 'Premium frizura u Beču',
      subtitle: 'Elegancija, stil i vrhunska nega u srcu 16. bečkog okruga.',
      whatsapp: 'Zakažite termin',
      whatsappContact: 'Kontakt via WhatsApp',
      call: 'Pozovi',
      scroll: 'Otkrij više',
    },
    about: {
      label: 'O nama',
      title: 'Gde stil susreće',
      titleAccent: 'majstorstvo',
      text: 'Selami & Igor je sinonim za vrhunsko stilizovanje, preciznost i moderan izgled. Naš salon u Beču je prvi izbor za mnoge poznate ličnosti, zvezde i sve koji traže besprekornu frizuru bez kompromisa.',
      features: [
        { title: 'VIP tretman & privatnost', desc: 'Diskretno okruženje i ekskluzivna usluga za zahtevne klijente koji cene privatnost.' },
        { title: 'Najnovije tehnike šišanja i stilizovanja', desc: 'Precizna izrada sa najnovijim trendovima i tehnikama u međunarodnoj frizerskoj umetnosti.' },
        { title: 'Premium proizvodi za negu', desc: 'Isključivo odabrani, luksuzni proizvodi za negu za održive i savršene rezultate.' },
      ],
      offer: { badge: 'Oktobarska akcija', title: '20% Rabat u Oktobru', text: 'Doživite ekskluzivno stilizovanje po povoljnijoj ceni.', button: 'Zakažite termin' },
    },
    gallery: {
      label: 'Galerija',
      title: 'VIP &',
      titleAccent: 'Celebrity stilovi',
      subtitle: 'Izbor naših najboljih frizura i stilskih izgleda za VIP klijente i poznate ličnosti.',
      filters: { all: 'Sve', vip: 'VIP klijenti', styling: 'Stilizovanje', haircare: 'Nega kose' },
    },
    contact: {
      label: 'Direktni kontakt',
      title: 'Zakažite svoj',
      titleAccent: 'termin',
      subtitle: 'Kontaktirajte nas direktno preko WhatsAppa, telefona ili društvenih mreža. Radujemo vam se!',
      whatsapp: 'WhatsApp',
      call: 'Pozovi',
      instagram: 'Instagram',
      facebook: 'Facebook',
    },
    location: {
      label: 'Lokacija & kontakt',
      title: 'Posetite nas u',
      titleAccent: 'srcu Beča',
      address: 'Adresa',
      addressLine: 'Ottakringer Straße 62, 1170 Beč',
      hours: 'Radno vreme',
      hoursTable: [
        { day: 'Ponedeljak', time: 'Zatvoreno' },
        { day: 'Utorak', time: '09:00 – 19:00' },
        { day: 'Sreda', time: '09:00 – 19:00' },
        { day: 'Četvrtak', time: '09:00 – 19:00' },
        { day: 'Petak', time: '09:00 – 19:00' },
        { day: 'Subota', time: '09:00 – 19:00' },
        { day: 'Nedelja', time: 'Zatvoreno' },
      ],
      directions: 'Pronađi rutu',
      phone: 'Telefon',
      email: 'Email',
    },
    footer: {
      tagline: 'Premium frizura u srcu Beča',
      rights: 'Sva prava zadržana.',
      impressum: 'Impressum',
      datenschutz: 'Zaštita podataka',
      quickLinks: 'Brzi linkovi',
      followUs: 'Pratite nas',
    },
  },
};

export const CONTACT = {
  phoneDisplay: '+43 660 8448845',
  phoneLink: '+436608448845',
  whatsapp: '436608448845',
  whatsappText: 'Hallo, ich möchte gerne einen Termin vereinbaren.',
  offerWhatsappText: 'Hallo, ich interessiere mich für die Oktober-Aktion für Haarverlängerung.',
  instagram: 'https://www.instagram.com/selamiigor/',
  facebook: 'https://www.facebook.com/profile.php?id=100083389950128',
  email: 'office@selami-igor.at',
  address: 'Ottakringer Straße 62, 1170 Wien',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Ottakringer+Strasse+62+1170+Wien',
  directionsLink: 'https://www.google.com/maps/dir/?api=1&destination=Ottakringer+Strasse+62+1170+Wien',
  mapsEmbed: 'https://maps.google.com/maps?q=Ottakringer%20Stra%C3%9Fe%2062%2C%201170%20Wien&t=&z=15&ie=UTF8&iwloc=&output=embed'
};
