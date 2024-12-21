"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { useTableBodyContext } from "./TableBodyContext";
import { useTableContext } from "./TableContext";
import { tableTheme } from "./theme";

export interface FlowbiteTableCellTheme {
  base: string;
}

export interface TableCellProps extends ComponentPropsWithRef<"td"> {
  theme?: DeepPartial<FlowbiteTableCellTheme>;
  unstyled?: Unstyled<FlowbiteTableCellTheme>;
}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ children, className, theme: customTheme, unstyled, ...props }, ref) => {
    const { theme: rootTheme, unstyled: rootUnstyled } = useTableContext();
    const { theme: bodyTheme, unstyled: bodyUnstyled } = useTableBodyContext();

    const theme = resolveTheme(
      [tableTheme.body.cell, getStore().theme?.table?.body?.cell, rootTheme?.body?.cell, bodyTheme?.cell, customTheme],
      [get(rootUnstyled, "body.cell"), get(bodyUnstyled, "cell"), unstyled],
    );

    return (
      <td className={twMerge(theme.base, className)} ref={ref} {...props}>
        {children}
      </td>
    );
  },
);

TableCell.displayName = "Table.Cell";
