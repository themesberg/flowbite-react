import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';

export type TableCellProps = PropsWithChildren<ComponentProps<'td'>>;

export const TableCell: FC<TableCellProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.table.cell;

  return (
    <td className={classNames(theme.base, className)} {...props}>
      {children}
    </td>
  );
};
