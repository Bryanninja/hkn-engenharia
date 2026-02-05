const CardSolution = ({ icon, title, subtitle }) => {
  return (
    // CONTAINER PRINCIPAL
    <div className="group relative h-full w-full rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-hkn-goldTransparent/10">
      {/* === CAMADA 1: A BORDA MÁGICA === */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl border border-transparent transition-all duration-500 [--border-color:rgba(255,255,255,0.15)] group-hover:[--border-color:rgba(235,209,151,0.6)]"
        style={{
          // Gradiente da borda
          background: `linear-gradient(to bottom right, var(--border-color), transparent 40%, transparent 5%, var(--border-color)) border-box`,

          // A Máscara de Recorte
          WebkitMask:
            'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      ></div>

      {/* === CAMADA 2: O CONTEÚDO === */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center space-y-6 rounded-2xl px-4 py-6 text-center xl:px-12 xl:py-10">
        {/* Ícone */}
        <img
          className="h-32 w-32 object-contain transition-transform duration-500 group-hover:scale-110"
          src={icon}
          alt="ícone ilustrativo"
        />

        {/* Textos */}
        <div className="space-y-2">
          <h2 className="text-balance text-2xl font-semibold text-hkn-white transition-colors group-hover:text-hkn-gold-light">
            {title}
          </h2>
          <p className="mx-auto max-w-sm text-pretty text-base text-hkn-muted transition-colors group-hover:text-hkn-gray">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardSolution;
