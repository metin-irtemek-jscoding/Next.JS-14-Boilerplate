import React, { FC } from 'react';

import { Wrapper } from './styled';

export interface IContainer {
  children?: React.ReactNode;
}

const Container: FC<IContainer> = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Container;
