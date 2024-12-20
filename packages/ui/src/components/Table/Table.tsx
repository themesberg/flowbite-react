"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { TableBody, type FlowbiteTableBodyTheme } from "./TableBody";
import { TableCell } from "./TableCell";
import { TableContext } from "./TableContext";
import { TableHead, type FlowbiteTableHeadTheme } from "./TableHead";
import { TableHeadCell } from "./TableHeadCell";
import { TableRow, type FlowbiteTableRowTheme } from "./TableRow";
import { tableTheme } from "./theme";

export interface FlowbiteTableTheme {
  root: FlowbiteTableRootTheme;
  head: FlowbiteTableHeadTheme;
  row: FlowbiteTableRowTheme;
  body: FlowbiteTableBodyTheme;
}

export interface FlowbiteTableRootTheme {
  base: string;
  shadow: string;
  wrapper: string;
}

export interface TableProps extends ComponentPropsWithRef<"table"> {
  striped?: boolean;
  hoverable?: boolean;
  theme?: DeepPartial<FlowbiteTableTheme>;
  unstyled?: Unstyled<FlowbiteTableTheme>;
}

const TableComponent = forwardRef<HTMLTableElement, TableProps>(
  ({ children, className, striped, hoverable, theme: customTheme, unstyled, ...props }, ref) => {
    const theme = resolveTheme([tableTheme, getStore().theme?.table, customTheme], [unstyled]);

    return (
      <div data-testid="table-element" className={twMerge(theme.root.wrapper)}>
        <TableContext.Provider value={{ theme: customTheme, unstyled, striped, hoverable }}>
          <div className={twMerge(theme.root.shadow, className)}></div>
          <table className={twMerge(theme.root.base, className)} {...props} ref={ref}>
            {children}
          </table>
        </TableContext.Provider>
      </div>
    );
  },
);

TableComponent.displayName = "Table";

export const Table = Object.assign(TableComponent, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
  HeadCell: TableHeadCell,
});
