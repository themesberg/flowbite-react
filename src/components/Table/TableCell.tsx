import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '~/src';
import { useTheme } from '~/src';
import { mergeDeep } from '~/src/helpers/merge-deep';

export interface FlowbiteTableCellTheme {
  base: string;
}

export interface TableCellProps extends PropsWithChildren, ComponentProps<'td'> {
  theme?: DeepPartial<FlowbiteTableCellTheme>;
}

export const TableCell: FC<TableCellProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.table.body.cell, customTheme);

  return (
    <td className={classNames(theme.base, className)} {...props}>
      {children}
    </td>
  );
};
