import { MessageCircle } from 'lucide-react';
import { LogoMark } from './Logo';
import { CONTACT } from '../translations';
import { useScrollReveal } from '../hooks/useScrollReveal';
import type { Translation } from '../translations';

interface HeroProps {
  t: Translation;
}

export function Hero({ t }: HeroProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/26832816/pexels-photo-26832816.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Barber styling hair"
          className="w-full h-full object-cover opacity-65"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/35 via-ink-900/45 to-ink-950/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/35 to-transparent" />
      </div>

      {/* Decorative gold orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl" />

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16 transition-all duration-1000 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {/* Logo mark - povecan i istaknut */}
        <div className="flex justify-center mb-6 !bg-transparent !border-0 !shadow-none !p-0">
          <div className="relative !bg-transparent !border-0 !shadow-none !p-0" style={{ background: 'transparent', border: 'none', boxShadow: 'none', padding: 0 }}>
            <LogoMark className="w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 animate-glow-pulse" />
          </div>
        </div>

        {/* Subtitle ispod logotipa */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider text-gold-200 uppercase">
            Premium Hair Styling in Wien
          </h1>
        </div>

        {/* CTA buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="hero-cta-gradient inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold text-ink-950 transition-transform duration-300 hover:scale-105 md:text-base"
          >
            {t.hero.whatsapp}
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold-300/45 bg-ink-950/50 px-7 py-4 text-sm font-semibold text-gold-100 backdrop-blur-md transition-all duration-300 hover:border-gold-200 hover:bg-gold-400/10 hover:text-white md:text-base"
          >
            <MessageCircle className="h-5 w-5" />
            {t.hero.whatsappContact}
          </a>
        </div>

      </div>
    </section>
  );
}