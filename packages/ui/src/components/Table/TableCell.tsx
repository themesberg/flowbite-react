"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { useTableBodyContext } from "./TableBodyContext";
import { useTableContext } from "./TableContext";
import { tableTheme } from "./theme";

export interface TableCellTheme {
  base: string;
}

export interface TableCellProps extends ComponentPropsWithRef<"td"> {
  theme?: DeepPartial<TableCellTheme>;
  resetTheme?: ResetTheme<TableCellTheme>;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, className, theme: customTheme, resetTheme, ...props }, ref) => {
    const { theme: rootTheme, resetTheme: rootResetTheme } = useTableContext();
    const { theme: bodyTheme, resetTheme: bodyResetTheme } = useTableBodyContext();

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [tableTheme.body.cell, provider.theme?.table?.body?.cell, rootTheme?.body?.cell, bodyTheme?.cell, customTheme],
      [get(rootResetTheme, "body.cell"), get(bodyResetTheme, "cell"), resetTheme],
    );

    return (
      <td className={twMerge(theme.base, className)} ref={ref} {...props}>
        {children}
      </td>
    );
  },
);

TableCell.displayName = "Table.Cell";
