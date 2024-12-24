"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, ResetTheme } from "../../types";
import type { FlowbiteHeadingLevel } from "../Flowbite/FlowbiteTheme";
import { timelineTheme } from "./theme";
import { useTimelineContentContext } from "./TimelineContentContext";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";

export interface TimelineTitleTheme {
  base: string;
}

export interface TimelineTitleProps extends ComponentProps<"h1"> {
  as?: FlowbiteHeadingLevel;
  theme?: DeepPartial<TimelineTitleTheme>;
  resetTheme?: ResetTheme<TimelineTitleTheme>;
}

export const TimelineTitle: FC<TimelineTitleProps> = ({
  as: Tag = "h3",
  children,
  className,
  theme: customTheme,
  resetTheme,
  ...props
}) => {
  const { theme: rootTheme, resetTheme: rootResetTheme } = useTimelineContext();
  const { theme: itemTheme, resetTheme: itemResetTheme } = useTimelineItemContext();
  const { theme: contentTheme, resetTheme: contentResetTheme } = useTimelineContentContext();

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
      get(rootResetTheme, "item.content.title"),
      get(itemResetTheme, "content.title"),
      get(contentResetTheme, "title"),
      resetTheme,
    ],
  );

  return (
    <Tag className={twMerge(theme.base, className)} {...props}>
      {children}
    </Tag>
  );
};
