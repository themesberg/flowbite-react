'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTableContext } from './TableContext';

export interface FlowbiteTableCellTheme {
  base: string;
}

export interface TableCellProps extends ComponentProps<'td'> {
  theme?: DeepPartial<FlowbiteTableCellTheme>;
}

export const TableCell: FC<TableCellProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme } = useTableContext();

  const theme = mergeDeep(rootTheme.body.cell, customTheme);

  return (
    <td className={twMerge(theme.base, className)} {...props}>
      {children}
    </td>
  );
};
