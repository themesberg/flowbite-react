import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface CopyrightProps extends Omit<PropsWithChildren<ComponentProps<'span'>>, 'className'> {
  href?: string;
  by: string;
  year?: number;
}

export const FooterCopyright: FC<CopyrightProps> = ({ href, by, year }) => {
  const theme = useTheme().theme.footer.copyright;

  return (
    <div>
      <span className={theme.base} data-testid="flowbite-footer-copyright">
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
