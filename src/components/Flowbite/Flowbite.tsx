import type { FC } from 'react';
import { ThemeInit } from '~/src/theme-store/init';
import type { DeepPartial } from '~/src/types';
import type { FlowbiteTheme } from './FlowbiteTheme';

export interface ThemeProps {
  dark?: boolean;
  theme?: DeepPartial<FlowbiteTheme>;
}

interface FlowbiteProps {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const Flowbite: FC<FlowbiteProps> = ({ children, theme = {} }) => {
  const {
    theme: customTheme,
    // TODO: deal with it
    // dark,
  } = theme;

  return (
    <>
      <ThemeInit theme={customTheme} />
      {children}
    </>
  );
};

Flowbite.displayName = 'Flowbite';
