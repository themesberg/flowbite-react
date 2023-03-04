import type { FC } from 'react';

const HomePage: FC = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-4 lg:p-12 lg:text-center">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white lg:text-center lg:text-4xl lg:font-extrabold lg:leading-snug 2xl:px-48">
        Tailwind CSS Components
      </h2>
      <p className="mb-10 text-lg font-normal text-gray-500 dark:text-gray-400 lg:mb-16 lg:text-center lg:text-xl xl:px-64">
        Explore the whole collection of open-source web components and interactive elements built with the utility
        classes from Tailwind CSS
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"></div>
    </div>
  );
};

export default HomePage;
