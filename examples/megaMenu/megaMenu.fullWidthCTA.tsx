import { HiArrowRight, HiChevronDown } from 'react-icons/hi';
import { type CodeData } from '~/components/code-demo';
import {
  MegaMenu,
  MegaMenuCollapse,
  MegaMenuToggle,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from '~/src';

const code = `
'use client';

import { MegaMenu, Navbar } from 'flowbite-react';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';

function Component() {
  return (
    <MegaMenu>
      <Navbar.Brand href="/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link>
          <MegaMenu.Toggle>
            Company
            <HiChevronDown className="ml-2" />
          </MegaMenu.Toggle>
        </Navbar.Link>
        <Navbar.Link href="/">Marketplace</Navbar.Link>
        <Navbar.Link href="/">Resources</Navbar.Link>
        <Navbar.Link href="/">Contact</Navbar.Link>
      </Navbar.Collapse>
      <MegaMenu.Collapse>
        <div className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul className="space-y-4 sm:mb-4 md:mb-0">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Online Stores
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Segmentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Marketing CRM
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Online Stores
              </a>
            </li>
          </ul>
          <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                License
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Resources
              </a>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              At Flowbite, we have a portfolio of brands that cater to a variety of preferences.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Explore our brands
              <span className="sr-only">Explore our brands</span>
              <HiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </MegaMenu.Collapse>
    </MegaMenu>
  );
}
`;

const codeRSC = `
import { 
  MegaMenu, 
  MegaMenuCollapse, 
  MegaMenuToggle,
  Navbar, 
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle
} from 'flowbite-react';
import { HiArrowRight, HiChevronDown } from 'react-icons/hi';

function Component() {
  return (
    <MegaMenu>
      <NavbarBrand href="/">
        <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink>
          <MegaMenuToggle>
            Company
            <HiChevronDown className="ml-2" />
          </MegaMenuToggle>
        </NavbarLink>
        <NavbarLink href="/">Marketplace</NavbarLink>
        <NavbarLink href="/">Resources</NavbarLink>
        <NavbarLink href="/">Contact</NavbarLink>
      </NavbarCollapse>
      <MegaMenuCollapse>
        <div className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul className="space-y-4 sm:mb-4 md:mb-0">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Online Stores
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Segmentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Marketing CRM
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Online Stores
              </a>
            </li>
          </ul>
          <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                License
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Resources
              </a>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              At Flowbite, we have a portfolio of brands that cater to a variety of preferences.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Explore our brands
              <span className="sr-only">Explore our brands</span>
              <HiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </MegaMenuCollapse>
    </MegaMenu>
  );
}
`;

function Component() {
  return (
    <MegaMenu>
      <NavbarBrand href="/">
        <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink>
          <MegaMenuToggle>
            Company
            <HiChevronDown className="ml-2" />
          </MegaMenuToggle>
        </NavbarLink>
        <NavbarLink href="/">Marketplace</NavbarLink>
        <NavbarLink href="/">Resources</NavbarLink>
        <NavbarLink href="/">Contact</NavbarLink>
      </NavbarCollapse>
      <MegaMenuCollapse>
        <div className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-4 py-5 text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
          <ul className="space-y-4 sm:mb-4 md:mb-0">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Online Stores
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Segmentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Marketing CRM
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Online Stores
              </a>
            </li>
          </ul>
          <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Our Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                License
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Resources
              </a>
            </li>
          </ul>
          <div className="mt-4 md:mt-0">
            <h2 className="mb-2 font-semibold text-gray-900 dark:text-white">Our brands</h2>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              At Flowbite, we have a portfolio of brands that cater to a variety of preferences.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Explore our brands
              <span className="sr-only">Explore our brands</span>
              <HiArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </MegaMenuCollapse>
    </MegaMenu>
  );
}

export const fullWidthCTA: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'megaMenu/megaMenu.fullWidthCTA.tsx',
  component: <Component />,
};
