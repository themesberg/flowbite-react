import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterLinkGroupProps extends PropsWithChildren<Omit<ComponentProps<'ul'>, 'className'>> {
  col?: boolean;
}

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({ children, col = false }) => {
  const theme = useTheme().theme.footer.groupLink;

  return (
    <ul data-testid="footer-groupLink" className={classNames(theme.base, col && theme.col)}>
      {children}
    </ul>
  );
};
