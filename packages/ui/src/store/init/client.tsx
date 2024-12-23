"use client";

import type { StoreInitProps } from ".";
import { setStore } from "..";

export function StoreInitClient({ cleanup, ...props }: StoreInitProps) {
  setStore(props, { cleanup });

  return null;
}

StoreInitClient.displayName = "StoreInitClient";
