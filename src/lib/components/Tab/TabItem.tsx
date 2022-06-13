import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';

export interface TabProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className' | 'title'>> {
  title: ReactNode;
  active?: boolean;
  disabled?: boolean;
  icon?: FC<ComponentProps<'svg'>>;
}

export const TabItem: FC<TabProps> = ({ children }) => <>{children}</>;
