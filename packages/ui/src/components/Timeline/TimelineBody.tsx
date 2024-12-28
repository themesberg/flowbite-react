"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { timelineTheme } from "./theme";
import { useTimelineContentContext } from "./TimelineContentContext";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";

export interface TimelineBodyTheme {
  base: string;
}

export interface TimelineBodyProps extends ComponentProps<"p">, ThemingProps<TimelineBodyTheme> {}

export const TimelineBody: FC<TimelineBodyProps> = ({
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
      timelineTheme.item.content.body,
      provider.theme?.timeline?.item?.content?.body,
      rootTheme?.item?.content?.body,
      itemTheme?.content?.body,
      contentTheme?.body,
      customTheme,
    ],
    [
      get(provider.resetTheme, "timeline.item.content.body"),
      get(rootResetTheme, "item.content.body"),
      get(itemResetTheme, "content.body"),
      get(contentResetTheme, "body"),
      resetTheme,
    ],
    [
      get(provider.applyTheme, "timeline.item.content.body"),
      get(rootApplyTheme, "item.content.body"),
      get(itemApplyTheme, "content.body"),
      get(contentApplyTheme, "body"),
      applyTheme,
    ],
  );

  return (
    <div className={twMerge(theme.base, className)} {...props}>
      {children}
    </div>
  );
};
