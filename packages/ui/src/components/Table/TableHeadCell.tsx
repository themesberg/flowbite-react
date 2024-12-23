"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { useTableContext } from "./TableContext";
import { useTableHeadContext } from "./TableHeadContext";
import { tableTheme } from "./theme";

export interface FlowbiteTableHeadCellTheme {
  base: string;
}

export interface TableHeadCellProps extends ComponentPropsWithRef<"th"> {
  theme?: DeepPartial<FlowbiteTableHeadCellTheme>;
  unstyled?: Unstyled<FlowbiteTableHeadCellTheme>;
}

export const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  ({ children, className, theme: customTheme, unstyled, ...props }, ref) => {
    const { theme: rootTheme, unstyled: rootUnstyled } = useTableContext();
    const { theme: headTheme, unstyled: headUnstyled } = useTableHeadContext();

    const theme = resolveTheme(
      [tableTheme.head.cell, getTheme()?.table?.head?.cell, rootTheme?.head?.cell, headTheme?.cell, customTheme],
      [get(rootUnstyled, "head.cell"), get(headUnstyled, "cell"), unstyled],
    );

    return (
      <th className={twMerge(theme.base, className)} ref={ref} {...props}>
        {children}
      </th>
    );
  },
);

TableHeadCell.displayName = "Table.HeadCell";
