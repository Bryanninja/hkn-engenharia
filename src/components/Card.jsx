import { BsThreeDots } from 'react-icons/bs';

const Card = ({ title, subtitle, image, video, className }) => {
  return (
    <div
      className={`group relative flex w-full flex-col justify-between rounded-2xl transition-all duration-500 hover:-translate-y-2 ${className}`}
    >
      {/* === CAMADA 1: A BORDA MÁGICA === */}
      <div
        // AQUI ESTÁ A CORREÇÃO:
        // 1. Definimos a variável --border-color no estado normal: [--border-color:rgba(255,255,255,0.15)]
        // 2. Definimos a variável no hover: group-hover:[--border-color:rgba(235,209,151,0.6)]
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl border border-transparent transition-all duration-500 [--border-color:rgba(255,255,255,0.15)] group-hover:[--border-color:rgba(235,209,151,0.6)]"
        style={{
          // Usamos a variável --border-color que definimos ali em cima na className
          background: `linear-gradient(to bottom right, var(--border-color), transparent 40%, transparent 5%, var(--border-color)) border-box`,

          // A Máscara (Isso continua igual, é o segredo do recorte)
          WebkitMask:
            'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      ></div>

      {/* === CAMADA 2: O CONTEÚDO === */}

      <div className="relative z-10 flex w-full flex-col justify-between overflow-hidden rounded-2xl">
        <div className="flex items-start justify-between px-5 py-6">
          <h2 className="text-xl font-semibold text-hkn-white transition-colors group-hover:text-hkn-gold-light">
            {title}
          </h2>
          <BsThreeDots className="text-xl text-hkn-gold-light" />
        </div>

        <div className="w-full">
          {video ? (
            <div className="aspect-video w-full">
              <div className="relative z-30 h-full w-full">{video}</div>
            </div>
          ) : (
            <img
              src={image}
              alt={title}
              className="w-full object-contain transition-transform duration-700 group-hover:scale-105"
            />
          )}
        </div>

        <div className="px-5 py-6">
          <p className="text-pretty text-sm leading-relaxed text-hkn-muted transition-colors group-hover:text-hkn-gray">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
