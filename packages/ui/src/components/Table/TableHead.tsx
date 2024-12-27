"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useTableContext } from "./TableContext";
import type { TableHeadCellTheme } from "./TableHeadCell";
import { TableHeadContext } from "./TableHeadContext";
import { tableTheme } from "./theme";

export interface TableHeadTheme {
  base: string;
  cell: TableHeadCellTheme;
}

export interface TableHeadProps extends ComponentPropsWithRef<"thead">, ThemingProps<TableHeadTheme> {}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, theme: customTheme, resetTheme, ...props }, ref) => {
    const { theme: rootTheme, resetTheme: rootResetTheme } = useTableContext();

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [tableTheme.head, provider.theme?.table?.head, rootTheme?.head, customTheme],
      [get(rootResetTheme, "head"), resetTheme],
    );

    return (
      <TableHeadContext.Provider value={{ theme: customTheme, resetTheme }}>
        <thead className={twMerge(theme.base, className)} ref={ref} {...props}>
          <tr>{children}</tr>
        </thead>
      </TableHeadContext.Provider>
    );
  },
);

TableHead.displayName = "Table.Head";
