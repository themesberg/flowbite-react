import { PropsWithChildren, FC } from 'react';

interface SidebarLogoProps extends PropsWithChildren<Record<string, unknown>> {
  href: string;
  img: string;
  imgAlt?: string;
}

export const SidebarLogo: FC<SidebarLogoProps> = ({ children, href, img, imgAlt = '' }) => {
  return (
    <a href={href} className="mb-5 flex items-center pl-2.5">
      <img alt={imgAlt} className="mr-3 h-6 sm:h-7" src={img} />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{children}</span>
    </a>
  );
};
