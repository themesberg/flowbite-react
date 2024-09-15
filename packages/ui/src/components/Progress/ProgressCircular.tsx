import type { ComponentProps, FC } from "react";
import { useId } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import type { FlowbiteColors } from "../Flowbite";

export interface FlowbiteCircularProgressTheme {
  base: string;
  bar: string;
  label: {
    base: string;
    text: string;
    textColor: CircularProgressColor;
  };
  color: {
    bgColor: string;
    barColor: CircularProgressColor;
  };
}

export interface CircularProgressColor
  extends Pick<
    FlowbiteColors,
    "dark" | "blue" | "red" | "green" | "yellow" | "indigo" | "purple" | "cyan" | "gray" | "lime" | "pink" | "teal"
  > {
  [key: string]: string;
}

export interface CircularProgressProps extends ComponentProps<"div"> {
  labelText?: boolean;
  progress: number;
  textLabel?: string;
  theme?: DeepPartial<FlowbiteCircularProgressTheme>;
}

export const CircularProgress: FC<CircularProgressProps> = ({
  className,
  color = "cyan",
  labelText = false,
  progress,
  textLabel = "65%",
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const theme = mergeDeep(getTheme().progress.circular, customTheme);

  // Calculate the circumference of the Circle
  const circumference = 2 * Math.PI * 16;

  // Calculate the stroke-dashoffset
  const offset = circumference * (1 - progress / 100);

  return (
    <div id={id} aria-valuenow={progress} role="progressbar" {...props}>
      <div className={twMerge(theme.base, className)}>
        <svg className={theme.bar} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="16" fill="none" className={theme.color.bgColor} strokeWidth="2" />

          <circle
            cx="18"
            cy="18"
            r="16"
            fill="none"
            className={theme.color.barColor[color]}
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>

        {labelText && textLabel ? (
          <div className={theme.label.base}>
            <span
              data-testid="flowbite-circular-progress-label"
              className={twMerge(theme.label.text, theme.label.textColor[color])}
            >
              {textLabel}
            </span>
          </div>
        ) : null}
      </div>
    </div>
  );
};
