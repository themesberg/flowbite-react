import type { CustomFlowbiteTheme } from '~/src/components/Flowbite';
import { createTheme } from '..';

interface Props {
  theme?: CustomFlowbiteTheme;
}

export function ServerInit({ theme }: Props) {
  createTheme(theme);

  return null;
}
