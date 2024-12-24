"use client";

import type { ComponentProps, FC, PropsWithChildren } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteStateColors } from "../Flowbite/FlowbiteTheme";
import { ListItem, type FlowbiteListItemTheme } from "./ListItem";
import { listTheme } from "./theme";

export interface FlowbiteListTheme {
  root: FlowbiteListRootTheme;
  item: FlowbiteListItemTheme;
}

export interface FlowbiteListRootTheme {
  base: string;
  ordered: {
    on: string;
    off: string;
  };
  horizontal: string;
  unstyled: string;
  nested: string;
}

export interface ListColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface ListProps extends PropsWithChildren<ComponentProps<"ul"> & ComponentProps<"ol">> {
  _unstyled?: boolean; // TODO: fix
  horizontal?: boolean;
  nested?: boolean;
  ordered?: boolean;
  theme?: DeepPartial<FlowbiteListTheme>;
  unstyled?: Unstyled<FlowbiteListTheme>;
}

const ListComponent: FC<ListProps> = ({
  _unstyled, // TODO: fix
  children,
  className,
  horizontal,
  nested,
  ordered,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([listTheme.root, provider.theme?.list?.root, customTheme], [get(unstyled, "root")]);
  const Component = ordered ? "ol" : "ul";

  return (
    <Component
      className={twMerge(
        theme.base,
        theme.ordered[ordered ? "on" : "off"],
        _unstyled && theme.unstyled,
        nested && theme.nested,
        horizontal && theme.horizontal,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

ListComponent.displayName = "List";
ListItem.displayName = "List.Item";

export const List = Object.assign(ListComponent, { Item: ListItem });
