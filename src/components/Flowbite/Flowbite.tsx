import type { FC, HTMLAttributes } from 'react';
import { ThemeInit } from '~/src/theme-store/init';
import type { DeepPartial } from '../../';
import type { FlowbiteTheme } from './FlowbiteTheme';

export interface ThemeProps {
  dark?: boolean;
  theme?: DeepPartial<FlowbiteTheme>;
}

interface FlowbiteProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: ThemeProps;
}

export const Flowbite: FC<FlowbiteProps> = ({ children, theme = {} }) => {
  const {
    theme: customTheme,
    // TODO: deal with it
    dark,
  } = theme;

  return (
    <>
      <ThemeInit theme={customTheme} />
      {children}
    </>
  );
};

Flowbite.displayName = 'Flowbite';

export type {
  CustomFlowbiteTheme,
  FlowbiteBoolean,
  FlowbiteColors,
  FlowbiteContentPositions,
  FlowbiteGradientColors,
  FlowbiteGradientDuoToneColors,
  FlowbiteHeadingLevel,
  FlowbitePositions,
  FlowbiteSizes,
  FlowbiteStateColors,
  FlowbiteTheme,
} from './FlowbiteTheme';
