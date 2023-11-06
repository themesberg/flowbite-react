'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTableContext } from './TableContext';
import type { FlowbiteTableHeadCellTheme } from './TableHeadCell';
import { TableHeadContext } from './TableHeadContext';

export interface FlowbiteTableHeadTheme {
  base: string;
  cell: FlowbiteTableHeadCellTheme;
}

export interface TableHeadProps extends ComponentProps<'thead'> {
  theme?: DeepPartial<FlowbiteTableHeadTheme>;
}

export const TableHead: FC<TableHeadProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useTableContext();

  const theme = mergeDeep(rootTheme.head, customTheme);

  return (
    <TableHeadContext.Provider value={{ theme }}>
      <thead className={twMerge(theme.base, className)} {...props}>
        <tr>{children}</tr>
      </thead>
    </TableHeadContext.Provider>
  );
};
