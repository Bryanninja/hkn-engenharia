import Logo from '../assets/images/LogoSvg.svg';
import Button from './Button';

const Header = () => {
  return (
    <div className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-hkn-black/90 px-10 py-2 backdrop-blur-md">
      <img
        className="h-12 w-auto"
        src={Logo}
        alt="Logo HKN-Projetos de Engenharia"
      />
      <nav className="hidden gap-20 text-sm text-gray-300 md:flex">
        <a href="#servicos" className="transition-colors hover:text-hkn-gold">
          Serviços
        </a>
        <a href="#projetos" className="transition-colors hover:text-hkn-gold">
          Projetos
        </a>
        <a
          href="#depoimentos"
          className="transition-colors hover:text-hkn-gold"
        >
          Depoimentos
        </a>
        <a href="#contato" className="transition-colors hover:text-hkn-gold">
          Contato
        </a>
      </nav>

      <Button variant="outline">Solicitar Orçamento no WhatsApp</Button>
    </div>
  );
};

export default Header;
