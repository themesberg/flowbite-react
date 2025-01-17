"use client";

import { forwardRef, type ComponentProps, type PropsWithChildren } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { ListItemTheme } from "./ListItem";
import { listTheme } from "./theme";

export interface ListTheme {
  root: ListRootTheme;
  item: ListItemTheme;
}

export interface ListRootTheme {
  base: string;
  ordered: {
    on: string;
    off: string;
  };
  horizontal: string;
  unstyled: string;
  nested: string;
}

export interface ListProps
  extends PropsWithChildren<ComponentProps<"ul"> & ComponentProps<"ol">>,
    ThemingProps<ListTheme> {
  horizontal?: boolean;
  nested?: boolean;
  ordered?: boolean;
  unstyled?: boolean;
}

export const List = forwardRef<HTMLUListElement | HTMLOListElement, ListProps>(
  (
    {
      children,
      className,
      horizontal,
      nested,
      ordered,
      unstyled,
      theme: customTheme,
      clearTheme,
      applyTheme,
      ...props
    },
    ref,
  ) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [listTheme.root, provider.theme?.list?.root, customTheme],
      [get(provider.clearTheme, "list.root"), get(clearTheme, "root")],
      [get(provider.applyTheme, "list.root"), get(applyTheme, "root")],
    );
    const Component = ordered ? "ol" : "ul";

    return (
      <Component
        ref={ref as never}
        className={twMerge(
          theme.base,
          theme.ordered[ordered ? "on" : "off"],
          unstyled && theme.unstyled,
          nested && theme.nested,
          horizontal && theme.horizontal,
          className,
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

List.displayName = "List";
