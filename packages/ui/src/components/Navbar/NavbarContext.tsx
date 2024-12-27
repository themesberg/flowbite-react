"use client";

import { createContext, useContext } from "react";
import type { ThemingProps } from "../../types";
import type { NavbarTheme } from "./Navbar";

interface NavbarContext extends ThemingProps<NavbarTheme> {
  isOpen?: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const NavbarContext = createContext<NavbarContext | undefined>(undefined);

export function useNavbarContext(): NavbarContext {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error("useNavBarContext should be used within the NavbarContext provider!");
  }

  return context;
}
