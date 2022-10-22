import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface CopyrightProps extends PropsWithChildren<ComponentProps<'span'>> {
  href?: string;
  by: string;
  year?: number;
}

export const FooterCopyright: FC<CopyrightProps> = ({ href, by, year, className }) => {
  const theme = useTheme().theme.footer.copyright;

  return (
    <div>
      <span className={classNames(theme.base, className)} data-testid="flowbite-footer-copyright">
        © {year}
        {href ? (
          <a href={href} className={theme.href}>
            {by}
          </a>
        ) : (
          <span data-testid="flowbite-footer-copyright-span" className={theme.span}>
            {by}
          </span>
        )}
      </span>
    </div>
  );
};
