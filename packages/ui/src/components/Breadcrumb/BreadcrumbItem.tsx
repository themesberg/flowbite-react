import type { ComponentProps, FC } from "react";
import { forwardRef } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { breadcrumbTheme } from "./theme";

export interface FlowbiteBreadcrumbItemTheme {
  base: string;
  chevron: string;
  href: FlowbiteBoolean;
  icon: string;
}

export interface BreadcrumbItemProps extends Omit<ComponentProps<"li">, "ref"> {
  href?: string;
  icon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<FlowbiteBreadcrumbItemTheme>;
}

export const BreadcrumbItem = forwardRef<HTMLAnchorElement | HTMLSpanElement, BreadcrumbItemProps>(
  ({ children, className, href, icon: Icon, theme: customTheme, ...props }, ref) => {
    const isLink = typeof href !== "undefined";
    const Component = isLink ? "a" : "span";

    const theme = resolveTheme([breadcrumbTheme.item, getStore().theme?.breadcrumb?.item, customTheme]);

    return (
      <li className={twMerge(theme.base, className)} {...props}>
        <HiOutlineChevronRight aria-hidden className={theme.chevron} data-testid="flowbite-breadcrumb-separator" />
        <Component
          ref={ref as never}
          className={theme.href[isLink ? "on" : "off"]}
          data-testid="flowbite-breadcrumb-item"
          href={href}
        >
          {Icon && <Icon aria-hidden className={theme.icon} />}
          {children}
        </Component>
      </li>
    );
  },
);

BreadcrumbItem.displayName = "Breadcrumb.Item";
