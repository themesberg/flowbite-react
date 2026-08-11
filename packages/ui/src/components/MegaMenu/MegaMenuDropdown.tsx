"use client";

import { useEffect, useId, useRef, useState, type ComponentProps } from "react";
import { get } from "../../helpers/get";
import { resolveProps } from "../../helpers/resolve-props";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { Dropdown, type DropdownTheme } from "../Dropdown";
import { findPairedToggle, megaMenuDropdownAttr } from "./helpers";
import { megaMenuTheme } from "./theme";

export interface MegaMenuDropdownTheme {
  base: string;
  toggle: DropdownTheme;
}

export interface MegaMenuDropdownProps extends ComponentProps<"div">, ThemingProps<MegaMenuDropdownTheme> {
  toggle?: JSX.Element;
}

export function MegaMenuDropdown(props: MegaMenuDropdownProps) {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [megaMenuTheme.dropdown, provider.theme?.megaMenu?.dropdown, props.theme],
    [get(provider.clearTheme, "megaMenu.dropdown"), props.clearTheme],
    [get(provider.applyTheme, "megaMenu.dropdown"), props.applyTheme],
  );

  const { children, className, toggle, ...restProps } = resolveProps(props, provider.props?.megaMenuDropdown);

  if (toggle) {
    return (
      <Dropdown
        inline
        label={toggle}
        placement="bottom"
        theme={theme.toggle}
        className={twMerge(theme.base, className)}
      >
        {children}
      </Dropdown>
    );
  }

  return (
    <MegaMenuDropdownPanel className={twMerge(theme.base, className)} {...restProps}>
      {children}
    </MegaMenuDropdownPanel>
  );
}

/**
 * Rendered when no `toggle` is given: a panel whose visibility is driven by the
 * `<MegaMenuDropdownToggle>` declared at the matching position.
 *
 * Kept as its own component so that these hooks are never called behind the `toggle`
 * branch above, which would break the rules of hooks.
 */
function MegaMenuDropdownPanel({ children, ...restProps }: ComponentProps<"div">) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [labelledBy, setLabelledBy] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLabelledBy(findPairedToggle(ref.current)?.id);
  }, []);

  return (
    <div aria-labelledby={labelledBy} id={id} ref={ref} role="menu" {...{ [megaMenuDropdownAttr]: "" }} {...restProps}>
      {children}
    </div>
  );
}

MegaMenuDropdown.displayName = "MegaMenuDropdown";
