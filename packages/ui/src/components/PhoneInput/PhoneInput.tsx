import { forwardRef, type ComponentProps, type FC, type ReactNode } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { FlowbiteSizes } from "../Flowbite";
import { HelperText } from "../HelperText";

export interface FlowbitePhoneInputTheme {
  root: {
    base: string;
    input: {
      base: string;
      sizes: FlowbitePhoneInputSizes;
      startIcon: {
        base: string;
        icon: string;
      };
      rightIcon: {
        base: string;
        icon: string;
      };
    };
  };
}

export interface FlowbitePhoneInputSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg"> {
  [key: string]: string;
}

export interface PhoneInputProps extends Omit<ComponentProps<"input">, "ref"> {
  helperText?: ReactNode;
  icon?: FC<ComponentProps<"svg">>;
  rightIcon?: FC<ComponentProps<"svg">>;
  sizing?: keyof FlowbitePhoneInputSizes;
  theme?: DeepPartial<FlowbitePhoneInputTheme>;
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    { helperText, icon: LeftIcon, rightIcon: RightIcon, sizing = "md", theme: customTheme = {}, className, ...props },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().phoneInput.root, customTheme);

    const StartIcon = LeftIcon ? LeftIcon : FaPhoneAlt;

    return (
      <>
        <div className={twMerge(theme.base, className)}>
          <div data-testid="left-icon" className={theme.input.startIcon.base}>
            <StartIcon aria-hidden className={theme.input.startIcon.icon} />
          </div>
          <div className={theme.input.rightIcon.base}>
            {RightIcon && (
              <div data-testid="right-icon" className={theme.input.rightIcon.base}>
                <RightIcon className={theme.input.rightIcon.icon} />
              </div>
            )}
          </div>
          <input
            type="tel"
            id="phone-input"
            aria-describedby="phone-input"
            data-testid="phone-input-field"
            className={theme.input.base}
            ref={ref}
            {...props}
          />
        </div>
        {helperText && <HelperText color="grey">{helperText}</HelperText>}
      </>
    );
  },
);

PhoneInput.displayName = "PhoneInput";
