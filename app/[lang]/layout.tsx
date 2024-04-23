import type { Metadata } from 'next';
import type { Viewport } from 'next';
import StyledComponentsRegistry from '@/styles/styledComponentsRegistry';
import AntdProvider from '@/styles/antdProviders';
import { Locale, Languages } from '@/lang/languages';
import '@/styles/index.css';
import Header from '@/components/organisms/header';
import Footer from '@/components/organisms/footer';

export const metadata: Metadata = {
  title: 'Metin - Boilerplate',
  description: 'Metin - Boilerplate',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export function generateStaticParams() {
  return Languages.locales.map((lang) => ({ lang }));
}

export default function RootLayout({
  children,
  params: { lang },
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={lang}>
      <head>
        <link rel='icon' href='/images/favicon.ico' />
      </head>
      <body>
        <AntdProvider>
          <StyledComponentsRegistry>
            <Header lang={lang} />
            {children}
            <Footer lang={lang} />
          </StyledComponentsRegistry>
        </AntdProvider>
      </body>
    </html>
  );
}
