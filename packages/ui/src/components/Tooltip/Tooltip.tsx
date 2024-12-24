"use client";

import type { Placement } from "@floating-ui/core";
import type { ComponentProps, FC, ReactNode } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import { Floating, type FloatingTheme } from "../Floating";
import { tooltipTheme } from "./theme";

export type TooltipTheme = FloatingTheme;

export interface TooltipProps extends Omit<ComponentProps<"div">, "content" | "style"> {
  animation?: false | `duration-${number}`;
  arrow?: boolean;
  content: ReactNode;
  placement?: "auto" | Placement;
  style?: "dark" | "light" | "auto";
  theme?: DeepPartial<TooltipTheme>;
  resetTheme?: ResetTheme<TooltipTheme>;
  trigger?: "hover" | "click";
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
  theme: customTheme,
  resetTheme,
  trigger = "hover",
  ...props
}) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([tooltipTheme, provider.theme?.tooltip, customTheme], [resetTheme]);

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
      {...props}
    >
      {children}
    </Floating>
  );
};

Tooltip.displayName = "Tooltip";
