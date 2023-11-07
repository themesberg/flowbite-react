import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Flowbite } from '../Flowbite';
import { DarkThemeToggle } from './DarkThemeToggle';

describe('Dark theme toggle', () => {
  it('should toggle the theme when `Space` is pressed', async () => {
    const user = userEvent.setup();
    render(
      <Flowbite>
        <DarkThemeToggle />
      </Flowbite>,
    );

    await user.tab();
    await user.keyboard('[Space]');

    expect(screen.queryByLabelText('Currently light mode')).toHaveAttribute('data-active', 'false');
    expect(screen.queryByLabelText('Currently dark mode')).toHaveAttribute('data-active', 'true');
  });
});
