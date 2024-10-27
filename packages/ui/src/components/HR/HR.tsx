import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial } from "../../types";
import type { FlowbiteHRIconTheme } from "./HRIcon";
import { HRIcon } from "./HRIcon";
import type { FlowbiteHRSquareTheme } from "./HRSquare";
import { HRSquare } from "./HRSquare";
import type { FlowbiteHRTextTheme } from "./HRText";
import { HRText } from "./HRText";
import type { FlowbiteHRTrimmedTheme } from "./HRTrimmed";
import { HRTrimmed } from "./HRTrimmed";
import { hrTheme } from "./theme";

export interface FlowbiteHRTheme {
  root: {
    base: string;
  };
  trimmed: FlowbiteHRTrimmedTheme;
  icon: FlowbiteHRIconTheme;
  text: FlowbiteHRTextTheme;
  square: FlowbiteHRSquareTheme;
}

export interface HRProps extends Omit<ComponentProps<"hr">, "ref"> {
  theme?: DeepPartial<FlowbiteHRTheme>;
}

const HRComponent = forwardRef<HTMLHRElement, HRProps>(({ theme: customTheme, className, ...props }, ref) => {
  const theme = resolveTheme([hrTheme.root, getStore().theme?.hr?.root, customTheme]);

  return (
    <hr className={twMerge(theme.base, className)} role="separator" data-testid="flowbite-hr" ref={ref} {...props} />
  );
});

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
