"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { useTableBodyContext } from "./TableBodyContext";
import { useTableContext } from "./TableContext";
import { tableTheme } from "./theme";

export interface TableCellTheme {
  base: string;
}

export interface TableCellProps extends ComponentPropsWithRef<"td">, ThemingProps<TableCellTheme> {}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme } = useTableContext();
    const { theme: bodyTheme, clearTheme: bodyClearTheme, applyTheme: bodyApplyTheme } = useTableBodyContext();

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [tableTheme.body.cell, provider.theme?.table?.body?.cell, rootTheme?.body?.cell, bodyTheme?.cell, customTheme],
      [
        get(provider.clearTheme, "table.body.cell"),
        get(rootClearTheme, "body.cell"),
        get(bodyClearTheme, "cell"),
        clearTheme,
      ],
      [
        get(provider.applyTheme, "table.body.cell"),
        get(rootApplyTheme, "body.cell"),
        get(bodyApplyTheme, "cell"),
        applyTheme,
      ],
    );

    return (
      <td className={twMerge(theme.base, className)} ref={ref} {...props}>
        {children}
      </td>
    );
  },
);

TableCell.displayName = "TableCell";
