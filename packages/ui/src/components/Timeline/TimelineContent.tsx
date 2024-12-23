"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { timelineTheme } from "./theme";
import type { FlowbiteTimelineBodyTheme } from "./TimelineBody";
import { TimelineContentContext } from "./TimelineContentContext";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";
import type { FlowbiteTimelineTimeTheme } from "./TimelineTime";
import type { FlowbiteTimelineTitleTheme } from "./TimelineTitle";

export interface FlowbiteTimelineContentTheme {
  root: {
    base: string;
    horizontal: string;
    vertical: string;
  };
  time: FlowbiteTimelineTitleTheme;
  title: FlowbiteTimelineTimeTheme;
  body: FlowbiteTimelineBodyTheme;
}

export interface TimelineContentProps extends ComponentProps<"div"> {
  theme?: DeepPartial<FlowbiteTimelineContentTheme>;
  unstyled?: Unstyled<FlowbiteTimelineContentTheme>;
}

export const TimelineContent: FC<TimelineContentProps> = ({
  children,
  className,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme, unstyled: rootUnstyled, horizontal } = useTimelineContext();
  const { theme: itemTheme, unstyled: itemUnstyled } = useTimelineItemContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [
      timelineTheme.item.content,
      provider.theme?.timeline?.item?.content,
      rootTheme?.item?.content,
      itemTheme?.content,
      customTheme,
    ],
    [get(rootUnstyled, "item.content"), get(itemUnstyled, "content"), unstyled],
  );

  return (
    <TimelineContentContext.Provider value={{ theme: customTheme, unstyled }}>
      <div
        data-testid="timeline-content"
        className={twMerge(theme.root.base, horizontal ? theme.root.horizontal : theme.root.vertical, className)}
        {...props}
      >
        {children}
      </div>
    </TimelineContentContext.Provider>
  );
};
