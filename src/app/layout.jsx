import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: 'HKN Engenharia | Projetos de Engenharia Civil e BIM',
  description:
    'Projetos de engenharia civil de alta precisão compatibilizados em BIM. Projetos estruturais, elétricos, hidrossanitários e legalização de obras com máxima segurança e economia.',
  icons: {
    icon: '/FaviconHKN.svg',
  },
  openGraph: {
    title: 'HKN Engenharia | Projetos de Engenharia Civil e BIM',
    description:
      'Projetos de engenharia civil de alta precisão compatibilizados em BIM. Projetos estruturais, elétricos, hidrossanitários e legalização de obras com máxima segurança e economia.',
    url: '/',
    siteName: 'HKN Engenharia',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HKN Engenharia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HKN Engenharia | Projetos de Engenharia Civil e BIM',
    description:
      'Projetos de engenharia civil de alta precisão compatibilizados em BIM. Projetos estruturais, elétricos, hidrossanitários e legalização de obras com máxima segurança e economia.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`overflow-x-hidden bg-hkn-black font-sans text-white antialiased ${montserrat.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
