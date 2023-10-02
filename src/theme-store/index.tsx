import type { CustomFlowbiteTheme, FlowbiteTheme } from '../components/Flowbite';
import { cloneDeep } from '../helpers/clone-deep';
import { mergeDeep } from '../helpers/merge-deep';
import { theme as defaultTheme } from '../theme';

const _theme: { current: FlowbiteTheme } = { current: cloneDeep(defaultTheme) };

export function createTheme(theme?: CustomFlowbiteTheme) {
  if (theme) _theme.current = mergeDeep(defaultTheme, theme);
}

export function getTheme(): FlowbiteTheme {
  return cloneDeep(_theme.current);
}
