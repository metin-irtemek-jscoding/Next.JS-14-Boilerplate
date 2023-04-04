import React from 'react';

import type { Locale } from '@/i18n-config';
import { getTranslate } from '@/i18n-getTranslate';
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
