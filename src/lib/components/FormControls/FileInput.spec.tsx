import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import { FileInput } from './FileInput';

describe.concurrent('Components / Form controls / File input', () => {
  it('should render', () => {
    render(<FileInput />);
  });
});
