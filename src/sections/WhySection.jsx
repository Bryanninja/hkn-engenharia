import Card1 from '../assets/images/imageCard1.png';
import Card3 from '../assets/images/imageCard3.png';
import Card from '../components/Card';

const WhySection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="relative z-10 mb-14 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-hkn-gold-light">
          Diferenciais HKN
        </span>
        <h1 className="mt-4 text-center text-3xl font-semibold leading-tight md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight">
          Por que investir em um <br /> projeto integrado?
        </h1>
      </div>

      <div className="pointer-events-none absolute -right-20 top-1/2 z-0 h-[600px] w-[700px] -translate-y-1/2 rounded-full bg-hkn-white/5 blur-[120px] xl:w-[1000px]"></div>
      <div className="pointer-events-none absolute left-[50%] top-[20%] z-[1] hidden -translate-x-1/2 bg-gradient-to-r from-[#181818] to-[#1f1f1f] bg-clip-text text-[14rem] font-semibold text-hkn-card/15 opacity-15 lg:flex xl:text-[16rem]">
        Projetos
      </div>

      {/* Grid de Cards */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr,1.2fr,1fr] lg:gap-10 xl:gap-20">
          <Card
            className="lg:mt-8"
            title="Economia Real"
            subtitle="Projetos otimizados evitam desperdício de material. Você compra apenas o necessário."
            image={Card1}
          />

          <Card
            title="Tecnologia BIM"
            subtitle="Antecipamos os problemas da obra no computador garantindo zero erros na execução."
            video={
              <iframe
                className="h-full w-full rounded-md"
                src="https://www.youtube.com/embed/cjstltuao9w"
                title="Conheça um pouco do meu trabalho!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            }
          />

          <Card
            className="lg:mt-8"
            title="Solução Completa"
            subtitle="Do alvará ao acabamento. Você não precisa contratar 5 profissionais diferentes."
            image={Card3}
          />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
