'use client';
import { ConfigProvider } from 'antd';

import theme from '@/theme';

export default function AntdProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      prefixCls='boilerplate'
      theme={{
        token: {
          colorPrimary: theme.color.red700,
          colorInfo: theme.color.red700,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
