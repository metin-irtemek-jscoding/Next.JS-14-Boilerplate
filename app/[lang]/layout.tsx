import type { Metadata } from 'next';

import StyledComponentsRegistry from '@/styles/styledComponentsRegistry';
import type { Locale } from '@/i18n-config';
import { i18n } from '@/i18n-config';
import '@/styles/index.css';
import Header from '@/components/organisms/header';
import Footer from '@/components/organisms/footer';

export const metadata: Metadata = {
  title: 'Metin - Boilerplate',
  description: 'Metin - Boilerplate',
  viewport: { width: 'device-width', initialScale: 1 },
};

export async function generateStaticParams() {
  return i18n.locales.map((language) => ({ lang: language }));
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={lang}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Header lang={lang} />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
