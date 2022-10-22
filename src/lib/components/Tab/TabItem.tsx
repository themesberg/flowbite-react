import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';

export interface TabItemProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'title'>> {
  title: ReactNode;
  active?: boolean;
  disabled?: boolean;
  icon?: FC<ComponentProps<'svg'>>;
}

export const TabItem: FC<TabItemProps> = ({ children, className }) => <div className={className}>{children}</div>;
