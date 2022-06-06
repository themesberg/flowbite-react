import { describe, expect, it } from 'vitest';
import exclude from './exclude';

describe('Helpers / Exclude (delete key from object)', () => {
  describe('Given object that contains targeted key', () => {
    it('should return input object without that key', () => {
      const input = {
        a: 1,
        b: 2,
        c: 3,
      };
      const output = exclude({ key: 'a', source: input });

      expect(output).toEqual({
        b: 2,
        c: 3,
      });
    });
  });

  describe('Given object that does not contain target key', () => {
    it('should return input object', () => {
      const input = {
        b: 2,
        c: 3,
      };
      const output = exclude({ key: 'a', source: input });

      expect(output).toEqual({
        b: 2,
        c: 3,
      });
    });
  });
});
