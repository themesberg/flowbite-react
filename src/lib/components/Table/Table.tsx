import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableContext, TableContextType } from './TableContext';
import { TableHead } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';

export interface FlowbiteTableTheme {
  base: string;
  wrapper: string;
  head: {
    base: string;
    cell: {
      base: string;
    };
  };
  row: {
    hovered: string;
    striped: string;
  };
  cell: {
    base: string;
  };
}

export type TableProps = PropsWithChildren<ComponentProps<'table'> & TableContextType>;

const TableComponent: FC<TableProps> = ({ children, striped, hoverable, className, ...props }) => {
  const theme = useTheme().theme.table;

  return (
    <div data-testid="table-element" className={classNames(theme.wrapper)}>
      <TableContext.Provider value={{ striped, hoverable }}>
        <table className={classNames(theme.base, className)} {...props}>
          {children}
        </table>
      </TableContext.Provider>
    </div>
  );
};

TableComponent.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableHeadCell.displayName = 'Table.HeadCell';

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
