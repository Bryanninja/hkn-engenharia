import { FaInstagram } from 'react-icons/fa';
import { RiYoutubeLine } from 'react-icons/ri';

import Logo from '../assets/icons/LogoSvg.svg';

const Footer = () => {
  return (
    <footer className="bg-hkn-black pb-8 pt-10">
      <div className="container mx-auto w-full px-6 md:px-12 lg:px-20">
        <div className="flex flex-col space-y-8">
          {/* PARTE DE CIMA: Logo e Links Legais */}
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <img src={Logo} alt="Logo HKN" className="w-32 md:w-auto" />

            <div className="flex flex-col items-center gap-4 text-sm text-hkn-muted md:flex-row md:gap-8">
              <p>© 2026 Todos os direitos reservados.</p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-hkn-gold"
                >
                  Termos de uso
                </a>
                <a
                  href="#"
                  className="transition-colors duration-300 hover:text-hkn-gold"
                >
                  Política de privacidade
                </a>
              </div>
            </div>
          </div>

          {/* Linha Divisória Sutil */}
          <div className="h-px w-full bg-hkn-white/10"></div>

          {/* PARTE DE BAIXO: Redes Sociais */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <span className="hidden text-sm text-hkn-muted md:block">
              Siga nas redes sociais:
            </span>

            <div className="flex items-center gap-8">
              {/* Item 1 */}
              <a
                href="https://www.instagram.com/hkn.projetos/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-hkn-muted transition-colors duration-300 hover:text-hkn-gold"
              >
                <FaInstagram className="text-xl" />
                <span className="hidden md:inline">hkn.projetos</span>
              </a>

              {/* Item 2 */}
              <a
                href="https://www.instagram.com/hyagorkevelhen/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-hkn-muted transition-colors duration-300 hover:text-hkn-gold"
              >
                <FaInstagram className="text-xl" />
                <span className="hidden md:inline">hyagorkevelhen</span>
              </a>

              {/* Item 3 */}
              <a
                href="https://www.youtube.com/@EngenheiroHyagorKevelhen"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-hkn-muted transition-colors duration-300 hover:text-hkn-gold"
              >
                <RiYoutubeLine className="text-xl" />
                <span className="hidden md:inline">Canal Youtube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
