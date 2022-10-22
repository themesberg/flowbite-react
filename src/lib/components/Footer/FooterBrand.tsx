import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';
export interface FooterBrandProps extends PropsWithChildren<ComponentProps<'div'>> {
  alt?: string;
  href?: string;
  name?: string;
  src: string;
}

export const FooterBrand: FC<FooterBrandProps> = ({ alt, className, children, href, name, src }) => {
  const theme = useTheme().theme.footer.brand;

  return (
    <div>
      {href ? (
        <a data-testid="flowbite-footer-brand" href={href} className={classNames(theme.base, className)}>
          <img alt={alt} src={src} className={theme.img} />
          <span data-testid="flowbite-footer-brand-span" className={theme.span}>
            {name}
          </span>
          {children}
        </a>
      ) : (
        <img alt={alt} data-testid="flowbite-footer-brand" src={src} className={theme.img} />
      )}
    </div>
  );
};
