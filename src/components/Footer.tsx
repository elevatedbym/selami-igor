import { Instagram, Facebook, Phone } from 'lucide-react';
import { LogoFull } from './Logo';
import { CONTACT, type Translation } from '@/translations';

interface FooterProps {
  t: Translation;
}

export function Footer({ t }: FooterProps) {
  return (
    <footer className="relative bg-ink-950 border-t border-gold-400/10 pt-16 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start gap-4">
            <LogoFull />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold-400/80 font-medium">
              {t.footer.quickLinks}
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                { label: t.nav.about, href: '#about' },
                { label: t.nav.gallery, href: '#gallery' },
                { label: t.nav.contact, href: '#contact' },
                { label: t.location.label, href: '#location' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-gold-300 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Follow us */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="text-xs tracking-[0.3em] uppercase text-gold-400/80 font-medium">
              {t.footer.followUs}
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-300 hover:bg-gold-400/10 hover:border-gold-400/40 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-300 hover:bg-gold-400/10 hover:border-gold-400/40 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`tel:${CONTACT.phoneLink}`}
                className="w-10 h-10 rounded-full border border-gold-400/20 flex items-center justify-center text-gold-300 hover:bg-gold-400/10 hover:border-gold-400/40 transition-all duration-300"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
            <a
              href={`tel:${CONTACT.phoneLink}`}
              className="text-sm text-white/60 hover:text-gold-300 transition-colors mt-1"
            >
              {CONTACT.phoneDisplay}
            </a>
            <p className="text-sm text-white/40">{CONTACT.address}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Selami &amp; Igor. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/40 hover:text-gold-300 transition-colors">
              {t.footer.impressum}
            </a>
            <a href="#" className="text-xs text-white/40 hover:text-gold-300 transition-colors">
              {t.footer.datenschutz}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
