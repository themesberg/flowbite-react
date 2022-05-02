import { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

export type TableCellProps = PropsWithChildren<ComponentProps<'td'>>;

export const TableCell: FC<TableCellProps> = ({ children, className, ...props }) => {
  return (
    <td className={classNames('px-6 py-4', className)} {...props}>
      {children}
    </td>
  );
};
