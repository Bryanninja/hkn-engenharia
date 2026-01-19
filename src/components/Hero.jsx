import HeroBg from '../assets/images/hero-bg.png';
import Button from './Button';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 h-full w-full">
        <img
          className="h-full w-full object-cover object-center"
          src={HeroBg}
          alt="Engenheiro em obra residencial de alto padrão"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-hkn-black via-hkn-black/65 to-transparent"></div>
      <div className="absolute bottom-0 left-0 h-1 w-full bg-gold-gradient"></div>
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-medium leading-tight text-hkn-white md:text-4xl lg:text-5xl">
            Sua obra segura <br />
            econômica e sem <br />
            imprevistos.
          </h1>

          <p className="max-w-lg text-base text-gray-300 md:text-lg">
            Projetos de engenharia completos e compatibilizados em BIM. Da
            documentação à entrega das chaves, garantimos a precisão que seu
            investimento exige.
          </p>

          <div className="flex flex-col gap-4 md:flex-row">
            <Button size="lg">Solicitar Orçamento</Button>
            <Button size="lg" variant="outline">
              Ver Portfólio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
