import type { Dispatch, SetStateAction } from "react";

export const copyToClipboard = (valueToCopy: string, setIsJustCopied: Dispatch<SetStateAction<boolean>>) => {
  setIsJustCopied(true);
  navigator?.clipboard?.writeText(valueToCopy);
  setTimeout(() => setIsJustCopied(false), 4000);
};
