import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';

export type TableHeadProps = PropsWithChildren<ComponentProps<'thead'>>;

export const TableHead: FC<TableHeadProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.table;

  return (
    <thead className={classNames(theme.head.base, className)} {...props}>
      <tr>{children}</tr>
    </thead>
  );
};
