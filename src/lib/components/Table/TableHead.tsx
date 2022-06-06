import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

export type TableHeadProps = PropsWithChildren<ComponentProps<'thead'>>;

export const TableHead: FC<TableHeadProps> = ({ children, className, ...props }) => {
  return (
    <thead
      className={classNames(
        'bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400',
        className,
      )}
      {...props}
    >
      <tr>{children}</tr>
    </thead>
  );
};
