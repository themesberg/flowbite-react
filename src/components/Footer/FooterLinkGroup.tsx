import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import { mergeDeep } from '../../helpers/merge-deep';
import { getTheme } from '../../theme-store';
import type { DeepPartial } from '../../types';
import type { FlowbiteFooterLinkTheme } from './FooterLink';

export interface FlowbiteFooterLinkGroupTheme {
  base: string;
  link: FlowbiteFooterLinkTheme;
  col: string;
}

export interface FooterLinkGroupProps extends PropsWithChildren, ComponentProps<'ul'> {
  col?: boolean;
  theme?: DeepPartial<FlowbiteFooterLinkGroupTheme>;
}

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({
  children,
  className,
  col = false,
  theme: customTheme = {},
  ...props
}) => {
  const theme = mergeDeep(getTheme().footer.groupLink, customTheme);

  return (
    <ul data-testid="footer-groupLink" className={twMerge(theme.base, col && theme.col, className)} {...props}>
      {children}
    </ul>
  );
};
