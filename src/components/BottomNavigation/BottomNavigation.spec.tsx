import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BottomNavigation } from './BottomNavigation';

describe.concurrent('BottomNavigation', async () => {
  it('BottomNavigation should have "data-testid=flowbite-bottom-navigation" in the document', async () => {
    render(<TestBottomNavigation />);

    bottomNavTestId().forEach((bottomNavTestId) => {
      expect(bottomNavTestId).toBeInTheDocument();
    });
  });

  it('BottomNavigation.Item should have "data-testid=flowbite-bottom-nav-item" in the document', async () => {
    render(<TestBottomNavigation />);

    bottomNavItemTestId().forEach((bottomNavItemTest) => {
      expect(bottomNavItemTest).toBeInTheDocument();
    });
  });

  it('BottomNavigation.Item should have "button" in the document', async () => {
    render(<TestBottomNavigation />);

    bottomNavItemButton().forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  it('BottomNavigation.Item should have "Home" in the document', async () => {
    render(<TestBottomNavigation />);

    homeTextInButton().forEach((homeText) => {
      expect(homeText).toBeInTheDocument();
    });
  });

  it('should have "attribute of type = button" in the document', async () => {
    render(<TestBottomNavigation />);

    bottomNavItemTestId().forEach((buttonType) => {
      expect(buttonType).toHaveAttribute('type', 'button');
    });
  });

  it('tooltip in document', async () => {
    render(<TestBottomNavigation />);

    expect(tooltips()).toBeInTheDocument();
  });
});

const bottomNavTestId = () => screen.getAllByTestId('flowbite-bottom-navigation');
const bottomNavItemTestId = () => screen.getAllByTestId('flowbite-bottom-nav-item');
const bottomNavItemButton = () => screen.getAllByRole('button');
const homeTextInButton = () => screen.getAllByText('Home');
const tooltips = () => screen.getByTestId('flowbite-tooltip');

const TestBottomNavigation = (): JSX.Element => {
  return (
    <div>
      <BottomNavigation>
        <BottomNavigation.Item label="Home" />
      </BottomNavigation>

      <BottomNavigation>
        <BottomNavigation.Item label="Home" showTooltip />
      </BottomNavigation>
    </div>
  );
};
