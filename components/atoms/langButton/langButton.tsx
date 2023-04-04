'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import { Select } from 'antd';

import type { Locale } from '@/i18n-config';

import { Flag } from './styled';

export default function LangButton({ lang }: { lang: Locale }) {
  const router = useRouter();

  const handleChange = (value: string) => {
    const getUrl: string =
      (typeof window !== 'undefined' &&
        `${window.location.pathname}${window?.location.search}`) ||
      '';
    const tempUrl: string = getUrl.slice(3);
    router.push(`${value}${tempUrl}`);
  };
  return (
    <Select
      style={{ width: 100 }}
      onChange={handleChange}
      value={lang}
      options={[
        {
          value: 'de',
          label: <Flag image="/images/de.png" />,
        },
        {
          value: 'en',
          label: <Flag image="/images/en.png" />,
        },
      ]}
    />
  );
}
