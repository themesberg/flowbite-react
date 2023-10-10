'use client';

import type { CustomFlowbiteTheme } from '~/src/components/Flowbite';
import { setTheme } from '..';

interface Props {
  theme?: CustomFlowbiteTheme;
}

export function ThemeClientInit({ theme }: Props) {
  setTheme(theme);

  return null;
}
