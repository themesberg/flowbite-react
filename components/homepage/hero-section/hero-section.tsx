import Image from 'next/image';
import type { FC } from 'react';
import { HiOutlineArrowRight } from 'react-icons/hi';
import { Button } from '~/src';
import { CopyPackageInput } from './copy-package-input';
import Link from 'next/link';

export const HeroSection: FC = () => {
  return (
    <section className="mx-auto flex max-w-8xl flex-col overflow-hidden px-4 pb-6 pt-6 sm:pb-8 sm:pt-8 lg:px-20 lg:pb-24 lg:pt-16">
      <div className="flex flex-col gap-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex flex-col justify-start gap-4 xl:max-w-[676px]">
            <div className="flex flex-col gap-4 text-left lg:gap-6">
              <h1 className="max-w-3xl text-4xl font-extrabold leading-none text-gray-900 dark:text-white lg:text-5xl xl:text-6xl">
                <span className="xl:inline">Build modern web applications with</span>
                <span className="ml-2 text-cyan-700 dark:text-cyan-700 xl:inline">Flowbite React</span>
              </h1>
              <p className="max-w-3xl text-lg leading-normal text-gray-500 dark:text-gray-400 lg:text-xl">
                Flowbite React is an open-source UI component library built on top of Tailwind CSS with React components
                and based on the Flowbite Design System.
              </p>
              <div className="mt-2 grid grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 sm:gap-6 [&>div:first-child]:w-full">
                <CopyPackageInput value="npm i flowbite-react" />
                <div className="justify-center sm:flex sm:justify-start">
                  <div className="mx-0 flex flex-row items-center gap-4 sm:gap-6">
                    <Button
                      as={Link}
                      size="lg"
                      href="/docs/getting-started/introduction"
                      className="w-full whitespace-nowrap"
                    >
                      Get started <HiOutlineArrowRight className="ml-2 mt-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden items-center p-0 md:flex">
            <div className="relative dark:hidden">
              <Image className="h-auto max-w-full" src="/images/gallery.png" alt="Header" width={620} height={416} />
            </div>
            <div className="relative hidden dark:block">
              <Image
                className="h-auto max-w-full"
                src="/images/gallery-dark.png"
                alt="Header"
                width={620}
                height={416}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
