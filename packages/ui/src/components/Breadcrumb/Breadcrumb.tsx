import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteBreadcrumbItemTheme } from "./BreadcrumbItem";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { breadcrumbTheme } from "./theme";

export interface FlowbiteBreadcrumbTheme {
  root: FlowbiteBreadcrumbRootTheme;
  item: FlowbiteBreadcrumbItemTheme;
}

export interface FlowbiteBreadcrumbRootTheme {
  base: string;
  list: string;
}

export interface BreadcrumbComponentProps extends ComponentProps<"nav"> {
  theme?: DeepPartial<FlowbiteBreadcrumbRootTheme>;
  unstyled?: Unstyled<FlowbiteBreadcrumbRootTheme>;
}

const BreadcrumbComponent: FC<BreadcrumbComponentProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const theme = resolveTheme([breadcrumbTheme.root, getTheme()?.breadcrumb?.root, customTheme], [unstyled]);

  return (
    <nav aria-label="Breadcrumb" className={twMerge(theme.base, className)} {...props}>
      <ol className={theme.list}>{children}</ol>
    </nav>
  );
};

BreadcrumbComponent.displayName = "Breadcrumb";

export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem,
});
