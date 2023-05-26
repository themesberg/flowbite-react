import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '~/src/components/Flowbite';
import { mergeDeep } from '~/src/helpers/merge-deep';
import type { DeepPartial } from '..';
import type { FlowbiteTableCellTheme } from './TableCell';

export interface FlowbiteTableBodyTheme {
  base: string;
  cell: FlowbiteTableCellTheme;
}

export interface TableBodyProps extends PropsWithChildren, ComponentProps<'tbody'> {
  theme?: DeepPartial<FlowbiteTableCellTheme>;
}

export const TableBody: FC<TableBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.table.body, customTheme);

  return (
    <tbody className={classNames(theme.base, className)} {...props}>
      {children}
    </tbody>
  );
};
