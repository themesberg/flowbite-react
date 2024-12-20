"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getStore } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { timelineTheme } from "./theme";
import { useTimelineContentContext } from "./TimelineContentContext";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";

export interface FlowbiteTimelineTimeTheme {
  base: string;
}

export interface TimelineTimeProps extends ComponentProps<"time"> {
  theme?: DeepPartial<FlowbiteTimelineTimeTheme>;
  unstyled?: Unstyled<FlowbiteTimelineTimeTheme>;
}

export const TimelineTime: FC<TimelineTimeProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme } = useTimelineContext();
  const { theme: itemTheme } = useTimelineItemContext();
  const { theme: contentTheme } = useTimelineContentContext();

  const theme = resolveTheme(
    [
      timelineTheme.item.content.time,
      getStore().theme?.timeline?.item?.content?.time,
      rootTheme?.item?.content?.time,
      itemTheme?.content?.time,
      contentTheme?.time,
      customTheme,
    ],
    [unstyled],
  );

  return (
    <time className={twMerge(theme.base, className)} {...props}>
      {children}
    </time>
  );
};
