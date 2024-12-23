"use client";

import type { ComponentProps, FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { timelineTheme } from "./theme";
import { useTimelineContext } from "./TimelineContext";
import { useTimelineItemContext } from "./TimelineItemContext";

export interface FlowbiteTimelinePointTheme {
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

export interface TimelnePointProps extends ComponentProps<"div"> {
  icon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<FlowbiteTimelinePointTheme>;
  unstyled?: Unstyled<FlowbiteTimelinePointTheme>;
}

export const TimelinePoint: FC<TimelnePointProps> = ({
  children,
  className,
  icon: Icon,
  theme: customTheme,
  unstyled,
  ...props
}) => {
  const { theme: rootTheme, unstyled: rootUnstyled, horizontal } = useTimelineContext();
  const { theme: itemTheme, unstyled: itemUnstyled } = useTimelineItemContext();

  const provider = useThemeProvider();
  const theme = resolveTheme(
    [
      timelineTheme.item.point,
      provider.theme?.timeline?.item?.point,
      rootTheme?.item?.point,
      itemTheme?.point,
      customTheme,
    ],
    [get(rootUnstyled, "item.point"), get(itemUnstyled, "point"), unstyled],
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
};
