import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';

export type CopyrightProps = PropsWithChildren<{
  href?: string;
  by: string;
  year?: number;
  className?: string;
}>;

export const FooterCopyright: FC<CopyrightProps> = ({ href, by, year, className }) => {
  return (
    <>
      <span className={classNames('text-sm text-gray-500 dark:text-gray-400 sm:text-center', className)}>
        © {year}
        {href ? (
          <a href={href} className="ml-1 hover:underline">
            {by}
          </a>
        ) : (
          <span className="ml-1">{by}</span>
        )}
        . All Rights Reserved.
      </span>
    </>
  );
};
