import { forwardRef } from "react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { HRIcon } from "./HRIcon";
import type { FlowbiteHRIconTheme } from "./HRIcon";
import type { FlowbiteHRSquareTheme } from "./HRSquare";
import { HRSquare } from "./HRSquare";
import { HRText } from "./HRText";
import type { FlowbiteHRTextTheme } from "./HRText";
import { HRTrimmed } from "./HRTrimmed";
import type { FlowbiteHRTrimmedTheme } from "./HRTrimmed";

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

const HRComponent = forwardRef<HTMLHRElement, HRProps>(({ theme: customTheme = {}, className, ...props }, ref) => {
  const theme = mergeDeep(getTheme().hr.root, customTheme);

  return (
    <>
      <hr className={twMerge(theme.base, className)} role="separator" data-testid="flowbite-hr" ref={ref} {...props} />
    </>
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
