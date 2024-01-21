'use client';

import { forwardRef, type ComponentPropsWithRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTableBodyContext } from './TableBodyContext';

export interface FlowbiteTableCellTheme {
  base: string;
}

export interface TableCellProps extends ComponentPropsWithRef<'td'> {
  theme?: DeepPartial<FlowbiteTableCellTheme>;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: bodyTheme } = useTableBodyContext();

    const theme = mergeDeep(bodyTheme.cell, customTheme);

    return (
      <td className={twMerge(theme.base, className)} ref={ref} {...props}>
        {children}
      </td>
    );
  },
);
TableCell.displayName = 'Table.Cell';
