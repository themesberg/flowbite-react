import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';
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
  const theme = mergeDeep(useTheme().theme.footer.groupLink, customTheme);

  return (
    <ul data-testid="footer-groupLink" className={classNames(theme.base, col && theme.col, className)} {...props}>
      {children}
    </ul>
  );
};
