"use client";

import { TextInput, Tooltip } from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import { HiClipboardCopy } from "react-icons/hi";

interface Props {
  value: string;
}

export const CopyPackageInput: FC<Props> = ({ value }) => {
  const [isJustCopied, setJustCopied] = useState(false);

  const copyToClipboard = () => {
    setJustCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => setJustCopied(false), 2000);
  };

  return (
    <Tooltip content={isJustCopied ? "Copied!" : "Copy to clipboard"} className="[&_*]:cursor-pointer">
      <TextInput
        onClick={copyToClipboard}
        placeholder={value}
        readOnly
        rightIcon={HiClipboardCopy}
        sizing="md"
        theme={{
          base: "group flex",
          field: {
            input: {
              base: "block w-full cursor-pointer border",
              sizes: {
                md: "p-3.5 pr-11 text-sm",
              },
            },
            rightIcon: {
              svg: "size-5 text-gray-500 group-hover:text-primary-700 dark:text-gray-400",
            },
          },
        }}
      />
    </Tooltip>
  );
};
