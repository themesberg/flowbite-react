import type { PropsWithChildren } from "react";

export function TextDivider({ children }: PropsWithChildren) {
  return (
    <div className="mt-10 flex items-center gap-6 text-base">
      <hr className="grow border-gray-200 dark:border-gray-700" />
      <span>{children}</span>
      <hr className="grow border-gray-200 dark:border-gray-700" />
    </div>
  );
}
