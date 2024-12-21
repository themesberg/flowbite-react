"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { useDropdownContext } from "./DropdownContext";
import { DropdownDivider } from "./DropdownDivider";
import { dropdownTheme } from "./theme";

export interface FlowbiteDropdownHeaderTheme {
  header: string;
}

export interface DropdownHeaderProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteDropdownHeaderTheme>;
  unstyled?: Unstyled<FlowbiteDropdownHeaderTheme>;
}

export const DropdownHeader: FC<DropdownHeaderProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme, unstyled: rootUnstyled } = useDropdownContext();

  const theme = resolveTheme(
    [dropdownTheme.floating, getStore().theme?.dropdown?.floating, rootTheme?.floating, customTheme],
    [get(rootUnstyled, "floating"), unstyled],
  );

  return (
    <>
      <div className={twMerge(theme.header, className)} {...props}>
        {children}
      </div>
      <DropdownDivider />
    </>
  );
};
