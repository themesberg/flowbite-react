import { describe, expect, it } from 'vitest';
import { isObject } from './is-object';

describe('isObject function', () => {
  it('should return true for an empty object', () => {
    expect(isObject({})).toBe(true);
  });

  it('should return true for a non-empty object', () => {
    expect(isObject({ key: 'value' })).toBe(true);
  });

  it('should return false for a string', () => {
    expect(isObject('string')).toBe(false);
  });

  it('should return false for an array', () => {
    expect(isObject([1, 2, 3])).toBe(false);
  });

  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });
});
