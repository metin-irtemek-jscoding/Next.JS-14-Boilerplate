import React from 'react';

import { Lang } from '@/i18n-config';
import { getTranslate } from '@/i18n-getTranslate';

import { Wrapper, Title, Content } from './styled';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const t = await getTranslate(lang);
  return (
    <Wrapper>
      <Title>{t['Metin - BoilerPlate']}</Title>
      <Content>Next 13.2</Content>
      <Content>Typescript</Content>
      <Content>i18n Multi-Language</Content>
      <Content>Docker File</Content>
      <Content>Styled Component with SSR config</Content>
      <Content>Codegen</Content>
      <Content>Atomic Design Pattern</Content>
      <Content>Theme</Content>
      <Content>BreakPoint for Mobile and Desktop</Content>
      <Content>All Colors</Content>
      <Content>Font</Content>
      <Content>Utils</Content>
      <Content>Proxy Server</Content>
      <Content>Storybook</Content>
      <Content>Cypress</Content>
      <Content>Eslint</Content>
      <Content>Husky</Content>
      <Content>Prettier</Content>
    </Wrapper>
  );
}
