import { render, screen } from '@testing-library/react';
import type { FC } from 'react';
import { HiHome } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { Flowbite, type CustomFlowbiteTheme } from '../Flowbite';
import { Breadcrumb } from './Breadcrumb';

describe('Components / Breadcrumb', () => {
  it('should have `role="navigation"`', () => {
    render(<TestBreadcrumb />);

    expect(breadcrumb()).toBeInTheDocument();
  });

  it('should contain a `role="list"`', () => {
    render(<TestBreadcrumb />);

    expect(breadcrumb()).toContainElement(breadcrumbList());
  });

  it('should contain a `role="listitem"` for each `Breadcrumb.Item`', () => {
    render(<TestBreadcrumb />);

    expect(items()[0]).toHaveTextContent('Home');
    expect(items()[1]).toHaveTextContent('Projects');
    expect(items()[2]).toHaveTextContent('Flowbite React');
  });

  it('should contain a `role="link"` for each `Breadcrumb.Item href=".."`', () => {
    render(<TestBreadcrumb />);

    expect(links()[0]).toHaveTextContent('Home');
    expect(links()[1]).toHaveTextContent('Projects');
  });

  it('should use `aria-label` if provided', () => {
    render(<TestBreadcrumb />);

    expect(breadcrumb()).toHaveAccessibleName('test label');
  });

  it('should use custom list classes via theme={}', () => {
    const theme: CustomFlowbiteTheme = {
      breadcrumb: {
        root: {
          list: 'gap-6',
        },
      },
    };
    render(
      <Flowbite theme={{ theme }}>
        <TestBreadcrumb />
      </Flowbite>,
    );

    expect(breadcrumbList()).toHaveClass('gap-6');
  });

  it('should use custom item classes via theme={}', () => {
    const theme: CustomFlowbiteTheme = {
      breadcrumb: {
        item: {
          base: 'justify-center',
          chevron: 'h-9 w-9',
          href: {
            off: 'text-md',
            on: 'text-lg',
          },
          icon: 'h-6 w-6',
        },
      },
    };
    render(
      <Flowbite theme={{ theme }}>
        <TestBreadcrumb />
      </Flowbite>,
    );

    expect(items()[0]).toHaveClass('justify-center');
    expect(contents()[0]).toHaveAttribute('href');
    expect(contents()[0]).toHaveClass('text-lg');

    expect(items()[2]).toHaveClass('justify-center');
    expect(contents()[2]).not.toHaveAttribute('href');
    expect(contents()[2]).toHaveClass('text-md');
  });
});

const TestBreadcrumb: FC = () => (
  <Breadcrumb aria-label="test label">
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item icon={HiHome}>Flowbite React</Breadcrumb.Item>
  </Breadcrumb>
);

const breadcrumb = () => screen.getByRole('navigation');

const breadcrumbList = () => screen.getByRole('list');

const items = () => screen.getAllByRole('listitem');

const links = () => screen.getAllByRole('link');

const contents = () => screen.getAllByTestId('flowbite-breadcrumb-item');
