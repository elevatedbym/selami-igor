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
    <div className={`flex items-center gap-2 md:gap-3 !bg-transparent !border-0 !shadow-none !p-0 ${className}`}>
      <LogoMark className="w-12 h-10 sm:w-16 sm:h-12 md:w-20 md:h-14 shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="font-serif text-sm sm:text-lg md:text-xl font-bold tracking-normal sm:tracking-wider whitespace-nowrap text-gradient-gold-bright">
          SELAMI &amp; IGOR
        </span>
        <span className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-gold-400/70 uppercase mt-0.5 whitespace-nowrap">
          Premium Hair Salon
        </span>
      </div>
    </div>
  );
}