import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BottomNavigation } from './BottomNavigation';

describe.concurrent('BottomNavigation', async () => {
  it('BottomNavigation should have "data-testid=flowbite-bottom-navigation" in the document', async () => {
    render(
      <BottomNavigation>
        <BottomNavigation.Item label="Hme" />
      </BottomNavigation>,
    );

    expect(bottomNavTestId()).toBeInTheDocument();
  });

  it('BottomNavigation.Item should have "data-testid=flowbite-bottom-nav-item" in the document', async () => {
    render(
      <BottomNavigation>
        <BottomNavigation.Item label="Hme" />
      </BottomNavigation>,
    );

    expect(bottomNavItemTestId()).toBeInTheDocument();
  });

  it('BottomNavigation.Item should have "button" in the document', async () => {
    render(
      <BottomNavigation>
        <BottomNavigation.Item label="Hme" />
      </BottomNavigation>,
    );

    bottomNavItemButton().forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });
});

const bottomNavTestId = () => screen.getByTestId('flowbite-bottom-navigation');
const bottomNavItemTestId = () => screen.getByTestId('flowbite-bottom-nav-item');
const bottomNavItemButton = () => screen.getAllByRole('button');
