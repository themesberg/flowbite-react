"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function PreWithCopy(props: React.HTMLAttributes<HTMLPreElement>) {
  const textInput = useRef<HTMLPreElement>(null);
  const [isJustCopied, setJustCopied] = useState(false);

  function handleCopy() {
    if (textInput.current) {
      navigator.clipboard.writeText(textInput.current.textContent || "");
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
    }
  }

  return (
    <div className="group relative">
      <pre ref={textInput} {...props} />
      <button
        className="absolute right-2 top-2 m-0.5 inline-flex h-8 items-center justify-center rounded-lg border border-gray-200 bg-white px-2.5 py-2 text-gray-900 opacity-0 transition-opacity hover:bg-gray-100 group-hover:opacity-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
        aria-label="Copy code to clipboard"
        onClick={handleCopy}
      >
        <span className={twMerge(isJustCopied && "hidden")}>
          <span className="inline-flex items-center">
            <svg
              className="me-1.5 size-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 20"
            >
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"></path>
            </svg>
            <span className="text-xs font-semibold">Copy code</span>
          </span>
        </span>
        <span className={twMerge(isJustCopied ? "block" : "hidden")}>
          <span className="inline-flex items-center">
            <svg
              className="me-1.5 size-3 text-primary-700 dark:text-primary-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 12"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5.917 5.724 10.5 15 1.5"
              />
            </svg>
            <span className="text-xs font-semibold text-primary-700 dark:text-primary-500">Copied</span>
          </span>
        </span>
      </button>
    </div>
  );
}
