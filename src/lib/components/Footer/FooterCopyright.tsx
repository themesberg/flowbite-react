import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteFooterCopyrightTheme {
  base: string;
  href: string;
  span: string;
}

export interface CopyrightProps extends PropsWithChildren<ComponentProps<'span'>> {
  href?: string;
  by: string;
  year?: number;
  theme?: DeepPartial<FlowbiteFooterCopyrightTheme>;
}

export const FooterCopyright: FC<CopyrightProps> = ({ href, by, year, className, theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.footer.copyright, customTheme);

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
