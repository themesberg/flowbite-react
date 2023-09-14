import { describe, expect, it } from 'vitest';
import { range } from './helpers';

describe('Helpers / Range', () => {
  it('should return the empty list, given start >= end', () => {
    expect(range(20, 10)).toEqual([]);
    expect(range(10, 10)).toEqual([]);
  });

  it('should return every number from start to end, inclusive, given start < end', () => {
    expect(range(10, 20)).toEqual([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  });
});
