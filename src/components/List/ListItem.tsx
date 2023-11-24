import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface FlowbiteListItemTheme {
  icon: string;
  withIcon: {
    on: string;
    off: string;
  };
}

export interface ListItemProps extends PropsWithChildren {
  theme?: DeepPartial<FlowbiteListItemTheme>;
  className?: string;
  icon?: FC<ComponentProps<'svg'>>;
}

export const ListItem: FC<ListItemProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().list.item, customTheme);

  return (
    <li className={twMerge(theme.withIcon[props.icon ? 'on' : 'off'], className)}>
      {props.icon && <props.icon className={twMerge(theme.icon)} />}
      {children}
    </li>
  );
};
