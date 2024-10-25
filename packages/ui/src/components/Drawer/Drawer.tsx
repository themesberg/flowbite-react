"use client";

import type { ComponentProps, FC } from "react";
import { useEffect, useId } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
import type { FlowbiteBoolean } from "../Flowbite/FlowbiteTheme";
import { DrawerContext } from "./DrawerContext";
import { DrawerHeader, type FlowbiteDrawerHeaderTheme } from "./DrawerHeader";
import { DrawerItems, type FlowbiteDrawerItemsTheme } from "./DrawerItems";
import { drawerTheme } from "./theme";

export interface FlowbiteDrawerTheme {
  root: FlowbiteDrawerRootTheme;
  header: FlowbiteDrawerHeaderTheme;
  items: FlowbiteDrawerItemsTheme;
}

export interface FlowbiteDrawerRootTheme {
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

export interface DrawerProps extends ComponentProps<"div"> {
  backdrop?: boolean;
  edge?: boolean;
  onClose: () => void;
  open?: boolean;
  position?: "top" | "right" | "bottom" | "left";
  theme?: DeepPartial<FlowbiteDrawerTheme>;
}

const DrawerComponent: FC<DrawerProps> = ({
  backdrop = true,
  children,
  className,
  edge = false,
  position = "left",
  onClose,
  open: isOpen = false,
  theme: customTheme,
  ...props
}) => {
  const id = useId();
  const theme = resolveTheme([drawerTheme, getStore().theme?.drawer, customTheme]);

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
    <DrawerContext.Provider value={{ theme, onClose, isOpen, id }}>
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
};

DrawerComponent.displayName = "Drawer";

export const Drawer = Object.assign(DrawerComponent, {
  Header: DrawerHeader,
  Items: DrawerItems,
});
