"use client";

import { forwardRef, type ComponentProps, type ReactNode } from "react";
import { get } from "../../helpers/get";
import { resolveProps } from "../../helpers/resolve-props";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { EmptyIcon } from "../../icons/empty-icon";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { emptyTheme } from "./theme";

export interface EmptyTheme {
  root: EmptyRootTheme;
  icon: string;
  title: string;
  description: string;
}

export interface EmptyRootTheme {
  base: string;
}

export interface EmptyProps extends Omit<ComponentProps<"div">, "title">, ThemingProps<EmptyTheme> {
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}

export const Empty = forwardRef<HTMLDivElement, EmptyProps>((props, ref) => {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [emptyTheme, provider.theme?.empty, props.theme],
    [get(provider.clearTheme, "empty"), props.clearTheme],
    [get(provider.applyTheme, "empty"), props.applyTheme],
  );

  const {
    children,
    className,
    description = "There is nothing to display.",
    title = "No data found",
    ...restProps
  } = resolveProps(props, provider.props?.empty);

  return (
    <div ref={ref} className={twMerge(theme.root.base, className)} data-testid="flowbite-empty" {...restProps}>
      <EmptyIcon aria-hidden className={theme.icon} />
      {title && <h3 className={theme.title}>{title}</h3>}
      {description && <p className={theme.description}>{description}</p>}
      {children}
    </div>
  );
});

Empty.displayName = "Empty";
