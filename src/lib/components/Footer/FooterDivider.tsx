import classNames from 'classnames';
import type { ComponentProps, FC } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

type FooterDividerProps = ComponentProps<'hr'>;

export const FooterDivider: FC<FooterDividerProps> = ({ className }) => {
  const theme = useTheme().theme.footer.divider;

  return <hr data-testid="footer-divider" className={classNames(theme.base, className)} />;
};
