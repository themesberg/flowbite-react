import { ComponentProps } from "react";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteSmartwatchMockupTheme } from "./theme";

export interface SmartwatchMockupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteSmartwatchMockupTheme>;
}

export function SmartwatchMockup({ children, theme: customTheme = {}, ...props }: SmartwatchMockupProps) {
  const theme = mergeDeep(getTheme().mockup.smartwatch, customTheme);

  return (
    <div {...props}>
      <div className={theme.band.top} />
      <div className={theme.display}>
        <div className={theme.buttons.top} />
        <div className={theme.buttons.bottom} />
        <div className={theme.content}>{children}</div>
      </div>
      <div className={theme.band.bottom} />
    </div>
  );
}
