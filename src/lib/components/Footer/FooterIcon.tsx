import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

export type FooterIconProps = PropsWithChildren<{
  href?: string;
  className?: string;
  icon: FC<ComponentProps<'svg'>>;
  ariaLabel?: string;
}>;

export const FooterIcon: FC<FooterIconProps> = ({ href, ariaLabel, className, icon: Icon }) => {
  return (
    <>
      {href ? (
        <a href={href} aria-label={ariaLabel} className={classNames('text-gray-500 dark:hover:text-white', className)}>
          <Icon className="h-5 w-5" />
        </a>
      ) : (
        <Icon className="h-5 w-5" />
      )}
    </>
  );
};
