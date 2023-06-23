import React from 'react';

import Link from 'next/link';

import { Locale } from '@/lang/languages';
import { getTranslate } from '@/lang/serverSide';

import { Wrapper, Title } from './styled';

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = getTranslate(lang);
  return (
    <Wrapper>
      <Title>{t['Other Page']}</Title>
      <Link href={`/${lang}`}>{t['Main Page']}</Link>
    </Wrapper>
  );
}
