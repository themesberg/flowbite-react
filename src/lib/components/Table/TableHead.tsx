import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite';
import type { FlowbiteTableHeadCellTheme } from './TableHeadCell';

export interface FlowbiteTableHeadTheme {
  base: string;
  cell: FlowbiteTableHeadCellTheme;
}

export interface TableHeadProps extends PropsWithChildren, ComponentProps<'thead'> {
  theme?: DeepPartial<FlowbiteTableHeadTheme>;
}

export const TableHead: FC<TableHeadProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(useTheme().theme.table, customTheme);

  return (
    <thead className={classNames(theme.head.base, className)} {...props}>
      <tr>{children}</tr>
    </thead>
  );
};
