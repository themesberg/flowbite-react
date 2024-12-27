"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useTableContext } from "./TableContext";
import { useTableHeadContext } from "./TableHeadContext";
import { tableTheme } from "./theme";

export interface TableHeadCellTheme {
  base: string;
}

export interface TableHeadCellProps extends ComponentPropsWithRef<"th">, ThemingProps<TableHeadCellTheme> {}

export const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  ({ children, className, theme: customTheme, resetTheme, ...props }, ref) => {
    const { theme: rootTheme, resetTheme: rootResetTheme } = useTableContext();
    const { theme: headTheme, resetTheme: headResetTheme } = useTableHeadContext();

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [tableTheme.head.cell, provider.theme?.table?.head?.cell, rootTheme?.head?.cell, headTheme?.cell, customTheme],
      [get(rootResetTheme, "head.cell"), get(headResetTheme, "cell"), resetTheme],
    );

    return (
      <th className={twMerge(theme.base, className)} ref={ref} {...props}>
        {children}
      </th>
    );
  },
);

TableHeadCell.displayName = "Table.HeadCell";
