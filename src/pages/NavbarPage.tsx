import { FC } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Button, Navbar } from '../components';

const NavbarPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Navbar',
      code: (
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite.com/">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#/navbars" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#/navbars">About</Navbar.Link>
            <Navbar.Link href="#/navbars">Services</Navbar.Link>
            <Navbar.Link href="#/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="#/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Navbar with CTA button',
      code: (
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite.com/">
            <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button>Get started</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#/navbars" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#/navbars">About</Navbar.Link>
            <Navbar.Link href="#/navbars">Services</Navbar.Link>
            <Navbar.Link href="#/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="#/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];
  return <DemoPage examples={examples} />;
};

export default NavbarPage;
