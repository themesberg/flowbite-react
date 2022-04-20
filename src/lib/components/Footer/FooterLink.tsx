import { FC, PropsWithChildren } from 'react';

export type FooterLinkProps = PropsWithChildren<{
  href?: string;
}>;

export const FooterLink: FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <li>
      <a href={href} className="mr-4 hover:underline md:mr-6 ">
        {children}
      </a>
    </li>
  );
};
