import type { ElementProps, Placement, ReferenceType, UseRoleProps } from "@floating-ui/react";
import {
  autoUpdate,
  safePolygon,
  useClick,
  useDismiss,
  useFloating,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import type { Dispatch, RefObject, SetStateAction } from "react";
import { getMiddleware, getPlacement } from "../components/Floating/helpers";

export type UseBaseFloatingParams = {
  placement?: "auto" | Placement;
  open: boolean;
  arrowRef?: RefObject<HTMLDivElement>;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const useBaseFloating = <Type extends ReferenceType>({
  open,
  arrowRef,
  placement = "top",
  setOpen,
}: UseBaseFloatingParams) => {
  return useFloating<Type>({
    placement: getPlacement({ placement }),
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: getMiddleware({ placement, arrowRef }),
  });
};

export type UseFloatingInteractionsParams = {
  context: ReturnType<typeof useFloating>["context"];
  trigger?: "hover" | "click";
  role?: UseRoleProps["role"];
  interactions?: ElementProps[];
};

export const useFloatingInteractions = ({
  context,
  trigger,
  role = "tooltip",
  interactions = [],
}: UseFloatingInteractionsParams) => {
  return useInteractions([
    useClick(context, { enabled: trigger === "click" }),
    useHover(context, {
      enabled: trigger === "hover",
      handleClose: safePolygon(),
    }),
    useDismiss(context),
    useRole(context, { role }),
    ...interactions,
  ]);
};
