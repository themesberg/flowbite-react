"use client";

import { forwardRef, useState, type ComponentProps, type FC } from "react";
import { FaCheck, FaClipboardList } from "react-icons/fa6";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { copyToClipboard } from "./helpers";
import { clipboardTheme } from "./theme";

export interface ClipboardWithIconTheme {
  base: string;
  icon: {
    defaultIcon: string;
    successIcon: string;
  };
}

export interface ClipboardWithIconProps extends ComponentProps<"button">, ThemingProps<ClipboardWithIconTheme> {
  valueToCopy: string;
  icon?: FC<ComponentProps<"svg">>;
}

export const ClipboardWithIcon = forwardRef<HTMLButtonElement, ClipboardWithIconProps>(
  (
    { valueToCopy, icon: Icon = FaClipboardList, theme: customTheme, resetTheme, applyTheme, className, ...rest },
    ref,
  ) => {
    const [isJustCopied, setIsJustCopied] = useState(false);

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [clipboardTheme.withIcon, provider.theme?.clipboard?.withIcon, customTheme],
      [get(provider.resetTheme, "clipboard.withIcon"), resetTheme],
      [get(provider.applyTheme, "clipboard.withIcon"), applyTheme],
    );

    return (
      <button
        className={twMerge(theme.base, className)}
        onClick={() => copyToClipboard(valueToCopy, setIsJustCopied)}
        {...rest}
        ref={ref}
      >
        {isJustCopied ? (
          <FaCheck aria-hidden className={theme.icon.successIcon} />
        ) : (
          <Icon aria-hidden className={theme.icon.defaultIcon} />
        )}
      </button>
    );
  },
);
