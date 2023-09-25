'use client';

import { CustomFlowbiteTheme } from '~/src/components';
import { createTheme } from '..';

interface Props {
  theme?: CustomFlowbiteTheme;
}

export function ClientInit({ theme }: Props) {
  createTheme(theme);

  return null;
}