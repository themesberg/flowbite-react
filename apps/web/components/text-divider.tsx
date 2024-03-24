import type { PropsWithChildren } from "react";

export function TextDivider({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center gap-6 text-base">
      <hr className="grow" />
      <span>{children}</span>
      <hr className="grow" />
    </div>
  );
}
