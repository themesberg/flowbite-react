import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteDefaultMockupTheme } from "./theme";

export interface DefaultMockupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteDefaultMockupTheme>;
}

export function DefaultMockup({ className, children, theme: customTheme = {}, ...props }: DefaultMockupProps) {
  const theme = mergeDeep(getTheme().mockup.default, customTheme);

  return (
    <div className={twMerge(theme.root, className)} {...props}>
      <div className={theme.buttons.action} />
      <div className={theme.buttons.volumeUp} />
      <div className={theme.buttons.volumeDown} />
      <div className={theme.buttons.power} />
      <div className={theme.content}>{children}</div>
    </div>
  );
}
