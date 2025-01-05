"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useTableContext } from "./TableContext";
import { tableTheme } from "./theme";

export interface TableRowTheme {
  base: string;
  hovered: string;
  striped: string;
}

export interface TableRowProps extends ComponentPropsWithRef<"tr">, ThemingProps<TableRowTheme> {}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const {
      theme: rootTheme,
      clearTheme: rootClearTheme,
      applyTheme: rootApplyTheme,
      hoverable,
      striped,
    } = useTableContext();

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [tableTheme.row, provider.theme?.table?.row, rootTheme?.row, customTheme],
      [get(provider.clearTheme, "table.row"), get(rootClearTheme, "row"), clearTheme],
      [get(provider.applyTheme, "table.row"), get(rootApplyTheme, "row"), applyTheme],
    );

    return (
      <tr
        ref={ref}
        data-testid="table-row-element"
        className={twMerge(theme.base, striped && theme.striped, hoverable && theme.hovered, className)}
        {...props}
      >
        {children}
      </tr>
    );
  },
);

TableRow.displayName = "TableRow";
