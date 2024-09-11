"use client";

import type { FC, MouseEventHandler } from "react";
import type { ButtonProps } from "../Button";
import { Button } from "../Button";

export type BannerCollapseButtonProps = ButtonProps;

export const BannerCollapseButton: FC<BannerCollapseButtonProps> = ({ children, ...props }) => {
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
};

BannerCollapseButton.displayName = "Banner.CollapseButton";
