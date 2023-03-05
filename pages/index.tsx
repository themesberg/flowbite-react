import type { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-4 lg:p-12 lg:text-center">
      <ReactAdminDashboardAlert />
      <h2 className="mb-6 text-xl font-bold text-gray-900 dark:text-white lg:text-center lg:text-6xl lg:font-extrabold lg:leading-tight 2xl:px-48">
        Build websites even faster with components on top of Tailwind CSS and React
      </h2>
      <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:mb-16 lg:text-center lg:text-2xl xl:px-64">
        Start developing with an open-source library of over 100+ UI components built in React with the utility classes
        from Tailwind CSS and designed in Figma.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"></div>
    </div>
  );
};

const ReactAdminDashboardAlert: FC = function () {
  return (
    <a
      href="https://flowbite.com/react-admin-dashboard-pro/preview/"
      className="mb-5 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white"
    >
      <span className="mr-3 rounded-full bg-blue-600 px-4 py-1.5 text-xs text-white">New</span>
      <span className="mr-2 text-sm font-medium">
        We launched Flowbite React Admin Dashboard Pro! See what&rsquo;s new
      </span>
      <svg aria-hidden fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-5 w-5">
        <path
          clipRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          fillRule="evenodd"
        />
      </svg>
    </a>
  );
};

export default HomePage;
