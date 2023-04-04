import React from 'react';

import Container from '@/components/atoms/container';
import type { Locale } from '@/i18n-config';
import { getTranslate } from '@/i18n-getTranslate';

import { Wrapper, Area } from './styled';

export default function Footer({ lang }: { lang: Locale }) {
  const t = getTranslate(lang);
  return (
    <Wrapper>
      <Container>
        <Area>{t['Footer Area']}</Area>
      </Container>
    </Wrapper>
  );
}
