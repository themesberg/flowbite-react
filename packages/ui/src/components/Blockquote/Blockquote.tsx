import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { blockquoteTheme } from "./theme";

export interface FlowbiteBlockquoteTheme {
  root: FlowbiteBlockquoteRootTheme;
}

export interface FlowbiteBlockquoteRootTheme {
  base: string;
}

export interface BlockquoteProps extends ComponentProps<"blockquote"> {
  theme?: DeepPartial<FlowbiteBlockquoteTheme>;
  unstyled?: Unstyled<FlowbiteBlockquoteTheme>;
}

export const Blockquote: FC<BlockquoteProps> = ({ children, className, theme: customTheme, unstyled, ...props }) => {
  const theme = resolveTheme([blockquoteTheme, getTheme()?.blockquote, customTheme], [unstyled]);

  return (
    <blockquote className={twMerge(theme.root.base, className)} data-testid="flowbite-blockquote" {...props}>
      {children}
    </blockquote>
  );
};

Blockquote.displayName = "Blockquote";
