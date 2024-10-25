import { StoreProps } from "..";
import { StoreInitClient } from "./client";
import { StoreInitServer } from "./server";

export interface StoreInitProps extends StoreProps {
  override?: boolean;
}

export function StoreInit(props: StoreInitProps) {
  return (
    <>
      <StoreInitServer {...props} />
      <StoreInitClient {...props} />
    </>
  );
}
