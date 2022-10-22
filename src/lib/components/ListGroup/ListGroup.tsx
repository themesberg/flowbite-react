import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';
import { ListGroupItem } from './ListGroupItem';

export type ListGroupProps = PropsWithChildren<ComponentProps<'div'>>;

const ListGroupComponent: FC<ListGroupProps> = ({ children, className, ...props }): JSX.Element => {
  const theme = useTheme().theme.listGroup.base;
  const theirProps = props as object;

  return (
    <ul className={classNames(theme, className)} {...theirProps}>
      {children}
    </ul>
  );
};

ListGroupComponent.displayName = 'ListGroup';
ListGroupItem.displayName = 'ListGroup.Item';

export const ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem });
