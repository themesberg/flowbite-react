import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterTitleProps extends Omit<PropsWithChildren<ComponentProps<'h2'>>, 'className'> {
  title: string;
}

export const FooterTitle: FC<FooterTitleProps> = ({ title }) => {
  const theme = useTheme().theme.footer.title;

  return (
    <h2 data-testid="flowbite-footer-title" className={theme.base}>
      {title}
    </h2>
  );
};
