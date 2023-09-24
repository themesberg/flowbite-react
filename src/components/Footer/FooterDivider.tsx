import type { ComponentProps, FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { getTheme } from '~/src/theme-store';
import type { DeepPartial } from '../../';
import { mergeDeep } from '../../helpers/merge-deep';

export interface FlowbiteFooterDividerTheme {
  base: string;
}

export interface FooterDividerProps extends ComponentProps<'hr'> {
  theme?: DeepPartial<FlowbiteFooterDividerTheme>;
}

export const FooterDivider: FC<FooterDividerProps> = ({ className, theme: customTheme = {}, ...props }) => {
  const theme = mergeDeep(getTheme().footer.divider, customTheme);

  return <hr data-testid="footer-divider" className={twMerge(theme.base, className)} {...props} />;
};
