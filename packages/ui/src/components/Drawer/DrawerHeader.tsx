"use client";

import type { ComponentProps, FC } from "react";
import { useId } from "react";
import { MdClose, MdHome } from "react-icons/md";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { useDrawerContext } from "./DrawerContext";
import { drawerTheme } from "./theme";

export interface DrawerHeaderTheme {
  inner: {
    titleIcon: string;
    titleText: string;
    closeButton: string;
    closeIcon: string;
  };
  collapsed: FlowbiteBoolean;
}

export interface DrawerHeaderProps
  extends ComponentProps<"div">,
    Record<string, unknown>,
    ThemingProps<DrawerHeaderTheme> {
  closeIcon?: FC<ComponentProps<"svg">>;
  title?: string;
  titleIcon?: FC<ComponentProps<"svg">>;
}

export const DrawerHeader: FC<DrawerHeaderProps> = ({
  children,
  className,
  closeIcon: CloseIcon = MdClose,
  theme: customTheme,
  resetTheme,
  title,
  titleIcon: TitleIcon = MdHome,
  ...props
}) => {
  const id = useId();

  const { id: mainDivId, isOpen, onClose, theme: rootTheme, resetTheme: rootResetTheme } = useDrawerContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [drawerTheme.header, provider.theme?.drawer?.header, rootTheme?.header, customTheme],
    [get(rootResetTheme, "header"), resetTheme],
  );

  return (
    <div className={className} {...props}>
      <h5 className={theme.inner.titleText} id={mainDivId}>
        <TitleIcon aria-hidden className={theme.inner.titleIcon} />
        {title}
      </h5>
      <button onClick={onClose} data-testid="close-drawer" className={theme.inner.closeButton}>
        <CloseIcon aria-hidden className={theme.inner.closeIcon} />
        <span className="sr-only">Close menu</span>
      </button>
      <span className={theme.collapsed[isOpen ? "on" : "off"]} id={`flowbite-drawer-header-${id}`}>
        {children}
      </span>
    </div>
  );
};

DrawerHeader.displayName = "Drawer.Header";
