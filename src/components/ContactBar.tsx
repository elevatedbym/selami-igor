import { MessageCircle, Phone, Instagram, Facebook } from 'lucide-react';
import { CONTACT, type Translation } from '@/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ContactBarProps {
  t: Translation;
}

export function ContactBar({ t }: ContactBarProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-850 to-ink-950" />

      {/* Decorative gold lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div ref={ref} className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold-400/80 font-medium mb-4">
          {t.contact.label}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          <span className="text-white/95">{t.contact.title} </span>
          <span className="text-gradient-gold italic">{t.contact.titleAccent}</span>
        </h2>

        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
          <span className="text-gold-400 text-sm">◆</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
        </div>

        <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg font-light mb-12">
          {t.contact.subtitle}
        </p>

        {/* Contact buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-gold-400/15 bg-ink-850/50 backdrop-blur gold-glow-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/15 group-hover:border-gold-400/40 transition-all duration-300">
              <MessageCircle className="w-5 h-5 text-gold-300" />
            </div>
            <span className="text-sm font-medium text-white/80 group-hover:text-gold-200 transition-colors">{t.contact.whatsapp}</span>
          </a>

          <a
            href={`tel:${CONTACT.phoneLink}`}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-gold-400/15 bg-ink-850/50 backdrop-blur gold-glow-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/15 group-hover:border-gold-400/40 transition-all duration-300">
              <Phone className="w-5 h-5 text-gold-300" />
            </div>
            <span className="text-sm font-medium text-white/80 group-hover:text-gold-200 transition-colors">{t.contact.call}</span>
          </a>

          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-gold-400/15 bg-ink-850/50 backdrop-blur gold-glow-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/15 group-hover:border-gold-400/40 transition-all duration-300">
              <Instagram className="w-5 h-5 text-gold-300" />
            </div>
            <span className="text-sm font-medium text-white/80 group-hover:text-gold-200 transition-colors">{t.contact.instagram}</span>
          </a>

          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-gold-400/15 bg-ink-850/50 backdrop-blur gold-glow-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center group-hover:bg-gold-400/15 group-hover:border-gold-400/40 transition-all duration-300">
              <Facebook className="w-5 h-5 text-gold-300" />
            </div>
            <span className="text-sm font-medium text-white/80 group-hover:text-gold-200 transition-colors">{t.contact.facebook}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
