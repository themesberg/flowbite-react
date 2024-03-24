"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import type { DeepPartial } from "../../types";
import { useTimelineContentContext } from "./TimelineContentContext";

export interface FlowbiteTimelineTimeTheme {
  base: string;
}

export interface TimelineTimeProps extends ComponentProps<"time"> {
  theme?: DeepPartial<FlowbiteTimelineTimeTheme>;
}

export const TimelineTime: FC<TimelineTimeProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();

  const theme = mergeDeep(contentTheme.time, customTheme);

  return (
    <time className={twMerge(theme.base, className)} {...props}>
      {children}
    </time>
  );
};
