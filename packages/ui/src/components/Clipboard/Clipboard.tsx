"use client";

import { forwardRef, useState, type ComponentProps, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";
import { Tooltip } from "../Tooltip";
import { ClipboardWithIcon } from "./ClipboardWithIcon";
import type { FlowbiteClipboardWithIconTheme } from "./ClipboardWithIcon";
import { ClipboardWithIconText } from "./ClipboardWithIconText";
import type { FlowbiteClipboardWithIconTextTheme } from "./ClipboardWithIconText";

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
  theme?: DeepPartial<FlowbiteClipboardTheme>;
}

const ClipboardComponent = forwardRef<HTMLButtonElement, ClipboardProps>(
  ({ className, valueToCopy, label, theme: customTheme = {}, ...rest }, ref) => {
    const [isJustCopied, setIsJustCopied] = useState(false);

    const theme = mergeDeep(getTheme().clipboard.button, customTheme);

    const copyToClipboard = () => {
      setIsJustCopied(true);
      navigator?.clipboard?.writeText(valueToCopy);
      setTimeout(() => setIsJustCopied(false), 4000);
    };

    return (
      <Tooltip content={isJustCopied ? "Copied" : "Copy to clipboard"} className="[&_*]:cursor-pointer">
        <button className={twMerge(theme.base, className)} onClick={copyToClipboard} {...rest} ref={ref}>
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
