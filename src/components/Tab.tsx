import { FC, ReactNode } from 'react';

export type TabProps = {
  title: ReactNode;
  active?: boolean;
  disabled?: boolean;
};

export const Tab: FC<TabProps> = ({ children }) => <>{children}</>;
