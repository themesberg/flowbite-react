"use client";

import { useEffect, useId, useRef, useState, type ComponentProps, type FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { Dropdown, DropdownTheme } from "../Dropdown";
import { megaMenuTheme } from "./theme";

export interface MegaMenuDropdownTheme {
  base: string;
  toggle: DropdownTheme;
}

export interface MegaMenuDropdownProps extends ComponentProps<"div">, ThemingProps<MegaMenuDropdownTheme> {
  toggle?: JSX.Element;
}

export const MegaMenuDropdown: FC<MegaMenuDropdownProps> = ({
  children,
  className,
  theme: customTheme,
  resetTheme,
  toggle,
  ...props
}) => {
  const [labelledBy, setLabelledBy] = useState<string | undefined>(undefined);

  const provider = useThemeProvider();
  const theme = resolveTheme([megaMenuTheme.dropdown, provider.theme?.megaMenu?.dropdown, customTheme], [resetTheme]);

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

  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const findToggle = function () {
      const megaMenu = ref.current?.closest("nav");

      return megaMenu?.querySelector('[aria-haspopup="menu"]');
    };

    setLabelledBy(findToggle()?.id);
  }, []);

  return (
    <div
      aria-labelledby={labelledBy}
      id={id}
      ref={ref}
      role="menu"
      className={twMerge(theme.base, className)}
      {...props}
    >
      {children}
    </div>
  );
};

MegaMenuDropdown.displayName = "MegaMenu.Dropdown";
