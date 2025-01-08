"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { timelineTheme } from "./theme";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";

export interface TimelinePointTheme {
  horizontal: string;
  line: string;
  marker: {
    base: {
      horizontal: string;
      vertical: string;
    };
    icon: {
      base: string;
      wrapper: string;
    };
  };
  vertical: string;
}

export interface TimelnePointProps extends ComponentProps<"div">, ThemingProps<TimelinePointTheme> {
  icon?: FC<ComponentProps<"svg">>;
}

export function TimelinePoint({
  children,
  className,
  icon: Icon,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: TimelnePointProps) {
  const { theme: rootTheme, clearTheme: rootClearTheme, applyTheme: rootApplyTheme, horizontal } = useTimelineContext();
  const { theme: itemTheme, clearTheme: itemClearTheme, applyTheme: itemApplyTheme } = useTimelineItemContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [
      timelineTheme.item.point,
      provider.theme?.timeline?.item?.point,
      rootTheme?.item?.point,
      itemTheme?.point,
      customTheme,
    ],
    [
      get(provider.clearTheme, "timeline.item.point"),
      get(rootClearTheme, "item.point"),
      get(itemClearTheme, "point"),
      clearTheme,
    ],
    [
      get(provider.applyTheme, "timeline.item.point"),
      get(rootApplyTheme, "item.point"),
      get(itemApplyTheme, "point"),
      applyTheme,
    ],
  );

  return (
    <div
      data-testid="timeline-point"
      className={twMerge(horizontal && theme.horizontal, !horizontal && theme.vertical, className)}
      {...props}
    >
      {children}
      {Icon ? (
        <span className={twMerge(theme.marker.icon.wrapper)}>
          <Icon aria-hidden className={twMerge(theme.marker.icon.base)} />
        </span>
      ) : (
        <div
          className={twMerge(horizontal && theme.marker.base.horizontal, !horizontal && theme.marker.base.vertical)}
        />
      )}
      {horizontal && <div className={twMerge(theme.line)} />}
    </div>
  );
}

TimelinePoint.displayName = "TimelinePoint";
