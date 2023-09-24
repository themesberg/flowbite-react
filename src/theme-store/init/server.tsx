import { FlowbiteTheme } from '~/src/components';
import { createTheme } from '..';

interface Props {
  theme?: FlowbiteTheme;
}

export function ServerInit({ theme }: Props) {
  createTheme(theme);

  return null;
}
