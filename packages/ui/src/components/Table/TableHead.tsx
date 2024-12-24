"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { useTableContext } from "./TableContext";
import type { FlowbiteTableHeadCellTheme } from "./TableHeadCell";
import { TableHeadContext } from "./TableHeadContext";
import { tableTheme } from "./theme";

export interface FlowbiteTableHeadTheme {
  base: string;
  cell: FlowbiteTableHeadCellTheme;
}

export interface TableHeadProps extends ComponentPropsWithRef<"thead"> {
  theme?: DeepPartial<FlowbiteTableHeadTheme>;
  resetTheme?: ResetTheme<FlowbiteTableHeadTheme>;
}

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
