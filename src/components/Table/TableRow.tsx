'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTableContext } from './TableContext';

export interface FlowbiteTableRowTheme {
  base: string;
  hovered: string;
  striped: string;
}

export interface TableRowProps extends ComponentProps<'tr'> {
  theme?: DeepPartial<FlowbiteTableRowTheme>;
}

export const TableRow: FC<TableRowProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: rootTheme, hoverable, striped } = useTableContext();

  const theme = mergeDeep(rootTheme.row, customTheme);

  return (
    <tr
      data-testid="table-row-element"
      className={twMerge(theme.base, striped && theme.striped, hoverable && theme.hovered, className)}
      {...props}
    >
      {children}
    </tr>
  );
};
