'use client';
import React from 'react';

import { useRouter } from 'next/navigation';
import { Select } from 'antd';

import { Locale, Languages } from '@/lang/languages';

import { Flag } from './styled';

const { Option } = Select;

export default function LangButton({ lang }: { lang: Locale }) {
  const router = useRouter();

  const handleChange = (value: string) => {
    const getUrl: string =
      (typeof window !== 'undefined' &&
        `${window.location.pathname}${window?.location.search}`) ||
      '';
    const tempUrl: string = getUrl.slice(3);
    router.push(`/${value}/${tempUrl}`);
  };
  return (
    <Select style={{ width: 100 }} onChange={handleChange} value={lang}>
      {Languages.locales.map((lang: string, index: number) => (
        <Option key={index} value={lang}>
          <Flag image={Languages.flags[index]} />
        </Option>
      ))}
    </Select>
  );
}
