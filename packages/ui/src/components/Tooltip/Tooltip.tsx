import type { Placement } from "@floating-ui/core";
import type { ComponentProps, FC, ReactNode } from "react";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { Floating, type FlowbiteFloatingTheme } from "../Floating";

export type FlowbiteTooltipTheme = FlowbiteFloatingTheme;

export interface TooltipProps extends Omit<ComponentProps<"div">, "content" | "style"> {
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  content: ReactNode;
  placement?: "auto" | Placement;
  style?: "dark" | "light" | "auto";
  theme?: DeepPartial<FlowbiteTooltipTheme>;
  trigger?: "hover" | "click";
  isOpen?: boolean | null;
}

/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Tooltip: FC<TooltipProps> = ({
  animation = "duration-300",
  arrow = true,
  children,
  className,
  content,
  placement = "top",
  style = "dark",
  theme: customTheme = {},
  trigger = "hover",
  isOpen = null,
  ...props
}) => {
  const theme = mergeDeep(getTheme().tooltip, customTheme);

  return (
    <Floating
      animation={animation}
      arrow={arrow}
      content={content}
      placement={placement}
      style={style}
      theme={theme}
      trigger={trigger}
      className={className}
      isOpen={isOpen}
      {...props}
    >
      {children}
    </Floating>
  );
};

Tooltip.displayName = "Tooltip";
