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

export interface FlowbiteTimelineBodyTheme {
  base: string;
}

export interface TimelineBodyProps extends ComponentProps<"p"> {
  theme?: DeepPartial<FlowbiteTimelineBodyTheme>;
  unstyled?: Unstyled<FlowbiteTimelineBodyTheme>;
}

export const TimelineBody: FC<TimelineBodyProps> = ({
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
      timelineTheme.item.content.body,
      getTheme()?.timeline?.item?.content?.body,
      rootTheme?.item?.content?.body,
      itemTheme?.content?.body,
      contentTheme?.body,
      customTheme,
    ],
    [get(rootUnstyled, "item.content.body"), get(itemUnstyled, "content.body"), get(contentUnstyled, "body"), unstyled],
  );

  return (
    <div className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};
