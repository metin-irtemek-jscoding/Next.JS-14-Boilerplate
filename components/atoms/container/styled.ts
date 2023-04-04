'use client';
import styled from 'styled-components';

import theme from '@/theme';

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-left: 24px;
  padding-right: 24px;
  max-width: 1200px;
  ${theme.mediaQueries.Desktop} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;
