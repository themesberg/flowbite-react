"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { TableBody, type TableBodyTheme } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableContext } from "./TableContext";
import { TableHead, type TableHeadTheme } from "./TableHead";
import { TableHeadCell } from "./TableHeadCell";
import { TableRow, type TableRowTheme } from "./TableRow";
import { tableTheme } from "./theme";

export interface TableTheme {
  root: TableRootTheme;
  head: TableHeadTheme;
  row: TableRowTheme;
  body: TableBodyTheme;
}

export interface TableRootTheme {
  base: string;
  shadow: string;
  wrapper: string;
}

export interface TableProps extends ComponentPropsWithRef<"table"> {
  striped?: boolean;
  hoverable?: boolean;
  theme?: DeepPartial<TableTheme>;
  resetTheme?: ResetTheme<TableTheme>;
}

const TableComponent = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, striped, hoverable, theme: customTheme, resetTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([tableTheme, provider.theme?.table, customTheme], [resetTheme]);

    return (
      <div data-testid="table-element" className={twMerge(theme.root.wrapper)}>
        <TableContext.Provider value={{ theme: customTheme, resetTheme, striped, hoverable }}>
          <div className={twMerge(theme.root.shadow, className)}></div>
          <table className={twMerge(theme.root.base, className)} {...props} ref={ref}>
            {children}
          </table>
        </TableContext.Provider>
      </div>
    );
  },
);

TableComponent.displayName = "Table";

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
