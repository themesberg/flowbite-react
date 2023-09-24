import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteKbdTheme {
  root: FlowbiteKbdRootTheme;
}

export interface FlowbiteKbdRootTheme {
  base: string;
  icon: string;
}

export interface KbdProps extends PropsWithChildren<ComponentProps<'span'>> {
  icon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<FlowbiteKbdTheme>;
}

export const Kbd: FC<KbdProps> = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().kbd, customTheme);

  return (
    <span className={twMerge(theme.root.base, className)} data-testid="flowbite-kbd" {...props}>
      {Icon && <Icon className={theme.root.icon} data-testid="flowbite-kbd-icon" />}
      {children}
    </span>
  );
};

Kbd.displayName = 'Kbd';
