"use client";

import type { ComponentProps, FC, ReactNode } from "react";

export interface TabItemProps extends Omit<ComponentProps<"div">, "title"> {
  active?: boolean;
  disabled?: boolean;
  icon?: FC<ComponentProps<"svg">>;
  title: ReactNode;
}

export function TabItem({ children, className }: TabItemProps) {
  return <div className={className}>{children}</div>;
}

TabItem.displayName = "TabItem";
