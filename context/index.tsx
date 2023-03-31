'use client';
import { useContext } from 'react';

import { GlobalContext } from './globalContext';

export const useGlobalContext = () => useContext(GlobalContext);
