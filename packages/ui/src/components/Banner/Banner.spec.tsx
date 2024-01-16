import userEvent from '@testing-library/user-event';
import { Banner } from './Banner';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Components / Banner', () => {
  it('should close when collapse button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Banner>
          <Banner.CollapseButton>Click me</Banner.CollapseButton>
        </Banner>
      </div>,
    );

    await user.tab();
    await user.keyboard('[Space]');

    expect(screen.queryByRole('banner')).not.toBeInTheDocument();
  });
});
