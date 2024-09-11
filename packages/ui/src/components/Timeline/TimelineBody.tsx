"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import type { DeepPartial } from "../../types";
import { useTimelineContentContext } from "./TimelineContentContext";

export interface FlowbiteTimelineBodyTheme {
  base: string;
}

export interface TimelineBodyProps extends ComponentProps<"p"> {
  theme?: DeepPartial<FlowbiteTimelineBodyTheme>;
}

export const TimelineBody: FC<TimelineBodyProps> = ({ children, className, theme: customTheme = {}, ...props }) => {
  const { theme: contentTheme } = useTimelineContentContext();

  const theme = mergeDeep(contentTheme.body, customTheme);

  return (
    <div className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};
