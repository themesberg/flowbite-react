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
  disabled?: boolean;
};

export const ListGroup: FC<ListGroupProps> = ({ items }) => {
  return (
    <div className="list-none w-48 text-sm font-medium text-gray-900 bg-white rounded-lg divide-y divide-gray-200 dark:divide-gray-600 border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
      {items.map((item, index) => (
        <Fragment key={index}>
          {!item.link ? (
            <button
              className={classNames(
                'flex gap-2 items-center text-sm font-medium py-2 px-4 w-full text-left first:rounded-t-lg last:rounded-b-lg',
                {},
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
                'block py-2 px-4 w-full cursor-pointer focus:outline-none dark:bg-gray-800 first:rounded-t-lg last:rounded-b-lg',
                {
                  'text-white bg-blue-700': item.active,
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
