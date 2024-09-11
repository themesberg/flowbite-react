"use client";

import { useEffect, useId, useRef, useState, type ComponentProps, type FC, type MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import { DeepPartial } from "../../types";

export interface FlowbiteMegaMenuDropdownToggleTheme {
  base: string;
}

export interface MegaMenuDropdownToggleProps extends ComponentProps<"button"> {
  theme?: DeepPartial<FlowbiteMegaMenuDropdownToggleTheme>;
}

export const MegaMenuDropdownToggle: FC<MegaMenuDropdownToggleProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const ref = useRef<HTMLButtonElement>(null);
  const [controls, setControls] = useState<string | undefined>(undefined);
  const [isExpanded, setExpanded] = useState<boolean | undefined>(undefined);

  const theme = mergeDeep(getTheme().megaMenu.dropdownToggle, customTheme);

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
