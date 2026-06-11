import Person from '../assets/images/hyagor-big.webp';
import LogoBackground from '../assets/images/LogoBackground.svg';
import Button from '../components/Button';
import Divider from '../components/Divider';
import ScrollReveal from '../components/ScrollReveal';
import { getWhatsAppLink } from '../utils/whatsapp';

const WhoSection = () => {
  return (
    <section id="quem-somos" className="relative overflow-hidden pb-0 pt-20">
      <div className="container relative mx-auto px-6 md:px-12 lg:px-20">
        {/* 1. Cabeçalho */}
        <div className="relative z-10">
          <ScrollReveal>
            <h2 className="text-balance text-4xl font-semibold text-hkn-white lg:text-5xl lg:leading-[110%]">
              O engenheiro que <br className="hidden sm:block" /> cuida do seu
              sonho
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-2 text-base font-medium text-hkn-muted lg:text-lg">
              Hyagor Kevelhen - Engenheiro Civil
            </p>
          </ScrollReveal>
        </div>

        {/* 2. Área da Foto (Wrapper) */}

        <ScrollReveal delay={0.4} width="100%">
          <div className="relative mt-10 flex items-end justify-center xl:-mt-20">
            {/* Elementos de Fundo */}
            <div className="absolute left-1/2 top-1/2 z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-hkn-white/5 blur-[80px]"></div>

            <img
              className="absolute top-auto z-0 scale-100 opacity-80"
              src={LogoBackground.src || LogoBackground}
              alt="background Logo"
            />

            {/* A Foto */}

            <img
              className="relative z-10 w-full max-w-[500px] object-cover xl:max-w-[600px]"
              src={Person.src || Person}
              alt="Foto Hyagor Engenheiro Civil"
            />

            {/* Card Desktop (Invisível no Mobile) */}
            <div className="absolute bottom-10 right-0 z-20 hidden max-w-lg animate-float rounded-2xl border border-hkn-gold/30 bg-hkn-surface/90 p-8 backdrop-blur-md xl:flex xl:flex-col xl:gap-6">
              <p className="text-pretty text-lg leading-relaxed text-gray-300">
                Meu nome é Hyagor Kevelhen. Sou Engenheiro Civil com anos de
                experiência em obras residenciais e projetos de alta
                complexidade. Sei que construir é um dos maiores investimentos
                da sua vida — e me comprometo pessoalmente com cada detalhe para
                que tudo saia como você planejou, sem surpresas e sem estresse.
              </p>
              <div>
                <a
                  href={getWhatsAppLink(
                    'Olá! Vi o portfólio no site e gostei bastante do padrão. Gostaria de verificar disponibilidade para conversarmos sobre minha obra.'
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="full">Falar com Engenheiro</Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* --- LINHA DOURADA (FORA DO CONTAINER) --- */}
      <Divider className="relative z-20 xl:hidden" />

      {/* 3. Texto Mobile  */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col gap-6 rounded-2xl bg-transparent py-10 xl:hidden">
            <p className="text-pretty text-base leading-relaxed text-gray-300">
              Meu nome é Hyagor Kevelhen. Sou Engenheiro Civil com experiência
              em obras residenciais e projetos de alta complexidade. Sei que
              construir é um dos maiores investimentos da sua vida — e me
              comprometo pessoalmente com cada detalhe para que tudo saia como
              você planejou, sem surpresas e sem estresse.
            </p>
            <Button className="w-full">Falar com Engenheiro</Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default WhoSection;
