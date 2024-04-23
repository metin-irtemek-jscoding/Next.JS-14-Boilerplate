'use client';
import React, { useEffect } from 'react';

import { useRouter } from 'next/navigation';
import { Select } from 'antd';
import { setCookie, getCookie } from 'cookies-next';

import { Locale, Languages } from '@/lang/languages';

const { Option } = Select;

export default function LangButton({ lang }: { lang: Locale }) {
  const router = useRouter();

  useEffect(() => {
    if (getCookie('lang') !== lang) {
      setCookie('lang', lang);
      router.refresh();
    }
  }, [lang]);

  const handleLangChange = (lang: Locale) => {
    const getUrl: string =
      (typeof window !== 'undefined' &&
        `${window.location.pathname}${window?.location.search}`) ||
      '';
    const tempUrl: string = getUrl.slice(3);
    router.push(`/${lang}${tempUrl}`);
  };

  return (
    <Select style={{ width: 100 }} onChange={handleLangChange} value={lang}>
      {Languages.locales.map((lang: string, index: number) => (
        <Option key={index} value={lang}>
          {lang.toUpperCase()}
        </Option>
      ))}
    </Select>
  );
}
