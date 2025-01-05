"use client";

import type { ComponentProps, FC } from "react";

export type BannerComponentProps = ComponentProps<"div">;

export const Banner: FC<BannerComponentProps> = ({ children, ...props }) => {
  return (
    <div data-testid="flowbite-banner" role="banner" tabIndex={-1} {...props}>
      {children}
    </div>
  );
};

Banner.displayName = "Banner";
