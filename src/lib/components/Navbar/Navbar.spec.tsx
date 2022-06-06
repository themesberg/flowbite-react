import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Navbar } from '.';

describe.concurrent('Navbar', () => {
  describe('its toggle button', () => {
    describe('when clicked', () => {
      describe('when Navbar is collapsed', () => {
        it('should show the collapse (menu) contents', () => {
          const { getByTestId } = render(<NavbarTest />);

          const collapse = getByTestId('navbar-collapse');
          const toggleButton = getByTestId('navbar-toggle');

          expect(collapse).toHaveClass('hidden');

          userEvent.click(toggleButton);
          expect(collapse).not.toHaveClass('hidden');
        });
      });

      describe('when Navbar is expanded', () => {
        it('should hide the collapse (menu) contents', () => {
          const { getByTestId } = render(<NavbarTest />);

          const collapse = getByTestId('navbar-collapse');
          const toggleButton = getByTestId('navbar-toggle');

          userEvent.click(toggleButton);
          expect(collapse).not.toHaveClass('hidden');

          userEvent.click(toggleButton);
          expect(collapse).toHaveClass('hidden');
        });
      });
    });
  });
});

const NavbarTest = (): JSX.Element => (
  <Navbar>
    <Navbar.Brand href="https://flowbite.com/">
      <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link href="/navbars" active>
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">About</Navbar.Link>
      <Navbar.Link href="/navbars">Services</Navbar.Link>
      <Navbar.Link href="/navbars">Pricing</Navbar.Link>
      <Navbar.Link href="/navbars">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
);
