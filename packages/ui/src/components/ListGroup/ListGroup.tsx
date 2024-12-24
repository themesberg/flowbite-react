"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import type { FlowbiteListGroupItemTheme } from "./ListGroupItem";
import { ListGroupItem } from "./ListGroupItem";
import { listGroupTheme } from "./theme";

export interface FlowbiteListGroupTheme {
  root: FlowbiteListGroupRootTheme;
  item: FlowbiteListGroupItemTheme;
}

export interface FlowbiteListGroupRootTheme {
  base: string;
}

export interface ListGroupProps extends ComponentProps<"ul"> {
  theme?: DeepPartial<FlowbiteListGroupTheme>;
  resetTheme?: ResetTheme<FlowbiteListGroupTheme>;
}

const ListGroupComponent: FC<ListGroupProps> = ({ children, className, theme: customTheme, resetTheme, ...props }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [listGroupTheme.root, provider.theme?.listGroup?.root, customTheme],
    [get(resetTheme, "root")],
  );

  return (
    <ul className={twMerge(theme.base, className)} {...props}>
      {children}
    </ul>
  );
};

ListGroupComponent.displayName = "ListGroup";
ListGroupItem.displayName = "ListGroup.Item";

export const ListGroup = Object.assign(ListGroupComponent, {
  Item: ListGroupItem,
});
