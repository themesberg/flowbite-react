import type { ComponentProps } from "react";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteLaptopMockupTheme } from "./theme";

export interface LaptopMockupProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteLaptopMockupTheme>;
}

export function LaptopMockup({ children, theme: customTheme = {}, ...props }: LaptopMockupProps) {
  const theme = mergeDeep(getTheme().mockup.laptop, customTheme);

  return (
    <div {...props}>
      <div className={theme.display}>
        <div className={theme.content}>{children}</div>
      </div>
      <div className={theme.base.root}>
        <div className={theme.base.inner} />
      </div>
    </div>
  );
}
