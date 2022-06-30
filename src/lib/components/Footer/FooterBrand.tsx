import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FooterBrandProps extends Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'> {
  href?: string;
  src: string;
  alt?: string;
  name?: string;
}

export const FooterBrand: FC<FooterBrandProps> = ({ children, href, src, alt, name }) => {
  const theme = useTheme().theme.footer.brand;

  return (
    <div data-testid="footer-brand">
      {href ? (
        <a href={href} className={theme.base}>
          <img src={src} className={theme.img} alt={alt} />
          <span className={theme.span}>{name}</span>
          {children}
        </a>
      ) : (
        <img src={src} className={theme.img} alt={alt} />
      )}
    </div>
  );
};
