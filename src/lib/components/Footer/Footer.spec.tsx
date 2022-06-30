import { render } from '@testing-library/react';
import { BsFacebook } from 'react-icons/bs';
import { describe, expect, it } from 'vitest';
import { Footer } from '.';
import { Flowbite } from '../Flowbite';

describe.concurrent('Footer component should be able to', () => {
  it('rendering itself', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer-element')).toBeTruthy();
  });

  describe('use theme support', () => {
    const theme = {
      footer: {
        container: 'w-full p-6',
        bgDark: 'bg-gray-800',
        groupLink: {
          col: 'flex-col space-y-4',
        },
      },
    };

    it('must have container classes', () => {
      const { getByText } = render(
        <Flowbite theme={{ theme }}>
          <Footer container>Container</Footer>
        </Flowbite>,
      );
      const containerFooter = getByText('Container');
      expect(containerFooter).toHaveClass('w-full p-6');
    });

    it('must have bgDark classes', () => {
      const { getByText } = render(
        <Flowbite theme={{ theme }}>
          <Footer bgDark>BgDark</Footer>
        </Flowbite>,
      );
      const bgDarkFooter = getByText('BgDark');
      expect(bgDarkFooter).toHaveClass('bg-gray-800');
    });
  });

  describe('footer brand should be able to', () => {
    it('render itself', () => {
      const { getByTestId } = render(<Footer.Brand src="" />);
      expect(getByTestId('footer-brand')).toBeTruthy();
    });

    it('render img with link', () => {
      const { getByTestId } = render(
        <Footer.Brand
          href="https://flowbite.com"
          src="https://flowbite.com/docs/images/logo.svg"
          alt="Flowbite Logo"
          name="Flowbite"
        />,
      );
      const footerBrand = getByTestId('footer-brand');

      expect(footerBrand.children[0].children[0].tagName).toEqual('IMG');
      expect((footerBrand.children[0] as HTMLAnchorElement).href).toEqual('https://flowbite.com/');
    });

    it('render img without link', () => {
      const { getByTestId } = render(<Footer.Brand src="https://flowbite.com/docs/images/logo.svg" />);
      expect((getByTestId('footer-brand').children[0] as HTMLImageElement).src).toEqual(
        'https://flowbite.com/docs/images/logo.svg',
      );
    });
  });

  describe('footer icons should be able to ', () => {
    it('render the icon with link', () => {
      const { getByTestId } = render(<Footer.Icon href="https://www.flowbite.com" icon={BsFacebook} />);
      const footerIcon = getByTestId('footer-icon');

      expect(footerIcon.children[0].tagName).toEqual('A');
      expect((footerIcon.children[0] as HTMLAnchorElement).href).toEqual('https://www.flowbite.com/');
      expect(footerIcon.children[0].children[0].tagName).toEqual('svg');
    });

    it('render only icon', () => {
      const { getByTestId } = render(<Footer.Icon icon={BsFacebook} />);
      expect(getByTestId('footer-icon').children[0].tagName).toEqual('svg');
    });

    it('render aria attributes', () => {
      const { getByTestId } = render(<Footer.Icon icon={BsFacebook} href="#" ariaLabel="Something" />);
      expect(getByTestId('footer-icon').children[0] as HTMLAnchorElement).toHaveAccessibleName('Something');
    });
  });

  describe('footer divider', () => {
    it('rendering itself', () => {
      const { getByTestId } = render(<Footer.Divider />);
      expect(getByTestId('footer-divider')).toBeTruthy();
    });
  });

  describe('Link group use theme support', () => {
    it('must have col classes', () => {
      const theme = {
        footer: {
          groupLink: {
            col: 'flex-col space-y-4',
          },
        },
      };
      const { getByTestId } = render(
        <Flowbite theme={{ theme }}>
          <Footer.LinkGroup col>
            <Footer.Link href="#">Hi</Footer.Link>
          </Footer.LinkGroup>
        </Flowbite>,
      );
      expect(getByTestId('footer-groupLink')).toHaveClass('flex-col space-y-4');
    });
  });

  describe('footer title', () => {
    it('rendering itself', () => {
      const { getByTestId } = render(<Footer.Title title="Something" />);
      expect(getByTestId('footer-title')).toBeTruthy();
    });
  });

  describe('footer copyright', () => {
    it('render itself', () => {
      const { getByTestId } = render(<Footer.Copyright by="" />);
      expect(getByTestId('footer-copyright')).toBeTruthy();
    });

    it('render link', () => {
      const { getByTestId } = render(<Footer.Copyright by="" href="https://flowbite.com/" />);

      expect((getByTestId('footer-copyright').children[0].children[0] as HTMLAnchorElement).href).toEqual(
        'https://flowbite.com/',
      );
    });

    it('render children', () => {
      const { getByTestId } = render(<Footer.Copyright by="" year={2020} />);
      expect(getByTestId('footer-copyright').children[0].children[0].tagName).toEqual('SPAN');
    });
  });
});
