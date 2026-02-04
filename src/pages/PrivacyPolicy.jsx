import { Link } from 'react-router-dom';

import Footer from '../sections/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-hkn-black font-sans text-gray-300 selection:bg-hkn-gold selection:text-black">
      {/* Botão de Voltar Simples (Para não complicar com o Menu cheio de links âncora) */}
      <div className="container mx-auto px-6 py-6">
        <Link to="/" className="text-hkn-gold hover:underline">
          &larr; Voltar para o início
        </Link>
      </div>

      <main className="container mx-auto max-w-4xl px-6 py-10 md:px-20">
        <h1 className="mb-8 text-3xl font-semibold text-hkn-white md:text-4xl">
          Política de Privacidade
        </h1>

        <div className="space-y-6 text-sm leading-relaxed md:text-base">
          <p>
            A <strong>HKN Engenharia</strong> valoriza a sua privacidade. Esta
            Política de Privacidade descreve como coletamos, usamos e protegemos
            as informações pessoais que você nos fornece através do nosso site.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            1. Coleta de Dados
          </h2>
          <p>
            Coletamos apenas as informações necessárias para prestar nossos
            serviços e melhorar sua experiência. Isso pode incluir:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Informações de Contato:</strong> Nome, telefone (WhatsApp)
              e e-mail, fornecidos voluntariamente por você ao clicar nos botões
              de contato ou solicitar orçamento.
            </li>
            <li>
              <strong>Dados de Navegação:</strong> Informações anônimas sobre
              como você interage com nosso site (via Google Analytics ou
              ferramentas similares), para fins de melhoria de performance.
            </li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            2. Uso das Informações
          </h2>
          <p>Utilizamos seus dados exclusivamente para:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Responder às suas solicitações de orçamento e dúvidas técnicas.
            </li>
            <li>Agendar reuniões ou visitas técnicas.</li>
            <li>
              Enviar propostas comerciais relacionadas aos serviços de
              engenharia solicitados.
            </li>
          </ul>
          <p>
            <strong>Não compartilhamos seus dados</strong> com terceiros para
            fins de marketing, exceto quando exigido por lei ou para a execução
            direta do serviço contratado (ex: órgãos de legalização), mediante
            sua aprovação.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            3. Cookies e Tecnologias
          </h2>
          <p>
            Nosso site pode utilizar cookies para melhorar a navegação. Você
            pode desativar os cookies nas configurações do seu navegador a
            qualquer momento, mas algumas funcionalidades do site podem ser
            afetadas.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            4. Seus Direitos (LGPD)
          </h2>
          <p>
            Conforme a Lei Geral de Proteção de Dados (LGPD), você tem o direito
            de solicitar o acesso, correção ou exclusão dos seus dados pessoais
            da nossa base a qualquer momento. Para isso, entre em contato
            conosco através do canal oficial abaixo.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            5. Contato
          </h2>
          <p>
            Para questões sobre esta política ou sobre seus dados, fale
            diretamente conosco:
          </p>
          <p className="mt-2 text-hkn-white">
            <strong>E-mail:</strong> contato@hknengenharia.com.br <br />
            <strong>WhatsApp:</strong> (31) 9528-7849
          </p>

          <p className="mt-10 text-xs text-gray-500">
            Última atualização: Fevereiro de 2026.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
