import { FC, PropsWithChildren } from 'react';

export type FooterBrandProps = PropsWithChildren<{
  href?: string;
  src?: string;
  alt?: string;
  name?: string;
}>;

export const FooterBrand: FC<FooterBrandProps> = ({ children, href, src, alt, name }) => (
  <a href={href} className="mb-4 flex items-center sm:mb-0">
    <img src={src} className="mr-3 h-8" alt={alt} />
    <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">{name}</span>
    {children}
  </a>
);
