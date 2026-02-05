import footerImg from '../assets/images/footerImg.png';
import Button from '../components/Button';
import Divider from '../components/Divider';
import ScrollReveal from '../components/ScrollReveal';
import { getWhatsAppLink } from '../utils/whatsapp';

const PreFooter = () => {
  return (
    <section
      id="contato"
      className="relative h-[500px] w-full overflow-hidden lg:h-[600px]"
    >
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={footerImg}
          alt="Imagem da fachada de um imóvel"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* O Gradiente Mágico*/}
      <div className="absolute inset-0 bg-gradient-to-t from-hkn-black via-hkn-black/60 to-black/20"></div>

      {/* Divider separando visualmente */}
      <Divider className="absolute bottom-0 left-0 z-20" />

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-semibold text-white lg:text-5xl lg:leading-[110%]">
              Vamos tirar seu <br /> projeto do papel?
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="max-w-sm text-pretty text-center text-sm text-gray-300 md:max-w-lg md:text-lg">
              Evite dores de cabeça e garanta a melhor engenharia para o seu
              imóvel. Fale diretamente comigo.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <a
              href={getWhatsAppLink(
                'Olá! Vim pelo site e gostei bastante, gostaria de um orçamento. Como funciona?.'
              )}
              target="_blank"
              rel="noreferrer"
            >
              <Button className="p-4" size="lg">
                Solicitar orçamento do meu sonho!
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
