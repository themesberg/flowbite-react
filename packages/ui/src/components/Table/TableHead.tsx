"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
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
  unstyled?: Unstyled<FlowbiteTableHeadTheme>;
}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, theme: customTheme, unstyled, ...props }, ref) => {
    const { theme: rootTheme, unstyled: rootUnstyled } = useTableContext();

    const theme = resolveTheme(
      [tableTheme.head, getTheme()?.table?.head, rootTheme?.head, customTheme],
      [get(rootUnstyled, "head"), unstyled],
    );

    return (
      <TableHeadContext.Provider value={{ theme: customTheme, unstyled }}>
        <thead className={twMerge(theme.base, className)} ref={ref} {...props}>
          <tr>{children}</tr>
        </thead>
      </TableHeadContext.Provider>
    );
  },
);

TableHead.displayName = "Table.Head";
