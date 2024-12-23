"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
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
  const { theme: rootTheme, unstyled: rootUnstyled } = useTimelineContext();
  const { theme: itemTheme, unstyled: itemUnstyled } = useTimelineItemContext();
  const { theme: contentTheme, unstyled: contentUnstyled } = useTimelineContentContext();

  const theme = resolveTheme(
    [
      timelineTheme.item.content.time,
      getTheme()?.timeline?.item?.content?.time,
      rootTheme?.item?.content?.time,
      itemTheme?.content?.time,
      contentTheme?.time,
      customTheme,
    ],
    [get(rootUnstyled, "item.content.time"), get(itemUnstyled, "content.time"), get(contentUnstyled, "time"), unstyled],
  );

  return (
    <time className={twMerge(theme.base, className)} {...props}>
      {children}
    </time>
  );
};
