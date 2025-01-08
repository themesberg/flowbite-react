"use client";

import type { ComponentProps } from "react";

export type BannerComponentProps = ComponentProps<"div">;

export function Banner({ children, ...props }: BannerComponentProps) {
  return (
    <div data-testid="flowbite-banner" role="banner" tabIndex={-1} {...props}>
      {children}
    </div>
  );
}

Banner.displayName = "Banner";
