import type { Meta, StoryFn } from "@storybook/react-vite";
import {
  Button,
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import type { MegaMenuProps } from "flowbite-react";

export default {
  title: "Components/MegaMenu",
  component: MegaMenu,
} as Meta;

const Template: StoryFn<MegaMenuProps> = (args) => (
  <MegaMenu {...args}>
    <NavbarBrand href="/">
      <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavbarBrand>
    <div className="order-2 hidden items-center md:flex">
      <a
        href="#"
        className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:mr-2 md:px-5 md:py-2.5"
      >
        Login
      </a>
      <Button href="#">Sign up</Button>
    </div>
    <NavbarToggle />
    <NavbarCollapse>
      <NavbarLink href="#">Home</NavbarLink>
      <MegaMenuDropdown toggle={<>Company</>}>
        <ul className="grid grid-cols-3">
          <div className="space-y-4 p-4">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Library
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Pro Version
              </a>
            </li>
          </div>
          <div className="space-y-4 p-4">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Support Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Terms
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Blog
              </a>
            </li>
          </div>
          <div className="space-y-4 p-4">
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Newsletter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                Playground
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-600 dark:hover:text-primary-500">
                License
              </a>
            </li>
          </div>
        </ul>
      </MegaMenuDropdown>
      <NavbarLink href="#">Team</NavbarLink>
      <NavbarLink href="#">Contact</NavbarLink>
    </NavbarCollapse>
  </MegaMenu>
);

export const Default = Template.bind({});
Default.args = {};

const MultipleDropdownsTemplate: StoryFn<MegaMenuProps> = (args) => (
  <MegaMenu {...args}>
    <NavbarBrand href="/">
      <img alt="" src="/favicon.svg" className="mr-3 h-6 sm:h-9" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </NavbarBrand>
    <NavbarToggle />
    <NavbarCollapse>
      <NavbarLink href="#">Home</NavbarLink>
      <NavbarLink as="span">
        <MegaMenuDropdownToggle>Company</MegaMenuDropdownToggle>
      </NavbarLink>
      <NavbarLink as="span">
        <MegaMenuDropdownToggle>Marketing</MegaMenuDropdownToggle>
      </NavbarLink>
      <NavbarLink href="#">Contact</NavbarLink>
    </NavbarCollapse>
    <MegaMenuDropdown className="hidden">
      <ul className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-2 py-5 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:grid-cols-2 md:grid-cols-3">
        <li>
          <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">About Us</div>
          </a>
        </li>
        <li>
          <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Careers</div>
          </a>
        </li>
        <li>
          <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Brand Center</div>
          </a>
        </li>
      </ul>
    </MegaMenuDropdown>
    <MegaMenuDropdown className="hidden">
      <ul className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-2 py-5 shadow-sm dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:grid-cols-2 md:grid-cols-3">
        <li>
          <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Blog</div>
          </a>
        </li>
        <li>
          <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Newsletter</div>
          </a>
        </li>
        <li>
          <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
            <div className="font-semibold">Events</div>
          </a>
        </li>
      </ul>
    </MegaMenuDropdown>
  </MegaMenu>
);

export const MultipleDropdowns = MultipleDropdownsTemplate.bind({});
MultipleDropdowns.args = {};
