interface LogoProps {
  className?: string;
}

export function LogoMark({ className = '' }: LogoProps) {
  return (
    <img
      src="/images/logo_igor.png"
      alt="Selami & Igor"
      className={`object-contain !bg-transparent !border-0 !shadow-none !p-0 ${className}`}
    />
  );
}

export function LogoFull({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 !bg-transparent !border-0 !shadow-none !p-0 ${className}`}>
      <LogoMark className="w-16 h-12 md:w-20 md:h-14 shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-lg md:text-xl font-bold tracking-wider text-gradient-gold-bright">
          SELAMI &amp; IGOR
        </span>
        <span className="text-[9px] md:text-[10px] tracking-[0.3em] text-gold-400/70 uppercase mt-0.5">
          Premium Hair Salon
        </span>
      </div>
    </div>
  );
}
