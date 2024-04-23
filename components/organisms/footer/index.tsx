import React from 'react';

import Container from '@/components/atoms/container';
import { Locale } from '@/lang/languages';
import { getTranslate } from '@/lang/serverSide';

import { Wrapper, Area } from './styled';

export default function Footer({ lang }: { lang: Locale }) {
  const t = getTranslate();
  return (
    <Wrapper>
      <Container>
        <Area>{t['Footer Area']}</Area>
      </Container>
    </Wrapper>
  );
}
