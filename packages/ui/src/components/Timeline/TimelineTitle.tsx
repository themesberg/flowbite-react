"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import type { FlowbiteHeadingLevel } from "../Flowbite/FlowbiteTheme";
import { timelineTheme } from "./theme";
import { useTimelineContentContext } from "./TimelineContentContext";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";

export interface FlowbiteTimelineTitleTheme {
  base: string;
}

export interface TimelineTitleProps extends ComponentProps<"h1"> {
  as?: FlowbiteHeadingLevel;
  theme?: DeepPartial<FlowbiteTimelineTitleTheme>;
  unstyled?: Unstyled<FlowbiteTimelineTitleTheme>;
}

export const TimelineTitle: FC<TimelineTitleProps> = ({
  as: Tag = "h3",
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
      timelineTheme.item.content.title,
      getTheme()?.timeline?.item?.content?.title,
      rootTheme?.item?.content?.title,
      itemTheme?.content?.title,
      contentTheme?.title,
      customTheme,
    ],
    [
      get(rootUnstyled, "item.content.title"),
      get(itemUnstyled, "content.title"),
      get(contentUnstyled, "title"),
      unstyled,
    ],
  );

  return (
    <Tag className={twMerge(theme.base, className)} {...props}>
      {children}
    </Tag>
  );
};
