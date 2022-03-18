import { FC } from 'react';
import classNames from 'classnames';

import { ListGroupItem } from './ListGroupItem';

export type ListGroupProps = {
  className?: string;
};

const ListGroupComponent: FC<ListGroupProps> = ({ children, className }) => (
  <div
    className={classNames(
      'list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white',
      className,
    )}
  >
    {children}
  </div>
);

ListGroupItem.displayName = 'ListGroup.Item';

export const ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem });
