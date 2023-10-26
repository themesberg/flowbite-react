import Link from 'next/link';
import type { ComponentProps, FC, PropsWithChildren } from 'react';

interface ComponentCardProps extends PropsWithChildren, ComponentProps<'div'> {
  link: string;
  name?: string;
  image?: string;
  imageDark?: string;
  classes: string;
}

export const ComponentCard: FC<ComponentCardProps> = ({ link, name, image, imageDark, classes }) => {
  return (
    <Link
      href={link}
      className="dark:hover:shadow-lg-light flex flex-col rounded-lg border border-gray-200 bg-white p-0 text-gray-500 shadow-none hover:bg-gray-100 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
    >
      <div className="flex items-center justify-between rounded-t-md border-b border-gray-200 bg-gray-50 px-5 py-2.5 dark:border-gray-700 dark:bg-gray-700">
        <span className="text-base font-medium text-gray-900 dark:text-white">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
        </span>
      </div>
      <div className="flex h-52 items-center justify-center">
        <div className={`relative dark:hidden ${classes}`}>
          <img src={image} alt={`${name} component thumbnail`} />
        </div>
        <div className={`relative hidden dark:block ${classes}`}>
          <img src={imageDark} alt={`${name} dark mode component thumbnail`} />
        </div>
      </div>
    </Link>
  );
};
