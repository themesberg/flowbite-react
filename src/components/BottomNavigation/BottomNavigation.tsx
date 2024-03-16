'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteBoolean } from '../Flowbite';

export interface FlowbiteBottomNavigationTheme {
  root: {
    base: string;
    inner: string;
  };
  border: FlowbiteBoolean;
}

export interface BottomNavigationProps extends ComponentProps<'div'> {
  theme?: DeepPartial<FlowbiteBottomNavigationTheme>;
}

const BottomNavigationComponent: FC<BottomNavigationProps> = ({
  children,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const theme = mergeDeep(getTheme().bottomNavigation, customTheme);

  return (
    <div className={twMerge(theme.root.base, className)} data-testid="flowbite-bottom-navigation" {...props}>
      {children}
    </div>
  );
};

BottomNavigationComponent.displayName = 'BottomNavigation';

export const BottomNavigation = Object.assign(BottomNavigationComponent, {});
