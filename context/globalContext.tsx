'use client';

import React, { useState } from 'react';

interface IGlobalContextProps {
  lang: string;
  setLang: (lang: string) => void;
}

export const GlobalContext = React.createContext<IGlobalContextProps>({
  lang: '',
  setLang: () => '',
});

export const GlobalContextProvider = (props: any) => {
  const [lang, setLang] = useState('tr-TR');

  return (
    <GlobalContext.Provider
      value={{
        lang: lang,
        setLang: setLang,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
