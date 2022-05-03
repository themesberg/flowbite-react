import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export type FooterLinkProps = PropsWithChildren<{
  href: string;
  className?: string;
  ariaLabel?: string;
}>;

export const FooterLink: FC<FooterLinkProps> = ({ href, children, ariaLabel, className }) => {
  return (
    <li className={classNames('mr-4 last:mr-0 md:mr-6', className)}>
      <a href={href} aria-label={ariaLabel} className="hover:underline">
        {children}
      </a>
    </li>
  );
};
