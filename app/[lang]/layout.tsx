import type { Metadata } from 'next';

import StyledComponentsRegistry from '@/styles/styledComponentsRegistry';
import { Lang } from '@/i18n-config';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'Metin - Boilerplate',
  description: 'Metin - Boilerplate',
  viewport: { width: 'device-width', initialScale: 1 },
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }];
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  return (
    <html lang={lang}>
      <head></head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
