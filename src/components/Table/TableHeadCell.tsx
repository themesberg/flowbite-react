import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';

export interface FlowbiteTableHeadCellTheme {
  base: string;
}

export interface TableHeadCellProps extends PropsWithChildren, ComponentProps<'th'> {
  theme?: DeepPartial<FlowbiteTableHeadCellTheme>;
}

export const TableHeadCell: FC<TableHeadCellProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().table.head.cell, customTheme);

  return (
    <th className={twMerge(theme.base, className)} {...props}>
      {children}
    </th>
  );
};
