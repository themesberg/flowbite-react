"use client";

import { forwardRef, type ComponentPropsWithRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
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
  renderHead: () => ReactNode; // Add renderHead prop for custom rendering
}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, theme: customTheme = {}, renderHead, ...props }, ref) => {
    const { theme: rootTheme } = useTableContext();

    const theme = mergeDeep(rootTheme.head, customTheme);

    return (
      <TableHeadContext.Provider value={{ theme }}>
        <thead className={twMerge(theme.base, className)} ref={ref} {...props}>
        {renderHead ? renderHead() : null} {/* Call renderHead to render the header rows */}
        </thead>
      </TableHeadContext.Provider>
    );
  },
);

TableHead.displayName = "Table.Head";
