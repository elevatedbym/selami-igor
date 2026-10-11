import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { SpecialOffer } from '@/components/SpecialOffer';
import { Gallery } from '@/components/Gallery';
import { ContactBar } from '@/components/ContactBar';
import { Location } from '@/components/Location';
import { Footer } from '@/components/Footer';
import { translations, type Lang } from '@/translations';

export default function App() {
  const [lang, setLang] = useState<Lang>('de');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-ink-900 text-white">
      <Header lang={lang} onChangeLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <SpecialOffer t={t} />
        <Gallery t={t} />
        <ContactBar t={t} />
        <Location t={t} />
      </main>
      <Footer t={t} />
    </div>
  );
}
