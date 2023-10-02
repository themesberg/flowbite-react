import type { FC } from 'react';
import type { ThemeMode } from '~/src/helpers/use-theme-mode';
import { ThemeInit } from '~/src/theme-store/init';
import { ThemeModeInit } from '~/src/theme-store/mode';
import type { CustomFlowbiteTheme } from './FlowbiteTheme';

export interface ThemeProps {
  mode?: ThemeMode;
  theme?: CustomFlowbiteTheme;
}

interface FlowbiteProps {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const Flowbite: FC<FlowbiteProps> = ({ children, theme }) => {
  return (
    <>
      <ThemeInit theme={theme?.theme} />
      <ThemeModeInit mode={theme?.mode} />
      {children}
    </>
  );
};

Flowbite.displayName = 'Flowbite';
