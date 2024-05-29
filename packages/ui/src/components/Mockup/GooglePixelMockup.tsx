import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteGooglePixelMockupTheme } from "./theme";

export interface GooglePixelMockupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteGooglePixelMockupTheme>;
}

export function GooglePixelMockup({ className, children, theme: customTheme = {}, ...props }: GooglePixelMockupProps) {
  const theme = mergeDeep(getTheme().mockup.googlePixel, customTheme);

  return (
    <div className={twMerge(theme.root, className)} {...props}>
      <div className={theme.notch} />
      <div className={theme.buttons.action} />
      <div className={theme.buttons.volumeUp} />
      <div className={theme.buttons.volumeDown} />
      <div className={theme.buttons.power} />
      <div className={theme.content}>{children}</div>
    </div>
  );
}
