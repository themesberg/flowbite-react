"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { TableBodyContext } from "./TableBodyContext";
import type { FlowbiteTableCellTheme } from "./TableCell";
import { useTableContext } from "./TableContext";
import { tableTheme } from "./theme";

export interface FlowbiteTableBodyTheme {
  base: string;
  cell: FlowbiteTableCellTheme;
}

export interface TableBodyProps extends ComponentPropsWithRef<"tbody"> {
  theme?: DeepPartial<FlowbiteTableBodyTheme>;
  unstyled?: Unstyled<FlowbiteTableBodyTheme>;
}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ children, className, theme: customTheme, unstyled, ...props }, ref) => {
    const { theme: rootTheme, unstyled: rootUnstyled } = useTableContext();

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [tableTheme.body, provider.theme?.table?.body, rootTheme?.body, customTheme],
      [get(rootUnstyled, "body"), unstyled],
    );

    return (
      <TableBodyContext.Provider value={{ theme: customTheme, unstyled }}>
        <tbody className={twMerge(theme.base, className)} ref={ref} {...props}>
          {children}
        </tbody>
      </TableBodyContext.Provider>
    );
  },
);

TableBody.displayName = "Table.Body";
