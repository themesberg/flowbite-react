'use client';

import type { ComponentPropsWithoutRef, FC } from 'react';
import type { IconBaseProps } from 'react-icons';
import { HiMoon, HiSun } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { useIsMounted } from '../../hooks/use-is-mounted';
import { mergeDeep } from '../../helpers/merge-deep';
import { useThemeMode } from '../../hooks/use-theme-mode';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import { Button } from '../Button';

export interface FlowbiteDarkThemeToggleTheme {
  root: FlowbiteDarkThemeToggleRootTheme;
}

export interface FlowbiteDarkThemeToggleRootTheme {
  base: string;
  icon: string;
}

export interface DarkThemeToggleProps extends ComponentPropsWithoutRef<'button'> {
  iconDark?: FC<IconBaseProps>;
  iconLight?: FC<IconBaseProps>;
  theme?: DeepPartial<FlowbiteDarkThemeToggleTheme>;
}

export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = HiSun,
  iconLight: IconLight = HiMoon,
  ...props
}) => {
  const isMounted = useIsMounted();
  const { computedMode, toggleMode } = useThemeMode();

  const theme = mergeDeep(getTheme().darkThemeToggle, customTheme);

  return (
    <Button
      aria-label="Toggle dark mode"
      data-testid="dark-theme-toggle"
      color="ghost"
      theme={{
        size: {
          md: 'p-0',
        },
      }}
      className={twMerge(theme.root.base, className)}
      onClick={toggleMode}
      {...props}
    >
      <IconDark
        aria-label="Currently dark mode"
        data-active={isMounted && computedMode === 'dark'}
        className={twMerge(theme.root.icon, 'hidden dark:block')}
      />
      <IconLight
        aria-label="Currently light mode"
        data-active={isMounted && computedMode === 'light'}
        className={twMerge(theme.root.icon, 'dark:hidden')}
      />
    </Button>
  );
};

DarkThemeToggle.displayName = 'DarkThemeToggle';
