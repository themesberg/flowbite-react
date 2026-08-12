import {
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import type { CodeData } from "~/components/code-demo";

const code = `
import {
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";

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
        <NavbarLink as="span">
          <MegaMenuDropdownToggle>
            Company
            <HiChevronDown className="ml-2" />
          </MegaMenuDropdownToggle>
        </NavbarLink>
        <NavbarLink as="span">
          <MegaMenuDropdownToggle>
            Marketing
            <HiChevronDown className="ml-2" />
          </MegaMenuDropdownToggle>
        </NavbarLink>
        <NavbarLink href="/">Contact</NavbarLink>
      </NavbarCollapse>
      <MegaMenuDropdown className="hidden">
        <ul className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-2 py-5 shadow-sm sm:grid-cols-2 md:grid-cols-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">About Us</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Learn more about our mission and team.</span>
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Careers</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Browse the roles we are hiring for.</span>
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Brand Center</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Download our logos and brand assets.</span>
            </a>
          </li>
        </ul>
      </MegaMenuDropdown>
      <MegaMenuDropdown className="hidden">
        <ul className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-2 py-5 shadow-sm sm:grid-cols-2 md:grid-cols-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Blog</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Read the latest product announcements.</span>
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Newsletter</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Get a monthly digest in your inbox.</span>
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Events</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Meet the team at an upcoming meetup.</span>
            </a>
          </li>
        </ul>
      </MegaMenuDropdown>
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
        <NavbarLink as="span">
          <MegaMenuDropdownToggle>
            Company
            <HiChevronDown className="ml-2" />
          </MegaMenuDropdownToggle>
        </NavbarLink>
        <NavbarLink as="span">
          <MegaMenuDropdownToggle>
            Marketing
            <HiChevronDown className="ml-2" />
          </MegaMenuDropdownToggle>
        </NavbarLink>
        <NavbarLink href="/">Contact</NavbarLink>
      </NavbarCollapse>
      <MegaMenuDropdown className="hidden">
        <ul className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-2 py-5 shadow-sm sm:grid-cols-2 md:grid-cols-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">About Us</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Learn more about our mission and team.</span>
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Careers</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Browse the roles we are hiring for.</span>
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Brand Center</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Download our logos and brand assets.</span>
            </a>
          </li>
        </ul>
      </MegaMenuDropdown>
      <MegaMenuDropdown className="hidden">
        <ul className="mx-auto mt-6 grid max-w-screen-xl border-y border-gray-200 px-2 py-5 shadow-sm sm:grid-cols-2 md:grid-cols-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Blog</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Read the latest product announcements.</span>
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Newsletter</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Get a monthly digest in your inbox.</span>
            </a>
          </li>
          <li>
            <a href="#" className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700">
              <div className="font-semibold">Events</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">Meet the team at an upcoming meetup.</span>
            </a>
          </li>
        </ul>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}

export const multipleDropdowns: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "megaMenu/megaMenu.multipleDropdowns.tsx",
  component: <Component />,
};
