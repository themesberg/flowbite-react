import { forwardRef } from "react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

export interface FlowbiteHRTrimmedTheme {
  base: string;
}

export interface HRTrimmedProps extends Omit<ComponentProps<"hr">, "ref"> {
  theme?: DeepPartial<FlowbiteHRTrimmedTheme>;
}

export const HRTrimmed = forwardRef<HTMLHRElement, HRTrimmedProps>(
  ({ theme: customTheme = {}, className, ...props }, ref) => {
    const theme = mergeDeep(getTheme().hr.trimmed, customTheme);

    return (
      <>
        <hr
          className={twMerge(theme.base, className)}
          role="separator"
          data-testid="flowbite-hr-trimmed"
          ref={ref}
          {...props}
        />
      </>
    );
  },
);
