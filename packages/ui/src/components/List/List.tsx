"use client";

import type { ComponentProps, FC, PropsWithChildren } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
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
  resetTheme: string;
  nested: string;
}

export interface ListColors extends FlowbiteStateColors {
  [key: string]: string;
  default: string;
}

export interface ListProps extends PropsWithChildren<ComponentProps<"ul"> & ComponentProps<"ol">> {
  horizontal?: boolean;
  nested?: boolean;
  ordered?: boolean;
  resetTheme?: ResetTheme<FlowbiteListTheme>;
  theme?: DeepPartial<FlowbiteListTheme>;
  unstyled?: boolean;
}

const ListComponent: FC<ListProps> = ({
  children,
  className,
  horizontal,
  nested,
  ordered,
  resetTheme,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([listTheme.root, provider.theme?.list?.root, customTheme], [get(resetTheme, "root")]);
  const Component = ordered ? "ol" : "ul";

  return (
    <Component
      className={twMerge(
        theme.base,
        theme.ordered[ordered ? "on" : "off"],
        unstyled && theme.resetTheme,
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
