"use client";

import type { ComponentProps, FC } from "react";
import { forwardRef } from "react";
import { FaQuoteRight } from "react-icons/fa6";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { hrTheme } from "./theme";

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
  unstyled?: Unstyled<FlowbiteHRIconTheme>;
  icon?: FC<ComponentProps<"svg">>;
}

export const HRIcon = forwardRef<HTMLHRElement, HRIconProps>(
  ({ theme: customTheme, unstyled, icon: Icon = FaQuoteRight, className, ...props }, ref) => {
    const provider = useThemeProvider();
    const theme = resolveTheme([hrTheme.icon, provider.theme?.hr?.icon, customTheme], [unstyled]);

    return (
      <div className={theme.base}>
        <hr
          className={twMerge(theme.hrLine, className)}
          role="separator"
          data-testid="flowbite-hr-icon"
          ref={ref}
          {...props}
        />
        <div className={theme.icon.base}>
          <Icon aria-hidden className={theme.icon.icon} />
        </div>
      </div>
    );
  },
);
