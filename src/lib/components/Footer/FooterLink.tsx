import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbiteFooterLinkTheme {
  base: string;
  href: string;
}

export interface FooterLinkProps extends PropsWithChildren<ComponentProps<'a'>> {
  href: string;
  theme?: DeepPartial<FlowbiteFooterLinkTheme>;
}

export const FooterLink: FC<FooterLinkProps> = ({ children, className, href, theme: customTheme = {} }) => {
  const theme = mergeDeep(useTheme().theme.footer.groupLink.link, customTheme);

  return (
    <li className={classNames(theme.base, className)}>
      <a href={href} className={theme.href}>
        {children}
      </a>
    </li>
  );
};
