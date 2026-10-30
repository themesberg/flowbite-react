"use client";

import { createContext, useContext } from "react";

export interface MegaMenuContextValue {
  /** `id` of the toggle whose dropdown is currently open, if any. */
  openToggleId: string | undefined;
  setOpenToggleId: (id: string | undefined) => void;
}

export const MegaMenuContext = createContext<MegaMenuContextValue | undefined>(undefined);

/**
 * Unlike the other contexts in this library this one does not throw when missing:
 * `<MegaMenuDropdownToggle>` also works inside a plain `<Navbar>`, and losing the
 * "opening one dropdown closes the others" behavior is preferable to crashing.
 */
export function useMegaMenuContext(): MegaMenuContextValue | undefined {
  return useContext(MegaMenuContext);
}
