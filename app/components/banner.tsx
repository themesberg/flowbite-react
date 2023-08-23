import type { FC } from 'react';

export const Banner: FC = () => {
  return (
    <div
      tabindex="-1"
      className="z-50 hidden w-full justify-center border border-b border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-600 dark:bg-gray-700 lg:flex lg:py-4"
    >
      <div className="items-center md:flex">
        <p className="text-sm font-medium text-gray-900 dark:text-white md:my-0">
          <span className="mr-2 hidden rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 md:inline">
            Community
          </span>
          We need your feedback and help to support Server Components with Next.js.
          <a
            className="ml-2 inline-flex items-center text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500 md:ml-2"
            href="https://github.com/themesberg/flowbite-react/discussions/923"
            target="_blank"
            rel="nofollow noreferred noopener"
          >
            Check discussion on GitHub
            <svg
              className="ml-1.5 h-3 w-3 text-cyan-600 dark:text-cyan-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              ></path>
            </svg>
          </a>
        </p>
      </div>
    </div>
  );
};
