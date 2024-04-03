import { forwardRef } from "react";
import type { ComponentProps, FC } from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

export interface FlowbiteHRIconTheme {
  base: string;
  hrLine: string;
  icon: {
    base: string;
    icon: string;
  };
}

export interface HRIconProps extends Omit<ComponentProps<"hr">, "ref"> {
  theme?: DeepPartial<FlowbiteHRIconTheme>;
  icon?: FC<ComponentProps<"svg">>;
}

export const HRIcon = forwardRef<HTMLHRElement, HRIconProps>(
  ({ theme: customTheme = {}, icon: Icon, className, ...props }, ref) => {
    const theme = mergeDeep(getTheme().hr.icon, customTheme);

    const SVGIcon = Icon ? Icon : FaQuoteRight;

    return (
      <>
        <div className={theme.base}>
          <hr
            className={twMerge(theme.hrLine, className)}
            role="separator"
            data-testid="flowbite-hr-icon"
            ref={ref}
            {...props}
          />
          <div className={theme.icon.base}>
            <SVGIcon aria-hidden className={theme.icon.icon} />
          </div>
        </div>
      </>
    );
  },
);
