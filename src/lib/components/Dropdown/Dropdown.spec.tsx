import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC } from 'react';
import { describe, expect, it } from 'vitest';
import { Dropdown } from '.';

describe('Components / Dropdown', () => {
  describe('Keyboard interactions', () => {
    it('should collapse if expanded when `Space` is pressed', async () => {
      const user = userEvent.setup();
      render(<TestDropdown />);

      expect(dropdown()).toHaveClass('invisible');

      await user.click(button());

      expect(dropdown()).not.toHaveClass('invisible');
    });

    it('should expand if collapsed when `Space` is pressed', async () => {
      const user = userEvent.setup();
      render(<TestDropdown />);

      await user.click(button());
      await user.click(button());

      expect(dropdown()).toHaveClass('invisible');
    });
  });
});

const TestDropdown: FC = () => (
  <Dropdown label="Dropdown button" placement="right">
    <Dropdown.Header>
      <span className="block text-sm">Bonnie Green</span>
      <span className="block truncate text-sm font-medium">name@flowbite.com</span>
    </Dropdown.Header>
    <Dropdown.Item>Dashboard</Dropdown.Item>
    <Dropdown.Item>Settings</Dropdown.Item>
    <Dropdown.Item>Earnings</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item>Sign out</Dropdown.Item>
  </Dropdown>
);

const button = () => screen.getByRole('button');

const dropdown = () => screen.getByTestId('flowbite-tooltip');
