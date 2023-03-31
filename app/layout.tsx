import type { Metadata } from 'next';

import StyledComponentsRegistry from '@/styles/styledComponentsRegistry';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'Metin - Boilerplate',
  description: 'Metin - Boilerplate',
  viewport: { width: 'device-width', initialScale: 1 },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
