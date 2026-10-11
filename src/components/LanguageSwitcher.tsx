import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { LANGS, type Lang } from '@/translations';

interface LanguageSwitcherProps {
  lang: Lang;
  onChange: (lang: Lang) => void;
}

export function LanguageSwitcher({ lang, onChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const current = LANGS.find((l) => l.code === lang)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-gold-400/30 bg-ink-850/80 backdrop-blur hover:border-gold-400/60 transition-all duration-300 group"
        aria-label="Select language"
      >
        <Globe className="w-4 h-4 text-gold-400" />
        <span className="text-sm font-medium text-gold-300">{current.flag}</span>
        <span className="text-xs font-medium text-white/90">{current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-gold-400/70 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-full mt-2 z-50 w-44 rounded-xl border border-gold-400/20 bg-ink-850/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-slide-down origin-top-right">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  onChange(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-200 ${
                  l.code === lang
                    ? 'bg-gold-400/10 text-gold-300'
                    : 'text-white/80 hover:bg-gold-400/5 hover:text-gold-200'
                }`}
              >
                <span className="text-base">{l.flag}</span>
                <span className="font-medium">{l.label}</span>
                {l.code === lang && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gold-400" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
