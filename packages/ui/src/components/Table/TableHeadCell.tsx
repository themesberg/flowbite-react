"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import type { DeepPartial } from "../../types";
import { useTableHeadContext } from "./TableHeadContext";

export interface FlowbiteTableHeadCellTheme {
  base: string;
}

export interface TableHeadCellProps extends ComponentPropsWithRef<"th"> {
  theme?: DeepPartial<FlowbiteTableHeadCellTheme>;
}

export const TableHeadCell = forwardRef<HTMLTableCellElement, TableHeadCellProps>(
  ({ children, className, theme: customTheme, ...props }, ref) => {
    const { theme: headTheme } = useTableHeadContext();

    const theme = resolveTheme([headTheme.cell, customTheme], { shouldPrefix: false });

    return (
      <th className={twMerge(theme.base, className)} ref={ref} {...props}>
        {children}
      </th>
    );
  },
);

TableHeadCell.displayName = "Table.HeadCell";
