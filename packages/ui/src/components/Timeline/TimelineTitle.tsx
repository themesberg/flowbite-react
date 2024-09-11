"use client";

import type { ComponentProps, FC } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import type { DeepPartial } from "../../types";
import type { FlowbiteHeadingLevel } from "../Flowbite";
import { useTimelineContentContext } from "./TimelineContentContext";

export interface FlowbiteTimelineTitleTheme {
  base: string;
}

export interface TimelineTitleProps extends ComponentProps<"h1"> {
  as?: FlowbiteHeadingLevel;
  theme?: DeepPartial<FlowbiteTimelineTitleTheme>;
}

export const TimelineTitle: FC<TimelineTitleProps> = ({
  as: Tag = "h3",
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { theme: contentTheme } = useTimelineContentContext();

  const theme = mergeDeep(contentTheme.title, customTheme);

  return (
    <Tag className={twMerge(theme.base, className)} {...props}>
      {children}
    </Tag>
  );
};
