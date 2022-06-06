import type { ComponentProps, FC, PropsWithChildren } from 'react';

import { ListGroupItem } from './ListGroupItem';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';

export type ListGroupProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;

const ListGroupComponent: FC<ListGroupProps> = ({ children, ...props }): JSX.Element => {
  const theirProps = excludeClassName(props);

  const theme = useTheme().theme.listGroup.base;

  return (
    <ul className={theme} {...theirProps}>
      {children}
    </ul>
  );
};

ListGroupComponent.displayName = 'ListGroup';
ListGroupItem.displayName = 'ListGroup.Item';

export const ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem });
