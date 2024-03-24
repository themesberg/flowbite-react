import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import { DocSearchInput } from "../docsearch-input";
import { NavbarIcons, NavbarLinks } from "../navbar";

export const HomeNavbar: FC = () => {
  return (
    <Navbar
      theme={{
        root: {
          base: "sticky top-0 z-40 mx-auto flex w-full items-center justify-between border-b border-gray-200 bg-white py-0 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400",
          inner: {
            base: "mx-auto flex w-full max-w-none flex-wrap items-center justify-between px-4 py-2.5 xl:max-w-8xl xl:px-20",
          },
        },
      }}
    >
      <div className="flex items-center gap-3">
        <Link href="/" className="sr-only">
          Flowbite React
        </Link>
        <Link
          aria-hidden
          href="/"
          className="flex items-center gap-3 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image alt="" aria-hidden height="32" src="/favicon.svg" width="32" />
          <span>Flowbite React</span>
        </Link>
        <div className="ml-4 hidden lg:flex">
          <DocSearchInput />
        </div>
      </div>
      <div className="flex items-center">
        <NavbarLinks />
        <NavbarIcons />
      </div>
    </Navbar>
  );
};
