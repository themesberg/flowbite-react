import type { StoreInitProps } from ".";
import { setStore } from "..";

export function StoreInitServer({ override, ...props }: StoreInitProps) {
  setStore(props, { override });

  return null;
}
