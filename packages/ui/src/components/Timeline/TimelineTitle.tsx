"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import type { FlowbiteHeadingLevel } from "../Flowbite/FlowbiteTheme";
import { timelineTheme } from "./theme";
import { useTimelineContentContext } from "./TimelineContentContext";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";

export interface TimelineTitleTheme {
  base: string;
}

export interface TimelineTitleProps extends ComponentProps<"h1">, ThemingProps<TimelineTitleTheme> {
  as?: FlowbiteHeadingLevel;
}

export const TimelineTitle: FC<TimelineTitleProps> = ({
  as: Tag = "h3",
  children,
  className,
  theme: customTheme,
  resetTheme,
  applyTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme, applyTheme: rootApplyTheme } = useTimelineContext();
  const { theme: itemTheme, resetTheme: itemResetTheme, applyTheme: itemApplyTheme } = useTimelineItemContext();
  const {
    theme: contentTheme,
    resetTheme: contentResetTheme,
    applyTheme: contentApplyTheme,
  } = useTimelineContentContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [
      timelineTheme.item.content.title,
      provider.theme?.timeline?.item?.content?.title,
      rootTheme?.item?.content?.title,
      itemTheme?.content?.title,
      contentTheme?.title,
      customTheme,
    ],
    [
      get(provider.resetTheme, "timeline.item.content.title"),
      get(rootResetTheme, "item.content.title"),
      get(itemResetTheme, "content.title"),
      get(contentResetTheme, "title"),
      resetTheme,
    ],
    [
      get(provider.applyTheme, "timeline.item.content.title"),
      get(rootApplyTheme, "item.content.title"),
      get(itemApplyTheme, "content.title"),
      get(contentApplyTheme, "title"),
      applyTheme,
    ],
  );

  return (
    <Tag className={twMerge(theme.base, className)} {...props}>
      {children}
    </Tag>
  );
};

TimelineTitle.displayName = "TimelineTitle";
