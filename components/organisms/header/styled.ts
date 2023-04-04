'use client';
import styled from 'styled-components';

import theme from '@/theme';

export const Wrapper = styled.div`
  background-color: ${theme.color.blue50};
  color: ${theme.color.blue900};
`;

export const Area = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;
