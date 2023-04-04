'use client';
import styled from 'styled-components';

export const Flag = styled.div<{
  image?: string;
}>`
  background-size: cover;
  background-image: ${({ image }) => `url(${image})`};
  background-position: center;
  height: 20px;
  width: 34px;
  cursor: pointer;
  border-radius: 8px;
  margin: 7px 10px 0px 10px;
`;
