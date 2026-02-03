import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

import Logo from '../assets/icons/LogoSvg.svg';
import Button from './Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-hkn-black/90 px-10 py-2 backdrop-blur-md transition-all duration-300 ${isOpen ? 'bg-transparent' : 'bg-hkn-black/90 backdrop-blur-md'} `}
    >
      <img
        className="md:12 z-50 h-10 w-auto md:h-12"
        src={Logo}
        alt="Logo HKN-Projetos de Engenharia"
      />

      {/* menuDesktop */}
      <nav className="hidden gap-10 text-base text-gray-300 lg:flex xl:gap-20">
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

      {/* BOTÃO MOBILE */}
      <button
        onClick={handleToggle}
        className="relative z-50 flex text-3xl text-hkn-gold-light lg:hidden"
      >
        {isOpen ? <IoCloseOutline /> : <RxHamburgerMenu />}
      </button>

      <Button className="hidden lg:block" variant="outline">
        Solicitar Orçamento no WhatsApp
      </Button>

      {/* menuMobile */}
      <div
        className={`fixed inset-0 z-40 flex h-[100dvh] w-screen flex-col items-center justify-center gap-10 bg-hkn-black transition-all duration-500 lg:hidden ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      >
        <nav className="flex flex-col items-center gap-8 text-2xl font-light text-gray-300">
          <a
            onClick={handleClose}
            href="#servicos"
            className="transition-transform hover:scale-110 hover:text-hkn-gold"
          >
            Serviços
          </a>
          <a
            onClick={handleClose}
            href="#portfolio"
            className="transition-transform hover:scale-110 hover:text-hkn-gold"
          >
            Projetos
          </a>
          <a
            onClick={handleClose}
            href="#depoimentos"
            className="transition-transform hover:scale-110 hover:text-hkn-gold"
          >
            Depoimentos
          </a>
          <a
            onClick={handleClose}
            href="#contato"
            className="transition-transform hover:scale-110 hover:text-hkn-gold"
          >
            Contato
          </a>
        </nav>
        <Button onClick={handleClose} variant="outlineFill" className="mt-4">
          Solicitar Orçamento
        </Button>
      </div>
    </header>
  );
};

export default Header;
