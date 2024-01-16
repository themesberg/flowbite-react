'use client';

import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import type { DeepPartial } from '../../types';
import { useTableHeadContext } from './TableHeadContext';

export interface FlowbiteTableHeadCellTheme {
  base: string;
}

export interface TableHeadCellProps extends ComponentProps<'th'> {
  theme?: DeepPartial<FlowbiteTableHeadCellTheme>;
}

export const TableHeadCell: FC<TableHeadCellProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: headTheme } = useTableHeadContext();

  const theme = mergeDeep(headTheme.cell, customTheme);

  return (
    <th className={twMerge(theme.base, className)} {...props}>
      {children}
    </th>
  );
};
