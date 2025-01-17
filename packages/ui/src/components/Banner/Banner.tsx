"use client";

import { forwardRef, type ComponentProps } from "react";

export type BannerProps = ComponentProps<"div">;

export const Banner = forwardRef<HTMLDivElement, BannerProps>(({ children, ...props }, ref) => (
  <div ref={ref} data-testid="flowbite-banner" role="banner" tabIndex={-1} {...props}>
    {children}
  </div>
));

Banner.displayName = "Banner";
