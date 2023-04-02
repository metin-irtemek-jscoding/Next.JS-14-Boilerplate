'use client';
import styled from 'styled-components';

import theme from '@/theme';

export const Wrapper = styled.div`
  height: 1000px;
  max-width: 1200px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.div`
  color: ${theme.color.blue700};
  font-family: 'MyFont2';
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  ${theme.mediaQueries.Mobile} {
    color: ${theme.color.red800};
    font-size: 22px;
  }
`;

export const Content = styled.div`
  color: ${theme.color.grey800};
  font-family: 'MyFont1';
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 12px;
  ${theme.mediaQueries.Mobile} {
    color: ${theme.color.grey800};
    font-size: 14px;
  }
`;
