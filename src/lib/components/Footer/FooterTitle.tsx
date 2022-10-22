import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterTitleProps extends PropsWithChildren<ComponentProps<'h2'>> {
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({ title, className }) => {
  const theme = useTheme().theme.footer.title;

  return (
    <h2 data-testid="flowbite-footer-title" className={classNames(theme.base, className)}>
      {title}
    </h2>
  );
};
