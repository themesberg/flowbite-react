import { cleanup, render } from '@testing-library/react';
import { BsFacebook } from 'react-icons/bs';
import { describe, expect, it } from 'vitest';
import { Footer } from '.';

describe.concurrent('Footer Component should be able to render a', () => {
  afterEach(cleanup);

  it('footer', () => {
    const { getByTestId } = render(<FooterTest />);
    expect(getByTestId('footer-element')).toBeTruthy();
  });

  it('footer with logo', () => {
    const { getByTestId } = render(<FooterTest />);
    expect((getByTestId('footer-element').children[0].children[0] as HTMLImageElement).src).toEqual(
      'https://flowbite.com/docs/images/logo.svg',
    );
  });

  it('footer with social media icons ', () => {
    const { getByTestId } = render(<FooterTest />);
    expect(getByTestId('footer-element').children[3].children[0].tagName).toEqual('svg');
  });
});

const FooterTest = (): JSX.Element => (
  <Footer className="flex flex-col">
    <Footer.Brand
      href="https://flowbite.com"
      src="https://flowbite.com/docs/images/logo.svg"
      alt="Flowbite Logo"
      name="Flowbite"
    />
    <Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
      <Footer.Link href="#">About</Footer.Link>
      <Footer.Link href="#">Services</Footer.Link>
    </Footer.LinkGroup>
    <Footer.Copyright href="#" by="Flowbite™" year={2022} />
    <Footer.Icon href="#" className="text-gray-400 hover:text-gray-900" icon={BsFacebook} />
  </Footer>
);
