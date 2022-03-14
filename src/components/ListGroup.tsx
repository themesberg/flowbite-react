import { ComponentProps, FC, Fragment, ReactNode } from 'react';
import classNames from 'classnames';

export type ListGroupProps = {
  items: ListGroupItem[];
};
export type ListGroupItem = {
  title: ReactNode;
  link?: string;
  icon?: FC<ComponentProps<'svg'>>;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
};

export const ListGroup: FC<ListGroupProps> = ({ items }) => {
  return (
    <div className="w-48 list-none divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:divide-gray-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
      {items.map((item, index) => (
        <Fragment key={index}>
          {!item.link ? (
            <button
              onClick={item.onClick}
              className={classNames(
                'flex w-full items-center gap-2 py-2 px-4 text-left text-sm font-medium first:rounded-t-lg last:rounded-b-lg',
                {
                  '!bg-blue-700 text-white': item.active,
                  'hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white': !item.active,
                },
              )}
              type="button"
            >
              {item.icon && <item.icon />}
              {item.title}
            </button>
          ) : (
            <a
              href={item.link}
              aria-current="false"
              className={classNames(
                'block w-full cursor-pointer py-2 px-4 first:rounded-t-lg last:rounded-b-lg focus:outline-none dark:bg-gray-800',
                {
                  '!bg-blue-700 text-white': item.active,
                  'hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-600 dark:hover:text-white': !item.active,
                },
              )}
            >
              {item.title}
            </a>
          )}
        </Fragment>
      ))}
    </div>
  );
};
