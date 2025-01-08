"use client";

import { useEffect, useId, useRef, useState, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { megaMenuTheme } from "./theme";

export interface MegaMenuDropdownToggleTheme {
  base: string;
}

export interface MegaMenuDropdownToggleProps
  extends ComponentProps<"button">,
    ThemingProps<MegaMenuDropdownToggleTheme> {}

export function MegaMenuDropdownToggle({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: MegaMenuDropdownToggleProps) {
  const id = useId();
  const ref = useRef<HTMLButtonElement>(null);
  const [controls, setControls] = useState<string | undefined>(undefined);
  const [isExpanded, setExpanded] = useState<boolean | undefined>(undefined);

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [megaMenuTheme.dropdownToggle, provider.theme?.megaMenu?.dropdownToggle, customTheme],
    [get(provider.clearTheme, "megaMenu.dropdownToggle"), clearTheme],
    [get(provider.applyTheme, "megaMenu.dropdownToggle"), applyTheme],
  );

  function findDropdown() {
    const megaMenu = ref.current?.closest("nav");

    return megaMenu?.querySelector('[role="menu"]');
  }

  function onClick() {
    findDropdown()?.classList.toggle("hidden");

    setExpanded(!isExpanded);
  }

  useEffect(() => {
    const dropdown = findDropdown();
    const isDropdownHidden = dropdown?.classList.contains("hidden");

    setControls(dropdown?.id);
    setExpanded(!isDropdownHidden);
  }, []);

  return (
    <button
      aria-controls={controls}
      aria-expanded={isExpanded}
      aria-haspopup="menu"
      id={id}
      onClick={onClick}
      ref={ref}
      className={twMerge(theme.base, className)}
      {...props}
    >
      {children}
    </button>
  );
}

MegaMenuDropdownToggle.displayName = "MegaMenuDropdownToggle";
