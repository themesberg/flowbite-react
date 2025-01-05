"use client";

import type { ComponentProps, FC, PropsWithChildren, ReactElement } from "react";
import { useEffect, useId, useState } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { ChevronDownIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { Tooltip } from "../Tooltip";
import { useSidebarContext } from "./SidebarContext";
import type { SidebarItemProps } from "./SidebarItem";
import { SidebarItemContext } from "./SidebarItemContext";
import { sidebarTheme } from "./theme";

export interface SidebarCollapseTheme {
  button: string;
  icon: {
    base: string;
    open: FlowbiteBoolean;
  };
  label: {
    base: string;
    icon: {
      base: string;
      open: FlowbiteBoolean;
    };
  };
  list: string;
}

export interface SidebarCollapseProps
  extends Pick<SidebarItemProps, "active" | "as" | "href" | "icon" | "label" | "labelColor">,
    ComponentProps<"button">,
    ThemingProps<SidebarCollapseTheme> {
  onClick?: ComponentProps<"button">["onClick"];
  open?: boolean;
  chevronIcon?: FC<ComponentProps<"svg">>;
  renderChevronIcon?: (theme: SidebarCollapseTheme, open: boolean) => ReactElement;
}

export const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  className,
  icon: Icon,
  label,
  chevronIcon: ChevronIcon = ChevronDownIcon,
  renderChevronIcon,
  open = false,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}) => {
  const id = useId();
  const [isOpen, setOpen] = useState(open);
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, isCollapsed } = useSidebarContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [sidebarTheme.collapse, provider.theme?.sidebar?.collapse, rootTheme?.collapse, customTheme],
    [get(provider.clearTheme, "sidebar.collapse"), get(rootClearTheme, "collapse"), clearTheme],
    [get(provider.applyTheme, "sidebar.collapse"), get(rootApplyTheme, "collapse"), applyTheme],
  );

  useEffect(() => setOpen(open), [open]);

  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
    <li>
      {isCollapsed && !isOpen ? (
        <Tooltip content={label} placement="right">
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </li>
  );

  return (
    <Wrapper>
      <button
        id={`flowbite-sidebar-collapse-${id}`}
        onClick={() => setOpen(!isOpen)}
        title={label}
        type="button"
        className={twMerge(theme.button, className)}
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden
            data-testid="flowbite-sidebar-collapse-icon"
            className={twMerge(theme.icon.base, theme.icon.open[isOpen ? "on" : "off"])}
          />
        )}
        {isCollapsed ? (
          <span className="sr-only">{label}</span>
        ) : (
          <>
            <span data-testid="flowbite-sidebar-collapse-label" className={theme.label.base}>
              {label}
            </span>
            {renderChevronIcon ? (
              renderChevronIcon(theme, isOpen)
            ) : (
              <ChevronIcon
                aria-hidden
                className={twMerge(theme.label.icon.base, theme.label.icon.open[isOpen ? "on" : "off"])}
              />
            )}
          </>
        )}
      </button>
      <ul aria-labelledby={`flowbite-sidebar-collapse-${id}`} hidden={!isOpen} className={theme.list}>
        <SidebarItemContext.Provider value={{ isInsideCollapse: true }}>{children}</SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  );
};

SidebarCollapse.displayName = "SidebarCollapse";
