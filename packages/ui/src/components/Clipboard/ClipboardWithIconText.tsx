import { forwardRef, useState, type ComponentProps, type FC } from "react";
import { FaCheck, FaClipboardList } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

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
}

export const ClipboardWithIconText = forwardRef<HTMLButtonElement, ClipboardWithIconTextProps>(
  ({ valueToCopy, icon: Icon = FaClipboardList, label = "Copy", theme: customTheme = {}, className, ...rest }, ref) => {
    const [isJustCopied, setIsJustCopied] = useState(false);

    const theme = mergeDeep(getTheme().clipboard.withIconText, customTheme);

    const copyToClipboard = () => {
      setIsJustCopied(true);
      navigator?.clipboard?.writeText(valueToCopy);
      setTimeout(() => setIsJustCopied(false), 4000);
    };

    return (
      <button className={twMerge(theme.base, className)} onClick={copyToClipboard} {...rest} ref={ref}>
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
