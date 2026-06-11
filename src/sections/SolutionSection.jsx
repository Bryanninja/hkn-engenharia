import IconEngineer from '../assets/icons/IconEngineer.svg';
import IconFolder from '../assets/icons/IconFolder.svg';
import Ilustration from '../assets/icons/Icons.svg';
import IconStructue from '../assets/icons/IconStructure.svg';
import IconTech from '../assets/icons/IconTech.svg';
import CardSolution from '../components/CardSolution';
import ScrollReveal from '../components/ScrollReveal';

const SolutionSection = () => {
  return (
    <section
      id="servicos"
      className="container mx-auto space-y-20 px-6 pb-0 md:px-12 lg:px-20 lg:py-20"
    >
      <div className="flex flex-col items-center justify-items-start gap-14 lg:flex-row xl:gap-44">
        <div>
          <ScrollReveal>
            <h3 className="mb-2 text-pretty text-xl font-semibold text-hkn-gold-light md:text-3xl">
              Soluções completas em Engenharia Civil
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-6xl sm:text-8xl">
              <h1 className="font-bold text-hkn-black [-webkit-text-stroke:1px_#EBD197] [paint-order:stroke_fill]">
                Solução
              </h1>
              <h1 className="ml-8 font-bold text-hkn-black [-webkit-text-stroke:1px_#EBD197] [paint-order:stroke_fill] md:ml-24">
                Completa
              </h1>
            </div>
          </ScrollReveal>
        </div>
        <img
          className="mt-20 hidden h-full w-40 animate-float opacity-35 blur-[0.6px] lg:flex xl:mt-0 xl:w-60"
          src={Ilustration.src || Ilustration}
          alt="Ilustração de Casa e blocos de modo abstrato"
        />
      </div>

      <ScrollReveal width="100%" delay={0.4}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          <CardSolution
            title="Projeto Estrutural Completo"
            subtitle="Estrutura de concreto, metálica, elétrico, hidrossanitário e climatização — tudo integrado e compatibilizado para evitar conflitos na hora da execução."
            icon={IconStructue}
          />
          <CardSolution
            title="Legalização sem Burocracia"
            subtitle="Nós cuidamos de tudo junto à prefeitura: alvarás, regularizações e documentação. Você foca na sua obra, a gente cuida do papel."
            icon={IconFolder}
          />
          <CardSolution
            title="Automação e Tecnologias Especiais"
            subtitle="Cabeamento estruturado, câmeras (CFTV), telecomunicações, projeto luminotécnico e piscinas. Sua casa com o padrão que você merece."
            icon={IconTech}
          />
          <CardSolution
            title="Consultoria e Acompanhamento de Obra"
            subtitle="Visitas técnicas periódicas, laudos e fiscalização para garantir que a execução siga rigorosamente o projeto. Você tem um engenheiro do seu lado."
            icon={IconEngineer}
          />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default SolutionSection;
