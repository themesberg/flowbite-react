'use client';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteTableBodyTheme } from './TableBody';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import type { TableContextType } from './TableContext';
import { TableContext } from './TableContext';
import type { FlowbiteTableHeadTheme } from './TableHead';
import { TableHead } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import type { FlowbiteTableRowTheme } from './TableRow';
import { TableRow } from './TableRow';

export interface FlowbiteTableTheme {
  root: FlowbiteTableRootTheme;
  head: FlowbiteTableHeadTheme;
  row: FlowbiteTableRowTheme;
  body: FlowbiteTableBodyTheme;
}

export interface FlowbiteTableRootTheme {
  base: string;
  shadow: string;
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
  const theme = mergeDeep(getTheme().table, customTheme);

  return (
    <div data-testid="table-element" className={twMerge(theme.root.wrapper)}>
      <TableContext.Provider value={{ striped, hoverable }}>
        <div className={twMerge(theme.root.shadow, className)}></div>
        <table className={twMerge(theme.root.base, className)} {...props}>
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
