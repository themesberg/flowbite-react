import { ComponentProps, FC, PropsWithChildren } from 'react';
import classNames from 'classnames';

import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableRow } from './TableRow';
import { TableHeadCell } from './TableHeadCell';
import { TableCell } from './TableCell';
import { TableContext } from './TableContext';

export type TableProps = PropsWithChildren<ComponentProps<'table'> & TableContext>;

const TableComponent: FC<TableProps> = ({ children, striped, hoverable, className, ...props }) => {
  return (
    <div data-testid="table-element" className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <TableContext.Provider value={{ striped, hoverable }}>
        <table
          className={classNames('w-full text-left text-sm text-gray-500 dark:text-gray-400', className)}
          {...props}
        >
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
