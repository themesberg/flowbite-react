import { describe, expect, it } from 'vitest';
import { cloneDeep } from './clone-deep';

describe('Helpers / cloneDeep', () => {
  it('should clone a simple object', () => {
    const source = { key: 'value' };
    const cloned = cloneDeep(source);
    expect(cloned).toEqual(source); // Check for deep equality
    expect(cloned).not.toBe(source); // Ensure it's a deep clone, not the same reference
  });

  it('should handle null gracefully', () => {
    const source = null;
    const cloned = cloneDeep(source);
    expect(cloned).toBeNull();
  });

  it('should handle undefined gracefully', () => {
    const source = undefined;
    const cloned = cloneDeep(source);
    expect(cloned).toBeUndefined();
  });
});
