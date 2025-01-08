"use client";

import type { ComponentProps } from "react";
import { get } from "../../helpers/get";
import { useResolveTheme } from "../../helpers/resolve-theme";
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

export function Blockquote({
  children,
  className,
  theme: customTheme,
  clearTheme,
  applyTheme,
  ...props
}: BlockquoteProps) {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [blockquoteTheme, provider.theme?.blockquote, customTheme],
    [get(provider.clearTheme, "blockquote"), clearTheme],
    [get(provider.applyTheme, "blockquote"), applyTheme],
  );

  return (
    <blockquote className={twMerge(theme.root.base, className)} data-testid="flowbite-blockquote" {...props}>
      {children}
    </blockquote>
  );
}

Blockquote.displayName = "Blockquote";
