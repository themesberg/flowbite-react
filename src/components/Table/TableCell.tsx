import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteTableCellTheme {
  base: string;
}

export interface TableCellProps extends PropsWithChildren, ComponentProps<'td'> {
  theme?: DeepPartial<FlowbiteTableCellTheme>;
}

export const TableCell: FC<TableCellProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().table.body.cell, customTheme);

  return (
    <td className={twMerge(theme.base, className)} {...props}>
      {children}
    </td>
  );
};
