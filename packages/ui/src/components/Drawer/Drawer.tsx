"use client";

import type { ComponentProps } from "react";
import { useEffect, useId } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { DrawerContext } from "./DrawerContext";
import type { DrawerHeaderTheme } from "./DrawerHeader";
import type { DrawerItemsTheme } from "./DrawerItems";
import { drawerTheme } from "./theme";

export interface DrawerTheme {
  root: DrawerRootTheme;
  header: DrawerHeaderTheme;
  items: DrawerItemsTheme;
}

export interface DrawerRootTheme {
  base: string;
  backdrop: string;
  edge: string;
  position: {
    top: FlowbiteBoolean;
    right: FlowbiteBoolean;
    bottom: FlowbiteBoolean;
    left: FlowbiteBoolean;
  };
}

export interface DrawerProps extends ComponentProps<"div">, ThemingProps<DrawerTheme> {
  backdrop?: boolean;
  edge?: boolean;
  onClose: () => void;
  open?: boolean;
  position?: "top" | "right" | "bottom" | "left";
}

export function Drawer({
  backdrop = true,
  children,
  className,
  edge = false,
  position = "left",
  onClose,
  open: isOpen = false,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: DrawerProps) {
  const id = useId();

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [drawerTheme, provider.theme?.drawer, customTheme],
    [get(provider.clearTheme, "drawer"), clearTheme],
    [get(provider.applyTheme, "drawer"), applyTheme],
  );

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, [onClose, isOpen]);

  return (
    <DrawerContext.Provider value={{ theme: customTheme, clearTheme, applyTheme, onClose, isOpen, id }}>
      <div
        aria-modal
        aria-describedby={`drawer-dialog-${id}`}
        role="dialog"
        tabIndex={-1}
        data-testid="flowbite-drawer"
        className={twMerge(
          theme.root.base,
          theme.root.position[position][isOpen ? "on" : "off"],
          edge && !isOpen && theme.root.edge,
          className,
        )}
        {...props}
      >
        {children}
      </div>
      {isOpen && backdrop && <div onClick={() => onClose()} className={theme.root.backdrop} />}
    </DrawerContext.Provider>
  );
}

Drawer.displayName = "Drawer";
