"use client";

import { forwardRef } from "react";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";

export type BannerCollapseButtonProps = ButtonProps;

export const BannerCollapseButton = forwardRef<HTMLButtonElement, BannerCollapseButtonProps>(
  ({ children, ...props }, ref) => {
    function onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      const collapseButton = e.target as HTMLButtonElement;
      const parentBanner = collapseButton.closest('[role="banner"]');

      parentBanner?.remove();
    }

    return (
      <Button ref={ref} onClick={onClick} {...props}>
        {children}
      </Button>
    );
  },
);

BannerCollapseButton.displayName = "BannerCollapseButton";
