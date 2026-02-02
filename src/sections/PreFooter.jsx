import footerImg from '../assets/images/footerImg.png';
import Button from '../components/Button';
import Divider from '../components/Divider';

const PreFooter = () => {
  return (
    <section id="contato" className="relative h-screen w-full overflow-hidden">
      {/* 1. Imagem de Fundo */}
      <div className="w-ful absolute inset-0 h-full">
        <img
          src={footerImg}
          alt="Imagem da faixada de um imóvel"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* 2. Gradiente / divisa */}
      <div className="absolute inset-0 bg-gradient-to-t from-hkn-black to-hkn-black/30"></div>
      <Divider className="absolute bottom-0 left-0 z-10" />

      {/* 3. Conteúdo Principal */}
      <div className="container relative z-10 mx-auto flex h-full flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-4xl font-semibold text-hkn-white md:text-4xl lg:text-5xl">
            Vamos tirar seu <br /> projeto do papel?
          </h1>

          <p className="max-w-md text-center text-base text-gray-300 md:max-w-lg md:text-lg">
            Evite dores de cabeça e garanta a melhor engenharia para o seu
            imóvel. Fale diretamente comigo.
          </p>

          <Button size="lg">Solicitar orçamento do meu sonho!</Button>
        </div>
      </div>
    </section>
  );
};

export default PreFooter;
