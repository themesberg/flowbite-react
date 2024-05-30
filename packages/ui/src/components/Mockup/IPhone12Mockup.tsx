import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteIPhone12MockupTheme } from "./theme";

export interface IPhone12MockupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteIPhone12MockupTheme>;
}

export function IPhone12Mockup({ className, children, theme: customTheme = {}, ...props }: IPhone12MockupProps) {
  const theme = mergeDeep(getTheme().mockup.iPhone12, customTheme);

  return (
    <div className={twMerge(theme.root, className)} {...props}>
      <div className={theme.notch} />
      <div className={theme.buttons.volumeUp} />
      <div className={theme.buttons.volumeDown} />
      <div className={theme.buttons.power} />
      <div className={theme.content}>{children}</div>
    </div>
  );
}
