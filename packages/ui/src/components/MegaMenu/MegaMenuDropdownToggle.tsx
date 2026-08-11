"use client";

import { forwardRef, useEffect, useId, useRef, useState, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { mergeRefs } from "../../helpers/merge-refs";
import { resolveProps } from "../../helpers/resolve-props";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { findPairedDropdown, megaMenuDropdownToggleAttr } from "./helpers";
import { useMegaMenuContext } from "./MegaMenuContext";
import { megaMenuTheme } from "./theme";

export interface MegaMenuDropdownToggleTheme {
  base: string;
}

export interface MegaMenuDropdownToggleProps
  extends ComponentProps<"button">, ThemingProps<MegaMenuDropdownToggleTheme> {}

export const MegaMenuDropdownToggle = forwardRef<HTMLButtonElement, MegaMenuDropdownToggleProps>((props, ref) => {
  const id = useId();
  const innerRef = useRef<HTMLButtonElement>(null);
  const [controls, setControls] = useState<string | undefined>(undefined);
  const [isExpanded, setExpanded] = useState<boolean | undefined>(undefined);

  const megaMenu = useMegaMenuContext();
  const openToggleId = megaMenu?.openToggleId;

  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [megaMenuTheme.dropdownToggle, provider.theme?.megaMenu?.dropdownToggle, props.theme],
    [get(provider.clearTheme, "megaMenu.dropdownToggle"), props.clearTheme],
    [get(provider.applyTheme, "megaMenu.dropdownToggle"), props.applyTheme],
  );

  const { className, ...restProps } = resolveProps(props, provider.props?.megaMenuDropdownToggle);

  function onClick() {
    const dropdown = findPairedDropdown(innerRef.current);

    if (!dropdown) {
      return;
    }

    const expanded = !dropdown.classList.toggle("hidden");

    setExpanded(expanded);
    megaMenu?.setOpenToggleId(expanded ? id : undefined);
  }

  useEffect(() => {
    const dropdown = findPairedDropdown(innerRef.current);
    const isDropdownHidden = dropdown?.classList.contains("hidden");

    setControls(dropdown?.id);
    setExpanded(!isDropdownHidden);
  }, []);

  // Collapse this dropdown once another toggle of the same mega menu opens its own.
  useEffect(() => {
    if (openToggleId === undefined || openToggleId === id) {
      return;
    }

    const dropdown = findPairedDropdown(innerRef.current);

    if (!dropdown || dropdown.classList.contains("hidden")) {
      return;
    }

    dropdown.classList.add("hidden");
    setExpanded(false);
  }, [openToggleId, id]);

  return (
    <button
      ref={mergeRefs([ref, innerRef])}
      aria-controls={controls}
      aria-expanded={isExpanded}
      aria-haspopup="menu"
      id={id}
      onClick={onClick}
      className={twMerge(theme.base, className)}
      {...{ [megaMenuDropdownToggleAttr]: "" }}
      {...restProps}
    />
  );
});

MegaMenuDropdownToggle.displayName = "MegaMenuDropdownToggle";
