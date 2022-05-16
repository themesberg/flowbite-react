import { cleanup, render } from '@testing-library/react';
import { Footer } from '.';

describe('Footer Component should be able to render a', () => {
  afterEach(cleanup);

  it('footer', () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('footer-element')).toBeTruthy();
  });
});
