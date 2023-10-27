import type { FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial } from '../..';
import { useTheme } from '../..';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteListItemTheme {
  base: string;
}

export interface ListItemProps extends PropsWithChildren {
  theme?: DeepPartial<FlowbiteListItemTheme>;
  className?: string;
}

export const ListItem: FC<ListItemProps> = ({ children, className, theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.listGroup.item, customTheme);

  return <li className={twMerge(theme.base, className)}>{children}</li>;
};
