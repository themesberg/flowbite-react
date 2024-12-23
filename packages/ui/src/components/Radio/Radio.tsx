import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial } from "../../types";
import { radioTheme } from "./theme";

export interface FlowbiteRadioTheme {
  root: FlowbiteRadioRootTheme;
}

export interface FlowbiteRadioRootTheme {
  base: string;
}

export interface RadioProps extends Omit<ComponentProps<"input">, "ref" | "type"> {
  theme?: DeepPartial<FlowbiteRadioTheme>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({ className, theme: customTheme, ...props }, ref) => {
  const theme = resolveTheme([radioTheme, getTheme()?.radio, customTheme]);

  return <input ref={ref} type="radio" className={twMerge(theme.root.base, className)} {...props} />;
});

Radio.displayName = "Radio";
