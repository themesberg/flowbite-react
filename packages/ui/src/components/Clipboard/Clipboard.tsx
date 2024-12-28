"use client";

import { forwardRef, useState, type ComponentProps, type ReactNode } from "react";
import { get } from "../../helpers/get";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { Tooltip } from "../Tooltip";
import type { ClipboardWithIconTheme } from "./ClipboardWithIcon";
import { ClipboardWithIcon } from "./ClipboardWithIcon";
import type { ClipboardWithIconTextTheme } from "./ClipboardWithIconText";
import { ClipboardWithIconText } from "./ClipboardWithIconText";
import { copyToClipboard } from "./helpers";
import { clipboardTheme } from "./theme";

export interface ClipboardTheme {
  button: {
    base: string;
    label: string;
  };
  withIcon: ClipboardWithIconTheme;
  withIconText: ClipboardWithIconTextTheme;
}

export interface ClipboardProps extends ComponentProps<"button">, ThemingProps<ClipboardTheme["button"]> {
  valueToCopy: string;
  label?: ReactNode;
}

const ClipboardComponent = forwardRef<HTMLButtonElement, ClipboardProps>(
  ({ className, valueToCopy, label, theme: customTheme, resetTheme, applyTheme, ...rest }, ref) => {
    const [isJustCopied, setIsJustCopied] = useState(false);

    const provider = useThemeProvider();
    const theme = resolveTheme(
      [clipboardTheme.button, provider.theme?.clipboard?.button, customTheme],
      [get(provider.resetTheme, "clipboard.button"), resetTheme],
      [get(provider.applyTheme, "clipboard.button"), applyTheme],
    );

    return (
      <Tooltip content={isJustCopied ? "Copied" : "Copy to clipboard"} className="[&_*]:cursor-pointer">
        <button
          className={twMerge(theme.base, className)}
          onClick={() => copyToClipboard(valueToCopy, setIsJustCopied)}
          {...rest}
          ref={ref}
        >
          <span className={theme.label}>{label}</span>
        </button>
      </Tooltip>
    );
  },
);

ClipboardComponent.displayName = "Clipboard";
ClipboardWithIcon.displayName = "Clipboard.WithIcon";
ClipboardWithIconText.displayName = "Clipboard.WithIconText";

export const Clipboard = Object.assign(ClipboardComponent, {
  WithIcon: ClipboardWithIcon,
  WithIconText: ClipboardWithIconText,
});
