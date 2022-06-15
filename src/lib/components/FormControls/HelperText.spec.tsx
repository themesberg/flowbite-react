import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import HelperText from './HelperText';

describe.concurrent('Components / Form controls / Helper text', () => {
  it('should render', () => {
    render(<HelperText />);
  });
});
