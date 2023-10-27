import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import type { DeepPartial, FlowbiteStateColors } from '../..';
import { useTheme } from '../..';
import { mergeDeep } from '../../helpers/merge-deep';
import { ListItem } from './ListItem';

export interface FlowbiteListTheme {
  root: FlowbiteListRootTheme;
}

export interface FlowbiteListRootTheme {
  base: string;
}

export interface ListColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface ListProps extends PropsWithChildren<ComponentProps<'ul'> & ComponentProps<'ol'>> {
  theme?: DeepPartial<FlowbiteListTheme>;
}

const ListComponent: FC<ListProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.list, customTheme);

  return (
    <ul className={twMerge(theme.root.base, className)} {...props}>
      {children}
    </ul>
  );
};

ListComponent.displayName = 'List';
ListItem.displayName = 'List.Item';

export const List = Object.assign(ListComponent, { Item: ListItem });
