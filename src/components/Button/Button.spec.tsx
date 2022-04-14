import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HiSun } from 'react-icons/hi';

import { Button } from '.';

describe('Button Component', () => {
  afterEach(cleanup);

  it('should be able to render a button', () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId('button-element')).toBeTruthy();
  });

  it('should be able to render a pull button', () => {
    const { getByTestId } = render(<Button pill />);
    expect(getByTestId('button-element').className).toContain('rounded-full');
  });

  it('should be able to render a pill outline button', () => {
    const { getByTestId } = render(<Button pill outline />);
    expect(getByTestId('button-element').children[0].className).toContain(
      'bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white',
    );
  });

  it('should be able to render an outline alternative button', () => {
    const { getByTestId } = render(<Button color="alternative" outline />);
    expect(getByTestId('button-element').children[0].className).toContain(
      'bg-white text-gray-900 transition-all duration-75 ease-in group-hover:bg-opacity-0 group-hover:text-inherit dark:bg-gray-900 dark:text-white',
    );
  });

  it('should be able to render a button with gradient monochrome color', () => {
    const { getByTestId } = render(<Button gradientMonochrome="red" />);
    expect(getByTestId('button-element').className).toContain('from-red-400 via-red-500 to-red-600');
  });

  it('should be able to render a button with gradient duo-tone color', () => {
    const { getByTestId } = render(<Button gradientDuoTone="purpleToPink" />);
    expect(getByTestId('button-element').className).toContain('from-purple-500 to-pink-500');
  });

  it('should be able to render a button with a label', () => {
    const { getByTestId } = render(<Button label="this-is-a-label" />);
    expect(getByTestId('button-element').children[0].children[0].innerHTML).toEqual('this-is-a-label');
  });

  it('should be able to render an icon button', () => {
    const { getByTestId } = render(<Button icon={HiSun} />);
    expect(getByTestId('button-element').children[0].children.length).toEqual(1);
    expect(getByTestId('button-element').children[0].children[0].tagName).toEqual('svg');
  });

  it('should be clickable', (done) => {
    const { getByTestId } = render(<Button onClick={() => done()}>Click me</Button>);
    userEvent.click(getByTestId('button-element'));
  });
});
