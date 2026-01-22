import Ilustration from '../assets/images/Icons.svg';

const SolutionSection = () => {
  return (
    <section className="container mx-auto px-6 pb-0 md:px-12 lg:px-20 lg:py-20">
      <div className="flex flex-col items-center justify-items-start gap-14 lg:flex-row xl:gap-44">
        <div>
          <h3 className="mb-2 text-xl font-semibold text-hkn-gold-light md:text-3xl">
            Soluções completas em Engenharia Civil
          </h3>

          <div className="text-7xl sm:text-8xl">
            <h1 className="font-bold text-hkn-black [-webkit-text-stroke:1px_#EBD197] [paint-order:stroke_fill]">
              Solução
            </h1>
            <h1 className="ml-8 font-bold text-hkn-black [-webkit-text-stroke:1px_#EBD197] [paint-order:stroke_fill] md:ml-24">
              Completa
            </h1>
          </div>
        </div>
        <img
          className="mt-20 hidden h-full w-40 animate-float blur-[2px] lg:flex xl:mt-0 xl:w-60"
          src={Ilustration}
          alt="Ilustração de Casa e blocos de modo abstrato"
        />
      </div>
    </section>
  );
};

export default SolutionSection;
