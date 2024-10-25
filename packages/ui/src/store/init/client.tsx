"use client";

import type { StoreInitProps } from ".";
import { setStore } from "..";

export function StoreInitClient({ override, ...props }: StoreInitProps) {
  setStore(props, { override });

  return null;
}
