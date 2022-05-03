import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export type CopyrightProps = PropsWithChildren<{
  href?: string;
  by?: any;
  year?: number;
  className?: string;
}>;

export const FooterCopyright: FC<CopyrightProps> = ({ href, by, year, className }) => {
  return (
    <span className={classNames('text-sm  text-gray-500 dark:text-gray-400 sm:text-center', className)}>
      © {year}
      <a href={href} className="ml-1 hover:underline">
        {by}
      </a>
      . All Rights Reserved.
    </span>
  );
};
