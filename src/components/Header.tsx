import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LogoFull } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { CONTACT, type Lang, type Translation } from '@/translations';

interface HeaderProps {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
  t: Translation;
}

export function Header({ lang, onChangeLang, t }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-ink-950/90 backdrop-blur-xl border-b border-gold-400/10 py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-2 w-full">
        <a href="#hero" className="shrink-0">
          <LogoFull />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-white/80 hover:text-gold-300 transition-colors duration-300 group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-gold-300 to-gold-500 group-hover:w-full transition-all duration-400" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <LanguageSwitcher lang={lang} onChange={onChangeLang} />

          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 text-ink-900 text-sm font-semibold hover:from-gold-200 hover:to-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-400/30"
          >
            {t.nav.book}
          </a>

          <button
            className="lg:hidden p-2 text-white/90 hover:text-gold-300 transition-colors focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-ink-950/95 backdrop-blur-xl border-b border-gold-400/10 animate-slide-down">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-white/90 hover:text-gold-300 transition-colors py-2 border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 text-ink-900 text-sm font-semibold"
            >
              {t.nav.book}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}