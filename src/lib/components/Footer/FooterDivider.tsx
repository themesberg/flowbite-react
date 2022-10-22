import classNames from 'classnames';
import type { FC } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

type FooterDividerProps = {
  className?: string;
};

export const FooterDivider: FC<FooterDividerProps> = ({ className }) => {
  const theme = useTheme().theme.footer.divider;

  return <hr data-testid="footer-divider" className={classNames(theme.base, className)} />;
};
