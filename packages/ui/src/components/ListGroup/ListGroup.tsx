import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
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
}

const ListGroupComponent: FC<ListGroupProps> = ({ children, className, theme: customTheme, ...props }) => {
  const theme = resolveTheme([listGroupTheme.root, getStore().theme?.listGroup?.root, customTheme]);

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
