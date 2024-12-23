"use client";

import { forwardRef, useState, type ComponentProps, type FC } from "react";
import { FaCheck, FaClipboardList } from "react-icons/fa6";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { getTheme } from "../../store";
import type { DeepPartial, Unstyled } from "../../types";
import { copyToClipboard } from "./helpers";
import { clipboardTheme } from "./theme";

export interface FlowbiteClipboardWithIconTextTheme {
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

export interface ClipboardWithIconTextProps extends ComponentProps<"button"> {
  valueToCopy: string;
  label?: string;
  icon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<FlowbiteClipboardWithIconTextTheme>;
  unstyled?: Unstyled<FlowbiteClipboardWithIconTextTheme>;
}

export const ClipboardWithIconText = forwardRef<HTMLButtonElement, ClipboardWithIconTextProps>(
  (
    { valueToCopy, icon: Icon = FaClipboardList, label = "Copy", theme: customTheme, unstyled, className, ...rest },
    ref,
  ) => {
    const [isJustCopied, setIsJustCopied] = useState(false);

    const theme = resolveTheme(
      [clipboardTheme.withIconText, getTheme()?.clipboard?.withIconText, customTheme],
      [unstyled],
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
            <FaCheck aria-hidden className={theme.icon.successIcon} />
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
