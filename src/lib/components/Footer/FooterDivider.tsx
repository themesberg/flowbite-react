import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteFooterDividerTheme {
  base: string;
}

export interface FooterDividerProps extends ComponentProps<'hr'> {
  theme?: DeepPartial<FlowbiteFooterDividerTheme>;
}

export const FooterDivider: FC<FooterDividerProps> = ({ className, theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.footer.divider, customTheme);

  return <hr data-testid="footer-divider" className={classNames(theme.base, className)} />;
};
