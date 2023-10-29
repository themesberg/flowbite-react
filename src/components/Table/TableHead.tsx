import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteTableHeadCellTheme } from './TableHeadCell';

export interface FlowbiteTableHeadTheme {
  base: string;
  cell: FlowbiteTableHeadCellTheme;
}

export interface TableHeadProps extends PropsWithChildren, ComponentProps<'thead'> {
  theme?: DeepPartial<FlowbiteTableHeadTheme>;
}

export const TableHead: FC<TableHeadProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().table, customTheme);

  return (
    <thead className={twMerge(theme.head.base, className)} {...props}>
      <tr>{children}</tr>
    </thead>
  );
};
