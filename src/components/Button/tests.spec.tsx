import React from 'react';
import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

describe('Button component', () => {
  afterEach(cleanup);

  it('should be able to render an button', () => {
    const { getByTestId } = render(<Button />);
    expect(getByTestId('button-element')).toBeTruthy();
  });

  it('should be clickable', (done) => {
    const { getByTestId } = render(<Button onClick={() => done()}>Click me</Button>);
    userEvent.click(getByTestId('button-element'));
  });
});
