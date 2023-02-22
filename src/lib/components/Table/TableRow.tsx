import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite';
import { useTableContext } from './TableContext';

export interface FlowbiteTableRowTheme {
  hovered: string;
  striped: string;
}

export interface TableRowProps extends PropsWithChildren, ComponentProps<'tr'> {
  theme?: DeepPartial<FlowbiteTableRowTheme>;
}

export const TableRow: FC<TableRowProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { hoverable, striped } = useTableContext();
  const theme = mergeDeep(useTheme().theme.table.row, customTheme);

  return (
    <tr
      data-testid="table-row-element"
      className={classNames(striped && theme.striped, hoverable && theme.hovered, className)}
      {...props}
    >
      {children}
    </tr>
  );
};
