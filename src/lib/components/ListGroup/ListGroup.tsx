import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
import { FlowbiteListGroupItemTheme, ListGroupItem } from './ListGroupItem';

export interface FlowbiteListGroupTheme {
  root: FlowbiteListGroupRootTheme;
  item: FlowbiteListGroupItemTheme;
}

export interface FlowbiteListGroupRootTheme {
  base: string;
}

export interface ListGroupProps extends PropsWithChildren<ComponentProps<'div'>> {
  theme?: DeepPartial<FlowbiteListGroupTheme>;
}

const ListGroupComponent: FC<ListGroupProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}): JSX.Element => {
  const theme = mergeDeep(useTheme().theme.listGroup, customTheme);
  const theirProps = props as object;

  return (
    <ul className={classNames(theme.root.base, className)} {...theirProps}>
      {children}
    </ul>
  );
};

ListGroupComponent.displayName = 'ListGroup';
ListGroupItem.displayName = 'ListGroup.Item';

export const ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem });
