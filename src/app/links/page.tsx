import Image from 'next/image';
import Link from 'next/link';
import { getWhatsAppLink } from '../../utils/whatsapp';

export default function LinksPage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-hkn-black px-6 py-12 font-sans md:justify-center md:py-16">
      {/* 1. Avatar / Logo HKN */}
      <div className="z-10 mb-4 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-2 border-hkn-gold/40 bg-hkn-card p-1 shadow-2xl shadow-hkn-gold/10 md:h-44 md:w-44">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-neutral-900">
          <Image
            src="/hkn-profile.webp"
            alt="Hyagor Nascimento - HKN Projetos"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* 2. Nome e Identidade */}
      <div className="z-10 mb-8 flex flex-col items-center text-center md:mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          HKN Projetos
        </h1>
        <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-hkn-gold md:text-sm">
          Engenharia Civil • Projetos & Consultoria
        </p>
      </div>

      {/* 3. Lista de Links */}
      <div className="z-10 flex w-full max-w-sm flex-col gap-4 md:max-w-xl md:gap-4">
        {/* Link 1: WhatsApp (Principal CTA) */}
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-hkn-gold/30 bg-hkn-card p-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-hkn-gold hover:shadow-xl hover:shadow-hkn-gold/10 md:p-4 md:text-lg"
        >
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-hkn-gold/10 text-hkn-gold md:h-14 md:w-14">
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.79 6.72L2 30l7.5-1.96A13.93 13.93 0 0016 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 01-5.83-1.6l-.42-.25-4.45 1.16 1.18-4.33-.27-.44A11.47 11.47 0 014.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.56c-.34-.17-2.02-.99-2.33-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69a10.3 10.3 0 01-1.9-2.36c-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.85-1.05-2.53-.28-.67-.56-.58-.77-.59h-.65c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.85s1.22 3.3 1.39 3.53c.17.23 2.4 3.67 5.83 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.66-.1 2.02-.82 2.31-1.62.28-.79.28-1.47.2-1.62-.09-.14-.32-.23-.66-.4z" />
            </svg>
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-bold text-white md:text-base">
              Falar no WhatsApp
            </span>
            <span className="text-xs text-neutral-400">
              Solicitar orçamento ou consultoria
            </span>
          </div>
          <span className="pr-2 text-hkn-gold transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>

        {/* Link 2: Site Oficial HKN (Ícone em vez de imagem) */}
        <Link
          href="/"
          className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-neutral-800 bg-hkn-card p-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-hkn-gold/50 hover:shadow-lg md:p-3.5 md:text-lg"
        >
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-neutral-700/50 bg-neutral-900 text-hkn-gold md:h-14 md:w-14">
            <svg
              className="h-6 w-6 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-semibold text-white md:text-base">
              Site Oficial
            </span>
            <span className="text-xs text-neutral-400">
              Conheça nossos projetos e atuação
            </span>
          </div>
          <span className="pr-2 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-hkn-gold">
            →
          </span>
        </Link>

        {/* Link 3: Afiliado - Válvula Duchão Blukit (Com Link Social ML do Hyagor e Thumbnail do Produto) */}
        <a
          href="https://www.mercadolivre.com.br/social/hyagorkn?matt_word=hyagorkn&matt_tool=77913056&forceInApp=true&ref=BJeoBDDpXa%2B0razipWHYfbmEx7On%2BNQ3IGedglYtD7xu%2FPuXceTsNb62ZhCWotma3oSSKmkCNYzEa3DQs35oGW6gfFDvmdJSScxR%2B2JOmhIUrhwnE30EMNIo1Wb%2Bz9%2F2Gm%2FCfAsnSi47IOSYRFH41Qh8zjTe04H6bG91PJCEI13NoC2dzpo2B00sMDS3GRFlnQqMttl03eXuz6IFgiHiNzSwgTt2Qv2tVJbk6%2FYj5PgQ%2BB9oiCR21RHFdMV0NfqSa36%2Bkw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-neutral-800 bg-hkn-card p-3 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:border-hkn-gold/50 hover:shadow-lg md:p-3.5 md:text-lg"
        >
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-neutral-700/50 bg-neutral-900 md:h-14 md:w-14">
            <Image
              src="/valvula.webp"
              alt="Válvula Alternadora Duchão Blukit"
              fill
              className="object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-semibold text-white md:text-base">
              Válvula Alternadora de Pressão (Duchão)
            </span>
            <span className="text-xs text-hkn-gold">
              Item usado no vídeo do Instagram
            </span>
          </div>
          <span className="pr-2 text-neutral-500 transition-transform group-hover:translate-x-1 group-hover:text-hkn-gold">
            →
          </span>
        </a>
      </div>

      {/* Marca D'água HKN de Fundo */}
      <div
        aria-hidden="true"
        className="absolute -bottom-20 -left-10 select-none whitespace-nowrap text-[12rem] font-black text-white/5 blur-sm md:-bottom-48 md:text-[22rem] lg:text-[28rem]"
      >
        HKN PROJETOS
      </div>
    </main>
  );
}
