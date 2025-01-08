"use client";

import type { MouseEventHandler } from "react";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";

export type BannerCollapseButtonProps = ButtonProps;

export function BannerCollapseButton({ children, ...props }: BannerCollapseButtonProps) {
  const onClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const collapseButton = event.target as HTMLButtonElement;
    const parentBanner = collapseButton.closest('[role="banner"]');

    parentBanner?.remove();
  };

  return (
    <Button onClick={onClick} {...props}>
      {children}
    </Button>
  );
}

BannerCollapseButton.displayName = "BannerCollapseButton";
