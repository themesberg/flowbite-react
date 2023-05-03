

import type { NextPage } from 'next';
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <section className="overflow-hidden mx-auto max-w-8xl flex flex-col pt-6 sm:pt-8 lg:pt-16 pb-6 sm:pb-8 lg:pb-24 px-4 lg:px-20">
      <div className="flex flex-col gap-20">
        <div className="flex items-center gap-10">
          <div className="flex flex-col justify-start gap-10">
            <div className="flex flex-col gap-4 lg:gap-6 text-left">
              <h1 className="text-4xl lg:text-6xl leading-none font-extrabold text-gray-900 dark:text-white max-w-xl">
                <span className="xl:inline">Speed up your web development with</span>
                <span className="text-primary-700 dark:text-primary-700 xl:inline ml-2">Flowbite React</span>
              </h1>
              <p className="text-lg lg:text-xl leading-normal text-gray-500 dark:text-gray-400 max-w-xl">
                Flowbite React is an official Flowbite component library for React. All interactivities are
                handled by React.
              </p>
              <div className="mt-4 md:mt-5 sm:flex justify-center sm:justify-start">
                <div className="flex flex-row mx-0 gap-4 sm:gap-6 items-center max-w-2xl">
                  {/* <CopyCliboardInput /> */}
                  {/* <Button
                    size="lg"
                    className="gap-2 max-w-sm md:w-fit whitespace-nowrap hover:bg-primary-800"
                    href="/docs/pages/quickstart"
                    color="primary">
                    Get started <ArrowRight />
                  </Button> */}
                </div>
              </div>
            </div>
          </div>

          <div className="p-0 hidden xl:block">
            <div className="relative dark:hidden">
              <img className="max-w-2xl" src="/images/gallery.png" alt="Header" />
            </div>
            <div className="hidden relative dark:block">
              <img className="max-w-2xl" src="/images/gallery-dark.png" alt="Header" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
