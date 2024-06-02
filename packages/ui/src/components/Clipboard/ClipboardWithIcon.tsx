import { forwardRef, useState, type ComponentProps, type FC } from "react";
import { FaCheck, FaClipboardList } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

export interface FlowbiteClipboardWithIconTheme {
  base: string;
  icon: {
    defaultIcon: string;
    successIcon: string;
  };
}

export interface ClipboardWithIconProps extends ComponentProps<"button"> {
  valueToCopy: string;
  icon?: FC<ComponentProps<"svg">>;
  theme?: DeepPartial<FlowbiteClipboardWithIconTheme>;
}

export const ClipboardWithIcon = forwardRef<HTMLButtonElement, ClipboardWithIconProps>(
  ({ valueToCopy, icon: Icon = FaClipboardList, theme: customTheme = {}, className, ...rest }, ref) => {
    const [isJustCopied, setIsJustCopied] = useState(false);

    const theme = mergeDeep(getTheme().clipboard.withIcon, customTheme);

    const copyToClipboard = () => {
      setIsJustCopied(true);
      navigator?.clipboard?.writeText(valueToCopy);
      setTimeout(() => setIsJustCopied(false), 4000);
    };

    return (
      <button className={twMerge(theme.base, className)} onClick={copyToClipboard} {...rest} ref={ref}>
        {isJustCopied ? (
          <FaCheck aria-hidden className={theme.icon.successIcon} />
        ) : (
          <Icon aria-hidden className={theme.icon.defaultIcon} />
        )}
      </button>
    );
  },
);
