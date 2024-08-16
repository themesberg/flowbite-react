"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import type { DeepPartial } from "../../types";
import { useTableContext } from "./TableContext";
import type { FlowbiteTableHeadTheme } from "./TableHead";

export interface TableHeadRowProps extends ComponentPropsWithRef<"tr"> {
  theme?: DeepPartial<FlowbiteTableHeadTheme>;
}

export const TableHeadRow = forwardRef<HTMLTableRowElement, TableHeadRowProps>(
  ({ children, className, theme: customTheme = {}, ...props }, ref) => {
    const { theme: rootTheme } = useTableContext();

    const theme = mergeDeep(rootTheme.head, customTheme);

    return (
      <tr className={twMerge(theme.row, className)} ref={ref} {...props}>
        {children}
      </tr>
    );
  },
);

TableHeadRow.displayName = "Table.HeadRow";
