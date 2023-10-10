'use client';

import { useThemeMode, type ThemeMode } from '~/src/helpers/use-theme-mode';
import { setThemeMode } from '..';

interface Props {
  mode?: ThemeMode;
}

export function ThemeModeInit({ mode }: Props) {
  if (mode) setThemeMode(mode);

  useThemeMode();

  return null;
}
