'use client';

import { FlowbiteTheme } from '~/src/components';
import { createTheme } from '..';

interface Props {
  theme?: FlowbiteTheme;
}

export function ClientInit({ theme }: Props) {
  createTheme(theme);

  return null;
}
