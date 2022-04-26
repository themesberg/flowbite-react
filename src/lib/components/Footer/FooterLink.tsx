import { FC, PropsWithChildren } from 'react';

export type FooterLinkProps = PropsWithChildren<{
  href?: string;
  className?: string;
}>;

export const FooterLink: FC<FooterLinkProps> = ({ href, children, className }) => {
  return (
    <li className={className}>
      <a href={href} className="mr-4 hover:underline md:mr-6 ">
        {children}
      </a>
    </li>
  );
};
