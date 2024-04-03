import { forwardRef } from "react";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

export interface FlowbiteHRSquareTheme {
  base: string;
}

export interface HRSquareProps extends Omit<ComponentProps<"hr">, "ref"> {
  theme?: DeepPartial<FlowbiteHRSquareTheme>;
}

export const HRSquare = forwardRef<HTMLHRElement, HRSquareProps>(
  ({ theme: customTheme = {}, className, ...props }, ref) => {
    const theme = mergeDeep(getTheme().hr.square, customTheme);

    return (
      <>
        <hr
          className={twMerge(theme.base, className)}
          role="separator"
          data-testid="flowbite-hr-square"
          ref={ref}
          {...props}
        />
      </>
    );
  },
);
