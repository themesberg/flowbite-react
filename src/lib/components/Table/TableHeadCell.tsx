import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

export type TableHeadCellProps = PropsWithChildren<ComponentProps<'th'>>;

export const TableHeadCell: FC<TableHeadCellProps> = ({ children, className, ...props }) => {
  return (
    <th className={classNames('px-6 py-3', className)} {...props}>
      {children}
    </th>
  );
};
