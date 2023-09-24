import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';
import type { FlowbiteListGroupItemTheme } from './ListGroupItem';
import { ListGroupItem } from './ListGroupItem';

export interface FlowbiteListGroupTheme {
  root: FlowbiteListGroupRootTheme;
  item: FlowbiteListGroupItemTheme;
}

export interface FlowbiteListGroupRootTheme {
  base: string;
}

export interface ListGroupProps extends PropsWithChildren, ComponentProps<'ul'> {
  theme?: DeepPartial<FlowbiteListGroupTheme>;
}

const ListGroupComponent: FC<ListGroupProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().listGroup, customTheme);

  return (
    <ul className={twMerge(theme.root.base, className)} {...props}>
      {children}
    </ul>
  );
};

ListGroupComponent.displayName = 'ListGroup';
ListGroupItem.displayName = 'ListGroup.Item';

export const ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem });
