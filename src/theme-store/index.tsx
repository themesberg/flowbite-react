import { CustomFlowbiteTheme, FlowbiteTheme } from '../components';
import { mergeDeep } from '../helpers/merge-deep';
import { theme as defaultTheme } from '../theme';

const _theme: { current: FlowbiteTheme } = { current: { ...defaultTheme } };

export function createTheme(theme?: CustomFlowbiteTheme) {
  if (theme) _theme.current = mergeDeep(defaultTheme, theme);
}

export function getTheme(): FlowbiteTheme {
  return { ..._theme.current };
}
