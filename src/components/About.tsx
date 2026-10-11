import { Crown, Scissors, Sparkles } from 'lucide-react';
import { type Translation } from '@/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const icons = [Crown, Scissors, Sparkles];

interface AboutProps {
  t: Translation;
}

export function About({ t }: AboutProps) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent" />

      <div ref={ref} className={`relative z-10 max-w-6xl mx-auto px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Label */}
        <div className="text-center mb-6">
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold-400/80 font-medium">
            {t.about.label}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          <span className="text-white/95">{t.about.title} </span>
          <span className="text-gradient-gold italic">{t.about.titleAccent}</span>
        </h2>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
          <span className="text-gold-400 text-sm">◆</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
        </div>

        {/* Description */}
        <p className="text-center text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-16 font-light">
          {t.about.text}
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.about.features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-gold-400/15 bg-ink-850/50 backdrop-blur p-8 gold-glow-hover"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Top gold accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent group-hover:w-full transition-all duration-500" />

                {/* Icon */}
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold-400/10 border border-gold-400/20 group-hover:bg-gold-400/15 group-hover:border-gold-400/40 transition-all duration-300">
                  <Icon className="w-6 h-6 text-gold-300" />
                </div>

                <h3 className="font-serif text-xl md:text-2xl font-semibold text-white/95 mb-3 group-hover:text-gold-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-white/55 leading-relaxed">
                  {feature.desc}
                </p>

                {/* Corner accent */}
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-gold-400/0 group-hover:border-gold-400/30 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
