import type { ComponentProps, FC } from 'react';
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

export interface ListItemProps extends ComponentProps<'li'> {
  className?: string;
  icon?: FC<ComponentProps<'svg'>>;
  theme?: DeepPartial<FlowbiteListItemTheme>;
}

export const ListItem: FC<ListItemProps> = ({ children, className, icon: Icon, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().list.item, customTheme);

  return (
    <li className={twMerge(theme.withIcon[Icon ? 'on' : 'off'], className)} {...props}>
      {Icon && <Icon className={twMerge(theme.icon)} />}
      {children}
    </li>
  );
};