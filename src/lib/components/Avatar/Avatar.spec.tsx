import { cleanup, render } from '@testing-library/react';
import { Avatar } from '.';

describe('Avatar Component', () => {
  afterEach(cleanup);

  it('should be able to render a avatar', () => {
    const { getByTestId } = render(<Avatar />);
    expect(getByTestId('avatar-element')).toBeTruthy();
  });

  it('should be able to render a rounded avatar', () => {
    const { getByTestId } = render(<Avatar rounded={true} />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain('rounded-full');
  });
});
