"use client";

import { forwardRef, useState, type ComponentProps, type ReactNode } from "react";
import { resolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { useThemeProvider } from "../../theme/provider";
import type { DeepPartial, Unstyled } from "../../types";
import { Tooltip } from "../Tooltip";
import type { FlowbiteClipboardWithIconTheme } from "./ClipboardWithIcon";
import { ClipboardWithIcon } from "./ClipboardWithIcon";
import type { FlowbiteClipboardWithIconTextTheme } from "./ClipboardWithIconText";
import { ClipboardWithIconText } from "./ClipboardWithIconText";
import { copyToClipboard } from "./helpers";
import { clipboardTheme } from "./theme";

export interface FlowbiteClipboardTheme {
  button: {
    base: string;
    label: string;
  };
  withIcon: FlowbiteClipboardWithIconTheme;
  withIconText: FlowbiteClipboardWithIconTextTheme;
}

export interface ClipboardProps extends ComponentProps<"button"> {
  valueToCopy: string;
  label?: ReactNode;
  theme?: DeepPartial<FlowbiteClipboardTheme["button"]>;
  unstyled?: Unstyled<FlowbiteClipboardTheme["button"]>;
}

const ClipboardComponent = forwardRef<HTMLButtonElement, ClipboardProps>(
  ({ className, valueToCopy, label, theme: customTheme, unstyled, ...rest }, ref) => {
    const [isJustCopied, setIsJustCopied] = useState(false);

    const provider = useThemeProvider();
    const theme = resolveTheme([clipboardTheme.button, provider.theme?.clipboard?.button, customTheme], [unstyled]);

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
