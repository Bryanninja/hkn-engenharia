import Card1 from '../assets/images/imageCard1.webp';
import Card2 from '../assets/images/imageCard2.webp';
import Card3 from '../assets/images/imageCard3.webp';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';

const WhySection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="relative z-10 mb-14 text-center">
        <ScrollReveal width="100%">
          <span className="text-xs font-semibold uppercase tracking-widest text-hkn-gold-light">
            Diferenciais HKN
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.2} width="100%">
          <h2 className="mt-4 text-balance text-center text-4xl font-semibold md:text-4xl lg:text-5xl lg:leading-[110%]">
            O que faz a HKN <br /> ser diferente?
          </h2>
        </ScrollReveal>
      </div>

      <div className="pointer-events-none absolute -right-20 top-1/2 z-0 h-[600px] w-[700px] -translate-y-1/2 rounded-full bg-hkn-white/5 blur-[120px] xl:w-[1000px]"></div>

      <div className="pointer-events-none absolute left-[50%] top-[20%] z-[1] hidden -translate-x-1/2 bg-gradient-to-r from-[#181818] to-[#1f1f1f] bg-clip-text text-[14rem] font-semibold text-hkn-card/15 opacity-15 lg:flex xl:text-[16rem]">
        Projetos
      </div>

      {/* Grid de Cards */}
      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr,1.2fr,1fr] lg:gap-10 xl:gap-20">
          <ScrollReveal width="100%" delay={0.7}>
            <Card
              className="lg:mt-8"
              title="Economia Real"
              subtitle="Projetos detalhados evitam desperdício de material. Você compra exatamente o que precisa e não paga por nada a mais."
              image={Card1}
            />
          </ScrollReveal>

          <ScrollReveal width="100%" delay={0.5}>
            <Card
              title="Zero Surpresas"
              subtitle="Identificamos e resolvemos os problemas antes de chegar na obra. Menos retrabalho, prazo cumprido e orçamento respeitado."
              image={Card2}
            />
          </ScrollReveal>

          <ScrollReveal width="100%" delay={0.7}>
            <Card
              className="lg:mt-8"
              title="Solução Completa"
              subtitle="Do alvará ao acabamento, tudo com um único responsável técnico. Você não precisa gerenciar 5 profissionais diferentes."
              image={Card3}
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
