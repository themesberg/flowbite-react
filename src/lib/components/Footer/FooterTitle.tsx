import type { FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type FooterTitleProps = PropsWithChildren<{
  title: string;
}>;

export const FooterTitle: FC<FooterTitleProps> = ({ title }) => {
  const theme = useTheme().theme.footer.title;
  return (
    <h2 data-testid="footer-title" className={theme.base}>
      {title}
    </h2>
  );
};
