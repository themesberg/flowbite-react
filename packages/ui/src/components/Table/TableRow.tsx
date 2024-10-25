"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import type { DeepPartial } from "../../types";
import { useTableContext } from "./TableContext";

export interface FlowbiteTableRowTheme {
  base: string;
  hovered: string;
  striped: string;
}

export interface TableRowProps extends ComponentPropsWithRef<"tr"> {
  theme?: DeepPartial<FlowbiteTableRowTheme>;
}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, className, theme: customTheme, ...props }, ref) => {
    const { theme: rootTheme, hoverable, striped } = useTableContext();

    const theme = resolveTheme([rootTheme.row, {}, customTheme], { shouldPrefix: false });

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
