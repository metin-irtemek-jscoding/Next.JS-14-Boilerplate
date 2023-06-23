import React from 'react';

import { Locale } from '@/lang/languages';
import { getTranslate } from '@/lang/serverSide';
import LangButton from '@/components/atoms/langButton/langButton';

import { Wrapper, Area } from './styled';

export default function Header({ lang }: { lang: Locale }) {
  const t = getTranslate(lang);
  return (
    <Wrapper>
      <Area>
        <div>{t['Logo Area']}</div>
        <div>{t['Menu Area']}</div>
        <LangButton lang={lang} />
      </Area>
    </Wrapper>
  );
}
