import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from '.';

describe('Components / Dropdown', () => {
  describe('Collapsed', () => {
    describe('when trigger is clicked', () => {
      it('should expand', () => {
        const { getByRole, getByTestId } = render(<TestDropdown />);
        const triggerButton = getByRole('button');

        expect(getByTestId('tooltip')).toHaveClass('invisible');

        userEvent.click(triggerButton);
        expect(getByTestId('tooltip')).not.toHaveClass('invisible');
      });
    });
  });

  describe('Expanded', () => {
    describe('when trigger is clicked', () => {
      it('should collapse', () => {
        const { getByRole, getByTestId } = render(<TestDropdown />);
        const triggerButton = getByRole('button');

        userEvent.click(triggerButton);
        userEvent.click(triggerButton);
        expect(getByTestId('tooltip')).toHaveClass('invisible');
      });
    });
  });
});

const TestDropdown = (): JSX.Element => (
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
