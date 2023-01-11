import { render, screen } from '@testing-library/react';
import AvatarGroup from './AvatarGroup';

describe('AvatarGroup', () => {
  it('renders the avatar group element with the correct classname', () => {
    render(
      <AvatarGroup className="test-class">
        <div>Test child</div>
      </AvatarGroup>,
    );
    const avatarGroupElement = screen.getByTestId('avatar-group-element');
    expect(avatarGroupElement).toBeInTheDocument();
    expect(avatarGroupElement).toHaveClass('test-class');
  });

  it('merges the custom theme with the default theme', () => {
    render(
      <AvatarGroup theme={{ base: 'custom-base-class' }}>
        <div>Test child</div>
      </AvatarGroup>,
    );
    const avatarGroupElement = screen.getByTestId('avatar-group-element');
    expect(avatarGroupElement).toHaveClass('custom-base-class');
  });
});
