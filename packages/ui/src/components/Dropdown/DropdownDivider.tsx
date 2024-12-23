"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { useDropdownContext } from "./DropdownContext";
import { dropdownTheme } from "./theme";

export interface FlowbiteDropdownDividerTheme {
  divider: string;
}

export type DropdownDividerProps = {
  theme?: DeepPartial<FlowbiteDropdownDividerTheme>;
  unstyled?: Unstyled<FlowbiteDropdownDividerTheme>;
} & ComponentProps<"div">;

export const DropdownDivider: FC<DropdownDividerProps> = ({ className, theme: customTheme, unstyled, ...props }) => {
  const { theme: rootTheme, unstyled: rootUnstyled } = useDropdownContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [dropdownTheme.floating, provider.theme?.dropdown?.floating, rootTheme?.floating, customTheme],
    [get(rootUnstyled, "floating"), unstyled],
  );

  return <div className={twMerge(theme.divider, className)} {...props} />;
};
