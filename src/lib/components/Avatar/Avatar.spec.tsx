import { cleanup, render } from '@testing-library/react';
import { Avatar } from '.';
import AvatarGroup from './AvatarGroup';

describe('Avatar Component should be able to render a', () => {
  afterEach(cleanup);

  it('avatar', () => {
    const { getByTestId } = render(<Avatar />);
    expect(getByTestId('avatar-element')).toBeTruthy();
  });

  it('avatar with image', () => {
    const { getByTestId } = render(
      <Avatar img='img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"' />,
    );
    expect(getByTestId('avatar-element')).toBeTruthy();
  });

  it('rounded avatar ', () => {
    const { getByTestId } = render(<Avatar rounded={true} />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain('rounded-full');
  });

  it('bordered avatar', () => {
    const { getByTestId } = render(<Avatar bordered={true} />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain(
      'ring-2 ring-gray-300 dark:ring-gray-500 p-1',
    );
  });

  it('dot indicator avatar with offline status', () => {
    const { getByTestId } = render(<Avatar status="offline" />);
    expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
      expect.arrayContaining(['absolute', 'bg-gray-400']),
    );
  });

  it('dot indicator avatar with online status', () => {
    const { getByTestId } = render(<Avatar status="online" />);
    expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
      expect.arrayContaining(['absolute', 'bg-green-400']),
    );
  });

  it('dot indicator avatar with away status', () => {
    const { getByTestId } = render(<Avatar status="away" />);
    expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
      expect.arrayContaining(['absolute', 'bg-yellow-400']),
    );
  });

  it('dot indicator avatar with busy status', () => {
    const { getByTestId } = render(<Avatar status="busy" />);
    expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
      expect.arrayContaining(['absolute', 'bg-red-400']),
    );
  });

  it('dot indicator avatar position top-left', () => {
    const { getByTestId } = render(<Avatar status="offline" statusPosition="top-left" />);
    expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
      expect.arrayContaining(['absolute', '-top-1', '-left-1']),
    );
  });

  it('dot indicator avatar position top-right', () => {
    const { getByTestId } = render(<Avatar status="offline" statusPosition="top-right" />);
    expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
      expect.arrayContaining(['absolute', '-top-1', '-right-1']),
    );
  });

  it('dot indicator avatar position bottom-left', () => {
    const { getByTestId } = render(<Avatar status="offline" statusPosition="bottom-left" />);
    expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
      expect.arrayContaining(['absolute', '-bottom-1', '-left-1']),
    );
  });

  it('dot indicator avatar position bottom-right', () => {
    const { getByTestId } = render(<Avatar status="offline" statusPosition="bottom-right" />);
    expect(getByTestId('avatar-element').children[0].children[1].className.split(' ')).toEqual(
      expect.arrayContaining(['absolute', '-bottom-1', '-right-1']),
    );
  });

  it('avatar with size xs', () => {
    const { getByTestId } = render(<Avatar size="xs" />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-6 h-6');
  });

  it('avatar with size sm', () => {
    const { getByTestId } = render(<Avatar size="sm" />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-8 h-8');
  });

  it('avatar with size md', () => {
    const { getByTestId } = render(<Avatar size="md" />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-10 h-10');
  });

  it('avatar with size lg', () => {
    const { getByTestId } = render(<Avatar size="lg" />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-20 h-20');
  });

  it('avatar with size xl', () => {
    const { getByTestId } = render(<Avatar size="xl" />);
    expect(getByTestId('avatar-element').children[0].children[0].className).toContain('w-36 h-36');
  });

  it('avatar group', () => {
    const { getByTestId } = render(
      <AvatarGroup>
        <Avatar />
        <Avatar />
      </AvatarGroup>,
    );
    expect(getByTestId('avatar-group-element')).toBeTruthy();
  });
});
