import { useState } from 'react';
import { type Translation } from '@/translations';
import { useScrollReveal } from '@/hooks/useScrollReveal';

type FilterKey = 'all' | 'vip' | 'styling' | 'haircare';

interface GalleryItem {
  src: string;
  alt: string;
  category: Exclude<FilterKey, 'all'>[];
}

const galleryItems: GalleryItem[] = [
  { src: 'https://images.pexels.com/photos/4625630/pexels-photo-4625630.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Haircut in barbershop', category: ['styling'] },
  { src: 'https://images.pexels.com/photos/29570984/pexels-photo-29570984.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Stylish modern haircut', category: ['vip', 'styling'] },
  { src: 'https://images.pexels.com/photos/9992819/pexels-photo-9992819.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Barber styling hair', category: ['haircare'] },
  { src: 'https://images.pexels.com/photos/11904768/pexels-photo-11904768.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Fashion portrait', category: ['vip', 'styling'] },
  { src: 'https://images.pexels.com/photos/32329615/pexels-photo-32329615.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Barber cutting hair', category: ['haircare'] },
  { src: 'https://images.pexels.com/photos/7828880/pexels-photo-7828880.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Modern hairstyle portrait', category: ['vip', 'styling'] },
  { src: 'https://images.pexels.com/photos/4625623/pexels-photo-4625623.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Trendy men\'s grooming', category: ['styling'] },
  { src: 'https://images.pexels.com/photos/18397314/pexels-photo-18397314.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Elegant bearded portrait', category: ['vip'] },
  { src: 'https://images.pexels.com/photos/4625648/pexels-photo-4625648.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Professional haircut', category: ['haircare'] },
  { src: 'https://images.pexels.com/photos/11395986/pexels-photo-11395986.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Dark suit modern cut', category: ['vip', 'styling'] },
  { src: 'https://images.pexels.com/photos/4422102/pexels-photo-4422102.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Artistic haircut', category: ['styling'] },
  { src: 'https://images.pexels.com/photos/16098668/pexels-photo-16098668.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Barbershop modern cut', category: ['haircare'] },
];

interface GalleryProps {
  t: Translation;
}

export function Gallery({ t }: GalleryProps) {
  const [filter, setFilter] = useState<FilterKey>('all');
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: t.gallery.filters.all },
    { key: 'vip', label: t.gallery.filters.vip },
    { key: 'styling', label: t.gallery.filters.styling },
    { key: 'haircare', label: t.gallery.filters.haircare },
  ];

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter((item) => item.category.includes(filter as Exclude<FilterKey, 'all'>));

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden bg-ink-950">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-400/3 rounded-full blur-3xl" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs tracking-[0.4em] uppercase text-gold-400/80 font-medium mb-4">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white/95">{t.gallery.title} </span>
            <span className="text-gradient-gold italic">{t.gallery.titleAccent}</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
            <span className="text-gold-400 text-sm">◆</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
          <p className="text-white/55 max-w-2xl mx-auto text-base md:text-lg font-light">
            {t.gallery.subtitle}
          </p>
        </div>

        {/* Filter tags */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                filter === f.key
                  ? 'bg-gradient-to-r from-gold-300 to-gold-500 text-ink-900 shadow-lg shadow-gold-400/20'
                  : 'border border-gold-400/20 text-white/60 hover:border-gold-400/40 hover:text-gold-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filtered.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
              style={{
                animation: `fadeIn 0.5s ease-out ${i * 50}ms both`,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              {/* Gold border on hover */}
              <div className="absolute inset-0 border-2 border-gold-400/0 group-hover:border-gold-400/40 rounded-xl transition-all duration-500" />
              {/* Gold glow */}
              <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(212,175,55,0)] group-hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 rounded-xl" />
              {/* Category badge */}
              <div className="absolute bottom-3 left-3 flex gap-1.5">
                {item.category.map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-0.5 rounded-full bg-ink-950/70 backdrop-blur text-[10px] text-gold-300 border border-gold-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    {cat === 'vip' ? t.gallery.filters.vip : cat === 'styling' ? t.gallery.filters.styling : t.gallery.filters.haircare}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
