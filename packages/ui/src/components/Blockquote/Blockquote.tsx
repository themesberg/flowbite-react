"use client";

import type { ComponentProps, FC } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { blockquoteTheme } from "./theme";

export interface BlockquoteTheme {
  root: BlockquoteRootTheme;
}

export interface BlockquoteRootTheme {
  base: string;
}

export interface BlockquoteProps extends ComponentProps<"blockquote">, ThemingProps<BlockquoteTheme> {}

export const Blockquote: FC<BlockquoteProps> = ({ children, className, theme: customTheme, resetTheme, ...props }) => {
  const provider = useThemeProvider();
  const theme = resolveTheme([blockquoteTheme, provider.theme?.blockquote, customTheme], [resetTheme]);

  return (
    <blockquote className={twMerge(theme.root.base, className)} data-testid="flowbite-blockquote" {...props}>
      {children}
    </blockquote>
  );
};

Blockquote.displayName = "Blockquote";
