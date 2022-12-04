import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';
import { useTableContext } from './TableContext';

export type TableRowProps = PropsWithChildren<ComponentProps<'tr'>>;

export const TableRow: FC<TableRowProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.table.row;
  const { striped, hoverable } = useTableContext();

  return (
    <tr
      data-testid="table-row-element"
      className={classNames(striped && theme.striped, hoverable && theme.hovered, className)}
      {...props}
    >
      {children}
    </tr>
  );
};
