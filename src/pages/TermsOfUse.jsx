import { Link } from 'react-router-dom';

import Footer from '../sections/Footer';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-hkn-black font-sans text-gray-300 selection:bg-hkn-gold selection:text-black">
      {/* Botão de Voltar */}
      <div className="container mx-auto px-6 py-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-hkn-gold hover:underline"
        >
          &larr; Voltar para o início
        </Link>
      </div>

      <main className="container mx-auto max-w-4xl px-6 py-10 md:px-20">
        <h1 className="mb-8 text-3xl font-semibold text-hkn-white md:text-4xl">
          Termos de Uso
        </h1>

        <div className="space-y-6 text-justify text-sm leading-relaxed md:text-base">
          <p>
            Bem-vindo ao site da <strong>HKN Engenharia</strong>. Ao acessar e
            utilizar este site, você concorda em cumprir e estar vinculado aos
            seguintes termos e condições de uso. Se você não concordar com
            qualquer parte destes termos, não deverá utilizar nosso site.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            1. Propriedade Intelectual
          </h2>
          <p>
            Todo o conteúdo publicado neste site, incluindo mas não se limitando
            a{' '}
            <strong>
              imagens de obras, projetos em 3D (renders), vídeos, textos,
              logotipos e identidade visual
            </strong>
            , é de propriedade exclusiva da HKN Engenharia ou de seus
            licenciadores, sendo protegido pelas leis de direitos autorais e
            propriedade intelectual do Brasil.
          </p>
          <p className="rounded-r-md border-l-2 border-hkn-gold bg-hkn-card/50 p-4">
            <strong>É estritamente proibido:</strong> Copiar, reproduzir,
            distribuir ou utilizar qualquer imagem ou projeto deste site para
            fins comerciais ou portfólio próprio sem a autorização expressa e
            por escrito do engenheiro responsável.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            2. Uso do Site
          </h2>
          <p>
            Este site tem como objetivo apresentar o portfólio e os serviços de
            engenharia civil prestados por Hyagor Kevelhen. Você concorda em
            utilizar o site apenas para fins lícitos e de forma que não infrinja
            os direitos de terceiros ou restrinja o uso do site por qualquer
            outra pessoa.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            3. Limitação de Responsabilidade
          </h2>
          <p>
            As informações contidas neste site são fornecidas para fins
            informativos. Embora nos esforcemos para manter as informações
            atualizadas e corretas:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Não garantimos que o site estará disponível ininterruptamente ou
              livre de erros.
            </li>
            <li>
              As imagens dos projetos são representações visuais e podem sofrer
              alterações na execução da obra.
            </li>
            <li>
              Qualquer decisão tomada com base nas informações deste site é de
              sua inteira responsabilidade.
            </li>
          </ul>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            4. Links Externos
          </h2>
          <p>
            Nosso site pode conter links para sites de terceiros (como
            Instagram, WhatsApp e YouTube). Não possuímos controle sobre o
            conteúdo ou práticas desses sites e não nos responsabilizamos por
            eles. Recomendamos que você leia os termos de uso e políticas de
            privacidade de qualquer site terceiro que visitar.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            5. Alterações nos Termos
          </h2>
          <p>
            A HKN Engenharia reserva-se o direito de revisar estes termos de uso
            a qualquer momento sem aviso prévio. Ao usar este site, você
            concorda em ficar vinculado à versão atual desses Termos e Condições
            de Uso.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-hkn-gold-light">
            6. Lei Aplicável
          </h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do Brasil e você se submete irrevogavelmente à jurisdição
            exclusiva dos tribunais desse estado ou localidade.
          </p>

          <div className="mt-12 border-t border-hkn-white/10 pt-8">
            <p className="text-hkn-muted">
              Dúvidas? Entre em contato pelo e-mail:{' '}
              <span className="text-hkn-white">
                contato@hknengenharia.com.br
              </span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
