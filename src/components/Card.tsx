import { FC } from 'react';
import classNames from 'classnames';

export type CardProps = {
  className?: string;
  horizontal?: boolean;
  imgSrc?: string;
};

export const Card: FC<CardProps> = ({ children, className, horizontal, imgSrc }) => {
  return (
    <div
      className={classNames(
        'flex bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700',
        {
          'flex-col': !horizontal,
          'flex-col md:flex-row md:max-w-xl': horizontal,
        },
        className,
      )}
    >
      {imgSrc && (
        <img
          className={classNames({
            'rounded-t-lg': !horizontal,
            'rounded-t-lg h-96 w-full object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg': horizontal,
          })}
          src={imgSrc}
          alt=""
        />
      )}
      <div className="flex flex-col justify-center gap-4 p-6 h-full">{children}</div>
    </div>
  );
};
