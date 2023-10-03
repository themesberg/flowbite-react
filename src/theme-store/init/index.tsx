import type { CustomFlowbiteTheme } from '~/src/components/Flowbite';
import type { ThemeMode } from '~/src/helpers/use-theme-mode';
import { ThemeClientInit } from './client';
import { ThemeModeInit } from './mode';
import { ThemeServerInit } from './server';

interface Props {
  mode?: ThemeMode;
  theme?: CustomFlowbiteTheme;
}

export function ThemeInit({ mode, theme }: Props) {
  return (
    <>
      <ThemeModeInit mode={mode} />
      <ThemeServerInit theme={theme} />
      <ThemeClientInit theme={theme} />
    </>
  );
}
