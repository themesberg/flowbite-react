import type { ComponentProps } from "react";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteDesktopMockupTheme } from "./theme";

export interface DesktopMockupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteDesktopMockupTheme>;
}

export function DesktopMockup({ children, theme: customTheme = {}, ...props }: DesktopMockupProps) {
  const theme = mergeDeep(getTheme().mockup.desktop, customTheme);

  return (
    <div {...props}>
      <div className={theme.display}>
        <div className={theme.content}>{children}</div>
      </div>
      <div className={theme.bezel} />
      <div className={theme.stand} />
    </div>
  );
}
