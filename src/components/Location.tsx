import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { CONTACT, type Translation } from '@/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface LocationProps {
  t: Translation;
}

export function Location({ t }: LocationProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="location" className="relative py-24 md:py-32 overflow-hidden bg-ink-950">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/3 rounded-full blur-3xl" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold-400/80 font-medium mb-4">
            {t.location.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white/95">{t.location.title} </span>
            <span className="text-gradient-gold italic">{t.location.titleAccent}</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-gold-400 text-sm">◆</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Info cards */}
          <div className="space-y-6">
            {/* Address card */}
            <div className="rounded-2xl border border-gold-400/15 bg-ink-850/50 backdrop-blur p-8 gold-glow-hover">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold-300" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-white/95 mb-2">{t.location.address}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{t.location.addressLine}</p>
                  <a
                    href={CONTACT.directionsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 text-ink-900 text-sm font-semibold hover:from-gold-200 hover:to-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/25"
                  >
                    <Navigation className="w-4 h-4" />
                    {t.location.directions}
                  </a>
                </div>
              </div>
            </div>

            {/* Contact info card */}
            <div className="rounded-2xl border border-gold-400/15 bg-ink-850/50 backdrop-blur p-8 gold-glow-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-gold-300" />
                </div>
                <div>
                  <span className="text-xs text-gold-400/70 uppercase tracking-wide">{t.location.phone}</span>
                  <a href={`tel:${CONTACT.phoneLink}`} className="block text-white/90 hover:text-gold-200 transition-colors">
                    {CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-gold-300" />
                </div>
                <div>
                  <span className="text-xs text-gold-400/70 uppercase tracking-wide">{t.location.email}</span>
                  <a href={`mailto:${CONTACT.email}`} className="block text-white/90 hover:text-gold-200 transition-colors">
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening hours card */}
            <div className="rounded-2xl border border-gold-400/15 bg-ink-850/50 backdrop-blur p-8 gold-glow-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gold-400/10 border border-gold-400/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-gold-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-white/95">{t.location.hours}</h3>
              </div>
              <div className="space-y-2">
                {t.location.hoursTable.map((row, i) => {
                  const isClosed = row.time.includes('Geschlossen') || row.time.includes('Closed') || row.time.includes('Zatvoreno');
                  const isToday = new Date().getDay() === ((i + 1) % 7);
                  return (
                    <div
                      key={i}
                      className={`flex items-center justify-between py-2.5 px-4 rounded-lg transition-colors ${
                        isToday ? 'bg-gold-400/8 border border-gold-400/20' : 'border border-transparent'
                      }`}
                    >
                      <span className={`text-sm font-medium ${isToday ? 'text-gold-200' : 'text-white/70'}`}>
                        {row.day}
                        {isToday && <span className="ml-2 text-[10px] text-gold-400 uppercase tracking-wider">●</span>}
                      </span>
                      <span className={`text-sm ${isClosed ? 'text-red-400/70' : isToday ? 'text-gold-200' : 'text-white/60'}`}>
                        {row.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Google Maps */}
          <div className="relative rounded-2xl overflow-hidden border border-gold-400/15 min-h-[400px] lg:min-h-full gold-glow-hover">
            <iframe
              src={CONTACT.mapsEmbed}
              className="w-full h-full absolute inset-0"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Google Maps – Ottakringer Straße 62, 1170 Wien"
            />
            {/* Gold border frame */}
            <div className="absolute inset-0 pointer-events-none border-2 border-gold-400/0 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
