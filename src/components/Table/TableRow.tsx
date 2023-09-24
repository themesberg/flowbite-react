'use client';

import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';
import { useTableContext } from './TableContext';

export interface FlowbiteTableRowTheme {
  base: string;
  hovered: string;
  striped: string;
}

export interface TableRowProps extends PropsWithChildren, ComponentProps<'tr'> {
  theme?: DeepPartial<FlowbiteTableRowTheme>;
}

export const TableRow: FC<TableRowProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { hoverable, striped } = useTableContext();
  const theme = mergeDeep(getTheme().table.row, customTheme);

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
