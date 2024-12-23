import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial } from "../../types";
import { hrTheme } from "./theme";

export interface FlowbiteHRTextTheme {
  base: string;
  hrLine: string;
  text: string;
}

export interface HRTextProps extends Omit<ComponentProps<"hr">, "ref"> {
  text: string;
  theme?: DeepPartial<FlowbiteHRTextTheme>;
}

export const HRText = forwardRef<HTMLHRElement, HRTextProps>(
  ({ theme: customTheme, text, className, ...props }, ref) => {
    const theme = resolveTheme([hrTheme.text, getTheme()?.hr?.text, customTheme]);

    return (
      <div className={theme.base}>
        <hr
          className={twMerge(theme.hrLine, className)}
          data-testid="flowbite-hr-text"
          role="separator"
          ref={ref}
          {...props}
        />
        <span className={theme.text}>{text}</span>
      </div>
    );
  },
);
