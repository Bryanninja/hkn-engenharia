import Ilustration from '../assets/icons/Icons.svg';
import Customer1 from '../assets/images/Customer1.png';
import Customer2 from '../assets/images/Customer2.png';
import TestimonialItem from '../components/TestimonialItem';

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative space-y-16 md:space-y-20">
          {/* Titulo */}
          <h1 className="text-5xl font-semibold text-hkn-gold md:text-6xl lg:text-7xl">
            Depoimentos
          </h1>

          {/* Ilustração Flutuante */}
          <div className="absolute right-0 top-0 -z-10">
            <img
              className="hidden h-full w-40 animate-float opacity-35 blur-[0.6px] xl:flex"
              src={Ilustration}
              alt="Ilustração de Casa e blocos de modo abstrato"
            />
          </div>

          {/* Depoimento 1 (Normal) */}
          <TestimonialItem
            image={Customer1}
            name="Ricardo Gomes"
            role="Proprietário Residencial"
            quote="Eu achava que o projeto seria apenas mais um custo, mas a economia que tivemos na compra de materiais pagou o investimento. O detalhamento do Hyagor evitou desperdícios."
          />

          {/* Depoimento 2 (Invertido) */}
          <TestimonialItem
            image={Customer2}
            name="Fernanda Lima"
            role="Empresária"
            quote="Precisávamos de agilidade na liberação do alvará e um projeto estrutural complexo. A HKN entregou tudo compatibilizado antes do prazo. É raro encontrar esse nível de precisão."
            isReversed // <--- A Mágica acontece aqui
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
