import type { ComponentProps } from "react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { resolveTheme } from "../../helpers/resolve-theme";
import { getStore } from "../../store";
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
  const theme = resolveTheme([radioTheme, getStore().theme?.radio, customTheme]);

  return <input ref={ref} type="radio" className={twMerge(theme.root.base, className)} {...props} />;
});

Radio.displayName = "Radio";
