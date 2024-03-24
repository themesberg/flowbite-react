import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteListGroupItemTheme } from "./ListGroupItem";
import { ListGroupItem } from "./ListGroupItem";

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

const ListGroupComponent: FC<ListGroupProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().listGroup, customTheme);

  return (
    <ul className={twMerge(theme.root.base, className)} {...props}>
      {children}
    </ul>
  );
};

ListGroupComponent.displayName = "ListGroup";
ListGroupItem.displayName = "ListGroup.Item";

export const ListGroup = Object.assign(ListGroupComponent, {
  Item: ListGroupItem,
});
