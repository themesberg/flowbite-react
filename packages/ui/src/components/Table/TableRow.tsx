"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { useTableContext } from "./TableContext";
import { tableTheme } from "./theme";

export interface TableRowTheme {
  base: string;
  hovered: string;
  striped: string;
}

export interface TableRowProps extends ComponentPropsWithRef<"tr"> {
  theme?: DeepPartial<TableRowTheme>;
  resetTheme?: ResetTheme<TableRowTheme>;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, theme: customTheme, resetTheme, ...props }, ref) => {
    const { theme: rootTheme, resetTheme: rootResetTheme, hoverable, striped } = useTableContext();

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [tableTheme.row, provider.theme?.table?.row, rootTheme?.row, customTheme],
      [get(rootResetTheme, "row"), resetTheme],
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

TableRow.displayName = "Table.Row";
