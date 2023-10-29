'use client';

import { setTheme } from '..';
import type { CustomFlowbiteTheme } from '../../components/Flowbite';

interface Props {
  theme?: CustomFlowbiteTheme;
}

export function ThemeClientInit({ theme }: Props) {
  setTheme(theme);

  return null;
}
