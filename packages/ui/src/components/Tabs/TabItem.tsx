"use client";

import { forwardRef, type ComponentProps, type FC, type ReactNode } from "react";

export interface TabItemProps extends Omit<ComponentProps<"div">, "title"> {
  active?: boolean;
  disabled?: boolean;
  icon?: FC<ComponentProps<"svg">>;
  title: ReactNode;
}

export const TabItem = forwardRef<HTMLDivElement, TabItemProps>(({ children, className }, ref) => (
  <div ref={ref} className={className}>
    {children}
  </div>
));

TabItem.displayName = "TabItem";
