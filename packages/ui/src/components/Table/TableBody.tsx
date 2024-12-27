"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { TableBodyContext } from "./TableBodyContext";
import type { TableCellTheme } from "./TableCell";
import { useTableContext } from "./TableContext";
import { tableTheme } from "./theme";

export interface TableBodyTheme {
  base: string;
  cell: TableCellTheme;
}

export interface TableBodyProps extends ComponentPropsWithRef<"tbody">, ThemingProps<TableBodyTheme> {}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, theme: customTheme, resetTheme, ...props }, ref) => {
    const { theme: rootTheme, resetTheme: rootResetTheme } = useTableContext();

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [tableTheme.body, provider.theme?.table?.body, rootTheme?.body, customTheme],
      [get(rootResetTheme, "body"), resetTheme],
    );

    return (
      <TableBodyContext.Provider value={{ theme: customTheme, resetTheme }}>
        <tbody className={twMerge(theme.base, className)} ref={ref} {...props}>
          {children}
        </tbody>
      </TableBodyContext.Provider>
    );
  },
);

TableBody.displayName = "Table.Body";
