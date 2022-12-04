import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';

export type TableHeadCellProps = PropsWithChildren<ComponentProps<'th'>>;

export const TableHeadCell: FC<TableHeadCellProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.table.head.cell;
  return (
    <th className={classNames(theme.base, className)} {...props}>
      {children}
    </th>
  );
};
