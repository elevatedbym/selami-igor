import { MessageCircle, Sparkles } from 'lucide-react';
import { CONTACT, type Translation } from '@/translations';

interface SpecialOfferProps {
  t: Translation;
}

export function SpecialOffer({ t }: SpecialOfferProps) {
  return (
    <section
      aria-labelledby="special-offer-title"
      className="relative isolate flex min-h-[520px] items-center justify-center overflow-hidden bg-fixed bg-cover bg-center px-6 py-24 md:min-h-[600px] md:py-32"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg?auto=compress&cs=tinysrgb&w=1920')",
      }}
    >
      <div className="absolute inset-0 z-0 bg-ink-950/35" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-ink-950/45 via-ink-950/20 to-ink-950/40" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-300/45 bg-ink-950/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-100 backdrop-blur-md">
          <Sparkles className="h-4 w-4" />
          {t.about.offer.badge}
        </div>
        <h2 id="special-offer-title" className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
          {t.about.offer.title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
          {t.about.offer.text}
        </p>
        <a
          href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.offerWhatsappText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta-gradient mt-9 inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-105 sm:text-base"
        >
          <MessageCircle className="h-5 w-5" />
          {t.about.offer.button}
        </a>
      </div>
    </section>
  );
}
