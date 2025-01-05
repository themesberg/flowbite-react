"use client";

import { forwardRef, useState, type ComponentProps, type FC } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { CheckIcon, ClipboardListIcon } from "../../icons";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { copyToClipboard } from "./helpers";
import { clipboardTheme } from "./theme";

export interface ClipboardWithIconTextTheme {
  base: string;
  label: {
    base: string;
    defaultText: string;
    successText: string;
  };
  icon: {
    defaultIcon: string;
    successIcon: string;
  };
}

export interface ClipboardWithIconTextProps extends ComponentProps<"button">, ThemingProps<ClipboardWithIconTextTheme> {
  valueToCopy: string;
  label?: string;
  icon?: FC<ComponentProps<"svg">>;
}

export const ClipboardWithIconText = forwardRef<HTMLButtonElement, ClipboardWithIconTextProps>(
  (
    {
      valueToCopy,
      icon: Icon = ClipboardListIcon,
      label = "Copy",
      theme: customTheme,
      clearTheme,
      applyTheme,
      className,
      ...rest
    },
    ref,
  ) => {
    const [isJustCopied, setIsJustCopied] = useState(false);

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [clipboardTheme.withIconText, provider.theme?.clipboard?.withIconText, customTheme],
      [get(provider.clearTheme, "clipboard.withIconText"), clearTheme],
      [get(provider.applyTheme, "clipboard.withIconText"), applyTheme],
    );

    return (
      <button
        className={twMerge(theme.base, className)}
        onClick={() => copyToClipboard(valueToCopy, setIsJustCopied)}
        {...rest}
        ref={ref}
      >
        {isJustCopied ? (
          <span className={theme.label.base}>
            <CheckIcon aria-hidden className={theme.icon.successIcon} />
            <span className={theme.label.successText}>Copied</span>
          </span>
        ) : (
          <span className={theme.label.base}>
            <Icon aria-hidden className={theme.icon.defaultIcon} />
            <span className={theme.label.defaultText}>{label}</span>
          </span>
        )}
      </button>
    );
  },
);

ClipboardWithIconText.displayName = "Clipboard.WithIconText";
