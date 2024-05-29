import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteTabletMockupTheme } from "./theme";

export interface TabletMockupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteTabletMockupTheme>;
}

export function TabletMockup({ className, children, theme: customTheme = {}, ...props }: TabletMockupProps) {
  const theme = mergeDeep(getTheme().mockup.tablet, customTheme);

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
