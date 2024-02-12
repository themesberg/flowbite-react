import type { FC, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

export interface FlowbiteListItemTheme {
  base: string;
}

export interface ListItemProps extends PropsWithChildren {
  theme?: DeepPartial<FlowbiteListItemTheme>;
  className?: string;
}

export const ListItem: FC<ListItemProps> = ({ children, className, theme: customTheme = {} }) => {
  const theme = mergeDeep(getTheme().listGroup.item, customTheme);

  return <li className={twMerge(theme.base, className)}>{children}</li>;
};
