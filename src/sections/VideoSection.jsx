'use client';

import { useState } from 'react';

import ScrollReveal from '../components/ScrollReveal';

const VIDEO_ID = 'cjstltuao9w';

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative overflow-hidden bg-hkn-surface py-20">
      {/* Gradiente decorativo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hkn-gold/5 blur-[120px]"></div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        {/* Cabeçalho */}
        <div className="mb-12 text-center">
          <ScrollReveal width="100%">
            <span className="text-xs font-semibold uppercase tracking-widest text-hkn-gold-light">
              Veja na prática
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.2} width="100%">
            <h2 className="mt-4 text-balance text-center text-4xl font-semibold text-hkn-white lg:text-5xl lg:leading-[110%]">
              Como a HKN transforma <br className="hidden md:block" /> um
              projeto em realidade
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3} width="100%">
            <p className="mx-auto mt-4 max-w-xl text-pretty text-center text-base text-hkn-muted md:text-lg">
              Acompanhe de perto o processo, a tecnologia e a atenção ao detalhe
              que fazem a diferença em cada obra que assinamos.
            </p>
          </ScrollReveal>
        </div>

        {/* Player */}
        <ScrollReveal delay={0.4} width="100%">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-hkn-gold/20 shadow-2xl shadow-black/60">
            {/* Borda dourada sutil */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-hkn-gold/20"></div>

            <div className="aspect-video w-full bg-hkn-black">
              {playing ? (
                /* Iframe com autoplay — só carrega quando o usuário clica */
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="Conheça o trabalho da HKN Engenharia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                /* Facade: thumbnail + botão play customizado */
                <button
                  id="video-play-btn"
                  aria-label="Assistir vídeo da HKN Engenharia"
                  onClick={() => setPlaying(true)}
                  className="group relative h-full w-full cursor-pointer"
                >
                  {/* Thumbnail do YouTube — imagem leve, alta qualidade */}
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt="Thumbnail do vídeo HKN Engenharia"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width="1280"
                    height="720"
                    loading="lazy"
                    decoding="async"
                  />

                  {/* Overlay escuro suave */}
                  <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40"></div>

                  {/* Botão Play */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-hkn-gold group-hover:bg-hkn-gold/20 md:h-24 md:w-24">
                      <svg
                        className="ml-1.5 h-8 w-8 text-white transition-colors duration-300 group-hover:text-hkn-gold md:h-10 md:w-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Label abaixo do play */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-black/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm transition-colors duration-300 group-hover:text-hkn-gold-light">
                      Assistir agora
                    </span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VideoSection;
