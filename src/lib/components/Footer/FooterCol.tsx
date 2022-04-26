import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export type FooterColBoxProps = PropsWithChildren<{
  className?: string;
  title?: string;
}>;

export const FooterCol: FC<FooterColBoxProps> = ({ children, className, title }) => {
  return (
    <div className="flex-col">
      <h2 className={classNames('mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white', className)}>
        {title}
      </h2>
      {children}
    </div>
  );
};
