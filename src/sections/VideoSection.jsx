'use client';

import { useEffect, useRef, useState } from 'react';

import ScrollReveal from '../components/ScrollReveal';

const VideoSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Carrega uma vez, não precisa mais observar
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-hkn-surface py-20"
    >
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

        {/* Player de Vídeo */}
        <ScrollReveal delay={0.4} width="100%">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-hkn-gold/20 shadow-2xl shadow-black/60">
            {/* Borda dourada sutil */}
            <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-hkn-gold/20"></div>

            {/* Aspect ratio 16:9 */}
            <div className="aspect-video w-full bg-hkn-black">
              {isVisible ? (
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/cjstltuao9w?rel=0&modestbranding=1"
                  title="Conheça o trabalho da HKN Engenharia"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                // Placeholder enquanto não entrou na tela (evita requisição desnecessária)
                <div className="flex h-full w-full items-center justify-center bg-hkn-black">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-hkn-gold/30 border-t-hkn-gold"></div>
                </div>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VideoSection;
