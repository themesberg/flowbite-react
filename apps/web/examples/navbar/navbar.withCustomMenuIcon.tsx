import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";

export function Component() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle barIcon={CiMenuFries} />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
`;

const codeRSC = `
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export function Component() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle barIcon={CiMenuFries} />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
`;

export function Component() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <NavbarToggle barIcon={CiMenuFries} />
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          About
        </NavbarLink>
        <NavbarLink href="#">Services</NavbarLink>
        <NavbarLink href="#">Pricing</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export const withCustomMenuIcon: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
    {
      fileName: "server",
      language: "tsx",
      code: codeRSC,
    },
  ],
  githubSlug: "navbar/navbar.withCustomMenuIcon.tsx",
  component: <Component />,
  iframe: {
    height: 300,
    noPadding: true,
  },
};
