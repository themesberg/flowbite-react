"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
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

export function ListGroup({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: ListGroupProps) {
  const provider = useThemeProvider();
  const theme = resolveTheme(
    [listGroupTheme.root, provider.theme?.listGroup?.root, customTheme],
    [get(provider.clearTheme, "listGroup.root"), get(clearTheme, "root")],
    [get(provider.applyTheme, "listGroup.root"), get(applyTheme, "root")],
  );

  return (
    <ul className={twMerge(theme.base, className)} {...props}>
      {children}
    </ul>
  );
}

ListGroup.displayName = "ListGroup";
