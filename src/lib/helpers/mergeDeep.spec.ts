import { describe, expect, it } from 'vitest';
import { mergeDeep } from './mergeDeep';

describe('Helper / mergeDeep (Deeply merge two objects)', () => {
  describe('given two objects', () => {
    it('should combine unique shallow properties', () => {
      const combineMe = {
        a: 'a',
        b: 'b',
        c: 'c',
      };
      const withThis = {
        d: 'd',
        e: 'e',
      };

      expect(mergeDeep(combineMe, withThis)).toEqual({
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        e: 'e',
      });
    });

    describe('with identical key', () => {
      it("should use overriding object's value", () => {
        const combineMe = {
          base: 'base',
          content: {
            base: 'content',
          },
          flush: {
            off: 'no-flush',
            on: 'flush',
          },
        };
        const withThis = {
          base: 'new-base',
          content: {
            base: 'new-content',
          },
          flush: {
            off: 'new-no-flush',
            on: 'new-flush',
          },
        };

        expect(mergeDeep(combineMe, withThis)).toEqual({
          base: 'new-base',
          content: {
            base: 'new-content',
          },
          flush: {
            off: 'new-no-flush',
            on: 'new-flush',
          },
        });
      });

      describe('that is an object', () => {
        it('should combine keys from both objects', () => {
          const combineMe = {
            content: {
              base: 'base',
            },
          };
          const withThis = {
            content: {
              primary: 'primary',
            },
          };

          expect(mergeDeep(combineMe, withThis)).toEqual({
            content: {
              base: 'base',
              primary: 'primary',
            },
          });
        });
      });
    });
  });
});
