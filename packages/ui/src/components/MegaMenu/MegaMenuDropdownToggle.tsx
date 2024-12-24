"use client";

import { useEffect, useId, useRef, useState, type ComponentProps, type FC, type MouseEventHandler } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { megaMenuTheme } from "./theme";

export interface MegaMenuDropdownToggleTheme {
  base: string;
}

export interface MegaMenuDropdownToggleProps extends ComponentProps<"button"> {
  theme?: DeepPartial<MegaMenuDropdownToggleTheme>;
  resetTheme?: ResetTheme<MegaMenuDropdownToggleTheme>;
}

export const MegaMenuDropdownToggle: FC<MegaMenuDropdownToggleProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const id = useId();
  const ref = useRef<HTMLButtonElement>(null);
  const [controls, setControls] = useState<string | undefined>(undefined);
  const [isExpanded, setExpanded] = useState<boolean | undefined>(undefined);

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [megaMenuTheme.dropdownToggle, provider.theme?.megaMenu?.dropdownToggle, customTheme],
    [resetTheme],
  );

  const findDropdown = function () {
    const megaMenu = ref.current?.closest("nav");

    return megaMenu?.querySelector('[role="menu"]');
  };

  const onClick: MouseEventHandler<HTMLButtonElement> = function () {
    findDropdown()?.classList.toggle("hidden");

    setExpanded(!isExpanded);
  };

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
};

MegaMenuDropdownToggle.displayName = "MegaMenu.DropdownToggle";
