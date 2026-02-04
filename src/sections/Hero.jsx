import { IoLocationSharp } from 'react-icons/io5';

import HeroBg from '../assets/images/hero-bg.png';
import Badge from '../components/Badge';
import Button from '../components/Button';
import Divider from '../components/Divider';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* 1. Imagem de Fundo */}
      <div className="absolute inset-0 h-full w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={HeroBg}
          alt="Engenheiro em obra residencial de alto padrão"
        />
      </div>

      {/* 2. Gradientes */}

      {/* CAMADA A: Escurece a esquerda para o texto (Linear) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-hkn-black via-hkn-black/80 to-hkn-black/40 lg:via-hkn-black/50 lg:to-transparent"></div>

      {/* CAMADA B: Escurece da esqueda para a direita */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-l from-hkn-black/30 via-transparent to-transparent"></div>

      {/* Divider (Linha Dourada) */}
      <Divider className="absolute bottom-0 left-0 z-20" />

      {/* Badge Flutuante Desktop */}
      <Badge className="absolute right-[10%] top-[35%] z-20" variant="desktop">
        <IoLocationSharp />
        Especialista em Obras Residenciais e Comerciais
      </Badge>

      {/* 3. Conteúdo Principal */}
      <div className="container relative z-20 mx-auto flex h-full flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl space-y-6">
          <Badge variant="mobile">
            <IoLocationSharp className="text-gray-300" />
            Especialista em Obras
          </Badge>

          <h1 className="text-4xl font-semibold text-hkn-white lg:text-5xl lg:leading-[110%]">
            Sua obra segura, <br />
            econômica e sem <br />
            imprevistos.
          </h1>

          <p className="max-w-lg text-base text-gray-300 md:text-lg">
            Projetos de engenharia completos e compatibilizados em BIM. Da
            documentação à entrega das chaves, garantimos a precisão que seu
            investimento exige.
          </p>

          <div className="flex flex-col gap-4 md:flex-row">
            {/* Botão de Orçamento */}
            <a href="#" target="_blank" rel="noreferrer">
              <Button size="lg">Solicitar Orçamento</Button>
            </a>

            <a href="#portfolio" className="w-full md:w-auto">
              <Button size="lg" variant="outline" className="w-full">
                Ver Portfólio
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
