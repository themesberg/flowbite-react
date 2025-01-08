"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { TableBodyTheme } from "./TableBody";
import { TableContext } from "./TableContext";
import type { TableHeadTheme } from "./TableHead";
import type { TableRowTheme } from "./TableRow";
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

export interface TableProps extends ComponentPropsWithRef<"table">, ThemingProps<TableTheme> {
  striped?: boolean;
  hoverable?: boolean;
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, striped, hoverable, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [tableTheme, provider.theme?.table, customTheme],
      [get(provider.clearTheme, "table"), clearTheme],
      [get(provider.applyTheme, "table"), applyTheme],
    );

    return (
      <div data-testid="table-element" className={twMerge(theme.root.wrapper)}>
        <TableContext.Provider value={{ theme: customTheme, clearTheme, applyTheme, striped, hoverable }}>
          <div className={twMerge(theme.root.shadow, className)}></div>
          <table className={twMerge(theme.root.base, className)} {...props} ref={ref}>
            {children}
          </table>
        </TableContext.Provider>
      </div>
    );
  },
);

Table.displayName = "Table";
