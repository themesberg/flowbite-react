"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import type { DeepPartial } from "../../types";
import { useTimelineContentContext } from "./TimelineContentContext";

export interface FlowbiteTimelineTimeTheme {
  base: string;
}

export interface TimelineTimeProps extends ComponentProps<"time"> {
  theme?: DeepPartial<FlowbiteTimelineTimeTheme>;
}

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, theme: customTheme, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();

  const theme = resolveTheme([contentTheme.time, customTheme], { shouldPrefix: false });

  return (
    <time className={twMerge(theme.base, className)} {...props}>
      {children}
    </time>
  );
};
