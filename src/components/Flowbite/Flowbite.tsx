import type { FC } from 'react';
import type { ThemeMode } from '../../helpers/use-theme-mode';
import { ThemeInit } from '../../theme-store/init';
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
      <ThemeInit mode={theme?.mode} theme={theme?.theme} />
      {children}
    </>
  );
};

Flowbite.displayName = 'Flowbite';
