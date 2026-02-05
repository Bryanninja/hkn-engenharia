import LogoConstructa from '../assets/icons/LogoConstructa.svg';
import LogoDelta from '../assets/icons/LogoDelta.svg';
import LogoILS from '../assets/icons/LogoILS.svg';
import LogoIrmaos from '../assets/icons/LogoIrmaosSilva.svg';
import ScrollReveal from '../components/ScrollReveal';

const Partners = () => {
  const partners = [
    { name: 'Constructa', logo: LogoConstructa },
    { name: 'Irmãos Silva', logo: LogoIrmaos },
    { name: 'ILS Construções', logo: LogoILS },
    { name: 'Delta Engenharia', logo: LogoDelta },
  ];

  return (
    <section className="w-full border-t border-hkn-white/5 bg-hkn-surface py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <ScrollReveal width="100%">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-hkn-muted/60">
            Empresas que confiam na HKN
          </p>
        </ScrollReveal>

        {/* GRID RESPONSIVO: 
            - 2 colunas no celular
            - 4 colunas no desktop
        */}
        <ScrollReveal delay={0.2} width="100%">
          <div className="grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-4 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group relative flex h-20 w-full items-center justify-center transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="max-h-10 w-auto object-contain opacity-30 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 md:max-h-12"
                />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Partners;
