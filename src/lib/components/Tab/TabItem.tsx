import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';

export type TabProps = PropsWithChildren<{
  title: ReactNode;
  active?: boolean;
  disabled?: boolean;
  icon?: FC<ComponentProps<'svg'>>;
  className?: string;
}>;

export const TabItem: FC<TabProps> = ({ children }) => <>{children}</>;
