"use client";

import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { HRIconTheme } from "./HRIcon";
import { HRIcon } from "./HRIcon";
import type { HRSquareTheme } from "./HRSquare";
import { HRSquare } from "./HRSquare";
import type { HRTextTheme } from "./HRText";
import { HRText } from "./HRText";
import type { HRTrimmedTheme } from "./HRTrimmed";
import { HRTrimmed } from "./HRTrimmed";
import { hrTheme } from "./theme";

export interface HRTheme {
  root: {
    base: string;
  };
  trimmed: HRTrimmedTheme;
  icon: HRIconTheme;
  text: HRTextTheme;
  square: HRSquareTheme;
}

export interface HRProps extends Omit<ComponentProps<"hr">, "ref">, ThemingProps<HRTheme> {}

const HRComponent = forwardRef<HTMLHRElement, HRProps>(
  ({ theme: customTheme, resetTheme, className, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([hrTheme.root, provider.theme?.hr?.root, customTheme], [get(resetTheme, "root")]);

    return (
      <hr className={twMerge(theme.base, className)} role="separator" data-testid="flowbite-hr" ref={ref} {...props} />
    );
  },
);

HRComponent.displayName = "HR";
HRTrimmed.displayName = "HR.Trimmed";
HRIcon.displayName = "HR.Icon";
HRText.displayName = "HR.Text";
HRSquare.displayName = "HR.Square";

export const HR = Object.assign(HRComponent, {
  Trimmed: HRTrimmed,
  Icon: HRIcon,
  Text: HRText,
  Square: HRSquare,
});
