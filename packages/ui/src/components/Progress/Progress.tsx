"use client";

import type { ComponentProps } from "react";
import { forwardRef, useId } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DynamicStringEnumKeysOf, FlowbiteColors, FlowbiteSizes, ThemingProps } from "../../types";
import { progressTheme } from "./theme";

export interface ProgressTheme {
  base: string;
  label: string;
  bar: string;
  color: ProgressColor;
  size: ProgressSizes;
}

export interface ProgressColor
  extends Pick<
    FlowbiteColors,
    "dark" | "blue" | "red" | "green" | "yellow" | "indigo" | "purple" | "cyan" | "gray" | "lime" | "pink" | "teal"
  > {
  [key: string]: string;
  default: string;
}

export interface ProgressSizes extends Pick<FlowbiteSizes, "sm" | "md" | "lg" | "xl"> {
  [key: string]: string;
}

export interface ProgressProps extends ComponentProps<"div">, ThemingProps<ProgressTheme> {
  color?: DynamicStringEnumKeysOf<ProgressColor>;
  labelProgress?: boolean;
  labelText?: boolean;
  progress: number;
  progressLabelPosition?: "inside" | "outside";
  size?: DynamicStringEnumKeysOf<ProgressSizes>;
  textLabel?: string;
  textLabelPosition?: "inside" | "outside";
}

export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      color = "default",
      labelProgress = false,
      labelText = false,
      progress,
      progressLabelPosition = "inside",
      size = "md",
      textLabel = "progressbar",
      textLabelPosition = "inside",
      theme: customTheme,
      clearTheme,
      applyTheme,
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const provider = useThemeProvider();
    const theme = useResolveTheme(
      [progressTheme, provider.theme?.progress, customTheme],
      [get(provider.clearTheme, "progress"), clearTheme],
      [get(provider.applyTheme, "progress"), applyTheme],
    );

    return (
      <div ref={ref} id={id} aria-label={textLabel} aria-valuenow={progress} role="progressbar" {...props}>
        {((textLabel && labelText && textLabelPosition === "outside") ||
          (progress > 0 && labelProgress && progressLabelPosition === "outside")) && (
          <div className={theme.label} data-testid="flowbite-progress-outer-label-container">
            {textLabel && labelText && textLabelPosition === "outside" && (
              <span data-testid="flowbite-progress-outer-text-label">{textLabel}</span>
            )}
            {labelProgress && progressLabelPosition === "outside" && (
              <span data-testid="flowbite-progress-outer-progress-label">{progress}%</span>
            )}
          </div>
        )}
        <div className={twMerge(theme.base, theme.size[size], className)}>
          <div style={{ width: `${progress}%` }} className={twMerge(theme.bar, theme.color[color], theme.size[size])}>
            {textLabel && labelText && textLabelPosition === "inside" && (
              <span data-testid="flowbite-progress-inner-text-label">{textLabel}</span>
            )}
            {progress > 0 && labelProgress && progressLabelPosition === "inside" && (
              <span data-testid="flowbite-progress-inner-progress-label">{progress}%</span>
            )}
          </div>
        </div>
      </div>
    );
  },
);

Progress.displayName = "Progress";
