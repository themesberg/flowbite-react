'use client';

import type { ComponentProps, FC } from 'react';
import { HiMoon, HiSun } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { useThemeMode } from '../../helpers/use-theme-mode';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface FlowbiteDarkThemeToggleTheme {
  root: FlowbiteDarkThemeToggleRootTheme;
}

export interface FlowbiteDarkThemeToggleRootTheme {
  base: string;
  icon: string;
}

export interface DarkThemeToggleProps extends ComponentProps<'button'> {
  iconDark?: string;
  iconLight?: string;
  theme?: DeepPartial<FlowbiteDarkThemeToggleTheme>;
}

export const DarkThemeToggle: FC<DarkThemeToggleProps> = ({
  className,
  theme: customTheme = {},
  iconDark: IconDark = HiSun,
  iconLight: IconLight = HiMoon,
  ...props
}) => {
  const { computedMode, toggleMode } = useThemeMode();

  const theme = mergeDeep(getTheme().darkThemeToggle, customTheme);

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      data-testid="dark-theme-toggle"
      className={twMerge(theme.root.base, className)}
      onClick={toggleMode}
      {...props}
    >
      {computedMode === 'dark' ? (
        <span>
          <IconDark aria-label="Currently dark mode" className={theme.root.icon} />
        </span>
      ) : (
        <IconLight aria-label="Currently light mode" className={theme.root.icon} />
      )}
    </button>
  );
};

DarkThemeToggle.displayName = 'DarkThemeToggle';
