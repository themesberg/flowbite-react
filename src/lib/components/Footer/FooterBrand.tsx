import type { FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type FooterBrandProps = PropsWithChildren<{
  href?: string;
  src: string;
  alt?: string;
  name?: string;
}>;

export const FooterBrand: FC<FooterBrandProps> = ({ children, href, src, alt, name }) => {
  const theme = useTheme().theme.footer.brand;

  return (
    <>
      {href ? (
        <a href={href} className={theme.base}>
          <img src={src} className={theme.img} alt={alt} />
          <span className={theme.span}>{name}</span>
          {children}
        </a>
      ) : (
        <img src={src} className={theme.img} alt={alt} />
      )}
    </>
  );
};
