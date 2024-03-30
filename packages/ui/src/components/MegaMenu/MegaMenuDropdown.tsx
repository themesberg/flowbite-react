"use client";

import { useEffect, useId, useRef, useState, type ComponentProps, type FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import { Dropdown, FlowbiteDropdownTheme } from "../Dropdown";

export interface FlowbiteMegaMenuDropdownTheme {
  base: string;
  toggle: FlowbiteDropdownTheme;
}

export interface MegaMenuDropdownProps extends ComponentProps<"div"> {
  theme?: FlowbiteMegaMenuDropdownTheme;
  toggle?: JSX.Element;
}

export const MegaMenuDropdown: FC<MegaMenuDropdownProps> = ({
  children,
  className,
  theme: customTheme = {},
  toggle,
  ...props
}) => {
  const [labelledBy, setLabelledBy] = useState<string | undefined>(undefined);

  const theme = mergeDeep(getTheme().megaMenu.dropdown, customTheme);

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
