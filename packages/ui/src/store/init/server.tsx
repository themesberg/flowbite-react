import type { StoreInitProps } from ".";
import { setStore } from "..";

export function StoreInitServer({ cleanup, ...props }: StoreInitProps) {
  setStore(props, { cleanup });

  return null;
}

StoreInitServer.displayName = "StoreInitServer";
