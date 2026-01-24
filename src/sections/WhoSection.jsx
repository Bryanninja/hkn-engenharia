import Person from '../assets/images/hyagor-big.png';
import LogoBackground from '../assets/images/LogoBackground.svg';
import Badge from '../components/Badge';
import Button from '../components/Button';

const WhoSection = () => {
  return (
    <section
      id="contato"
      className="container relative mx-auto px-6 pt-20 md:px-12 lg:px-20"
    >
      <div>
        <h2 className="text-5xl font-semibold leading-tight">
          Quem cuida do seu <br /> patrimônio
        </h2>
        <p className="text-hkn-muted">Hyagor Kevelhen - Engenheiro Civil</p>
      </div>

      <div className="-mt-20 flex items-end justify-center">
        <img
          className="relative z-10"
          src={Person}
          alt="Foto Hyagor Engenheiro Civil"
        />
        {/* <div className="absolute z-[1] h-[500px] w-[500px] rounded-full bg-hkn-black blur-2xl"></div> */}
        <img
          className="absolute z-0"
          src={LogoBackground}
          alt="Logo de Background"
        />

        <Badge className="absolute right-0 top-[65%] z-20 rounded-2xl bg-hkn-goldTransparent/90">
          <div className="flex max-w-xl flex-col gap-6 p-4 text-lg">
            Por trás da HKN, existe o compromisso técnico de quem entende que
            uma obra não aceita erros. Especialista em compatibilização de
            projetos e BIM, meu papel é garantir que a execução da sua casa ou
            comércio siga rigorosamente o planejado, unindo a segurança
            normativa com a economia inteligente.
            <Button>Falar com Engenheiro</Button>
          </div>
        </Badge>
      </div>
    </section>
  );
};

export default WhoSection;
