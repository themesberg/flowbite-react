import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterLinkGroupProps extends PropsWithChildren<ComponentProps<'ul'>> {
  col?: boolean;
}

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({ children, className, col = false }) => {
  const theme = useTheme().theme.footer.groupLink;

  return (
    <ul data-testid="footer-groupLink" className={classNames(theme.base, col && theme.col, className)}>
      {children}
    </ul>
  );
};
