import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite';
import { TableBody } from './TableBody';
import { FlowbiteTableCellTheme, TableCell } from './TableCell';
import { TableContext, TableContextType } from './TableContext';
import { FlowbiteTableHeadTheme, TableHead } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import { FlowbiteTableRowTheme, TableRow } from './TableRow';

export interface FlowbiteTableTheme {
  root: FlowbiteTableRootTheme;
  cell: FlowbiteTableCellTheme;
  head: FlowbiteTableHeadTheme;
  row: FlowbiteTableRowTheme;
}

export interface FlowbiteTableRootTheme {
  base: string;
  wrapper: string;
}

export interface TableProps extends PropsWithChildren, ComponentProps<'table'>, TableContextType {
  theme?: DeepPartial<FlowbiteTableTheme>;
}

const TableComponent: FC<TableProps> = ({
  children,
  className,
  hoverable,
  striped,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.table, customTheme);

  return (
    <div data-testid="table-element" className={classNames(theme.root.wrapper)}>
      <TableContext.Provider value={{ striped, hoverable }}>
        <table className={classNames(theme.root.base, className)} {...props}>
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
