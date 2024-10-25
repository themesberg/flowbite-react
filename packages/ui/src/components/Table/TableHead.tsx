"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import type { DeepPartial } from "../../types";
import { useTableContext } from "./TableContext";
import type { FlowbiteTableHeadCellTheme } from "./TableHeadCell";
import { TableHeadContext } from "./TableHeadContext";

export interface FlowbiteTableHeadTheme {
  base: string;
  cell: FlowbiteTableHeadCellTheme;
}

export interface TableHeadProps extends ComponentPropsWithRef<"thead"> {
  theme?: DeepPartial<FlowbiteTableHeadTheme>;
}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ children, className, theme: customTheme, ...props }, ref) => {
    const { theme: rootTheme } = useTableContext();

    const theme = resolveTheme([rootTheme.head, {}, customTheme], { shouldPrefix: false });

    return (
      <TableHeadContext.Provider value={{ theme }}>
        <thead className={twMerge(theme.base, className)} ref={ref} {...props}>
          <tr>{children}</tr>
        </thead>
      </TableHeadContext.Provider>
    );
  },
);

TableHead.displayName = "Table.Head";
