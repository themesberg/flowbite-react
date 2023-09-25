import { CustomFlowbiteTheme } from '~/src/components';
import { createTheme } from '..';

interface Props {
  theme?: CustomFlowbiteTheme;
}

export function ServerInit({ theme }: Props) {
  createTheme(theme);

  return null;
}
