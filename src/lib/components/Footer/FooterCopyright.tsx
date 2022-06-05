import { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface CopyrightProps extends PropsWithChildren<ComponentProps<'span'>> {
  href?: string;
  by: string;
  year?: number;
}

export const FooterCopyright: FC<CopyrightProps> = ({ href, by, year }) => {
  const theme = useTheme().theme.footer.copyright;

  return (
    <>
      <span className={theme.base}>
        © {year}
        {href ? (
          <a href={href} className={theme.href}>
            {by}
          </a>
        ) : (
          <span className={theme.span}>{by}</span>
        )}
        . All Rights Reserved.
      </span>
    </>
  );
};
