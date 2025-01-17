"use client";

import { forwardRef, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { ListGroupItemTheme } from "./ListGroupItem";
import { listGroupTheme } from "./theme";

export interface ListGroupTheme {
  root: ListGroupRootTheme;
  item: ListGroupItemTheme;
}

export interface ListGroupRootTheme {
  base: string;
}

export interface ListGroupProps extends ComponentProps<"ul">, ThemingProps<ListGroupTheme> {}

export const ListGroup = forwardRef<HTMLUListElement, ListGroupProps>(
  ({ children, className, theme: customTheme, clearTheme, applyTheme, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [listGroupTheme.root, provider.theme?.listGroup?.root, customTheme],
      [get(provider.clearTheme, "listGroup.root"), get(clearTheme, "root")],
      [get(provider.applyTheme, "listGroup.root"), get(applyTheme, "root")],
    );

    return (
      <ul ref={ref} className={twMerge(theme.base, className)} {...props}>
        {children}
      </ul>
    );
  },
);

ListGroup.displayName = "ListGroup";
